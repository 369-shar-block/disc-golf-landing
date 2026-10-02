"use client";

// Hero visual: a real 3D Throw reconstruction (lib/throw-data.ts) drawn on a 2D canvas with a
// tiny perspective projection, no 3D library. It orbits slowly, drops to 1/4 speed through the
// release, heats the throwing arm and draws the hand trail, the same language as the app.
// Drag to spin. Pauses offscreen. Reduced motion: a still frame at release.

import { useEffect, useRef, useState } from "react";
import { THROW } from "@/lib/throw-data";
import { cn } from "@/lib/utils";

type V3 = [number, number, number];
const F = THROW.frames.length;
const R = THROW.release;
const W = THROW.wrist;
const P = THROW.parents;
const ARM = W === 21 ? new Set([17, 19, 21, 23]) : new Set([16, 18, 20, 22]);
const HINGES = new Set([1, 2, 4, 5, 7, 8, 16, 17, 18, 19, 20, 21]);
const MAX_SPEED = Math.max(...THROW.speeds);

function phaseOf(f: number) {
  if (f < R - 18) return "Reach-back";
  if (f < R - 2) return "Pull through";
  if (f <= R + 2) return "Release";
  return "Follow-through";
}

function lerp3(a: readonly number[], b: readonly number[], t: number): V3 {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

function poseAt(ft: number): V3[] {
  const f0 = Math.max(0, Math.min(F - 1, Math.floor(ft)));
  const f1 = Math.min(F - 1, f0 + 1);
  const t = ft - f0;
  const A = THROW.frames[f0], B = THROW.frames[f1];
  return A.map((j, i) => lerp3(j, B[i], t));
}

export function ThrowViewer({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hud, setHud] = useState({ frame: R, phase: "Release", slow: true, deg: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const wrap = wrapRef.current!;
    const ctx = canvas.getContext("2d")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0, dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    // camera state
    let yaw = -0.9, pitch = 0.36, dragging = false, lastX = 0, lastInteract = -1e9;
    let ft = reduced ? R : 0, pauseUntil = 0, visible = true;
    let cx = 0, cz = 0; // smoothed pelvis follow
    let lastHud = 0, raf = 0, prev = performance.now();

    const onDown = (e: PointerEvent) => { dragging = true; lastX = e.clientX; canvas.setPointerCapture(e.pointerId); };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      yaw += (e.clientX - lastX) * 0.01; lastX = e.clientX; lastInteract = performance.now();
      if (reduced) draw();
    };
    const onUp = () => { dragging = false; };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.05 });
    io.observe(wrap);

    function project(p: V3): [number, number, number] {
      // world -> camera: orbit around (cx, 0.85, cz)
      const x = p[0] - cx, y = p[1] - 0.85, z = p[2] - cz;
      const cy = Math.cos(yaw), sy = Math.sin(yaw);
      const x1 = x * cy - z * sy, z1 = x * sy + z * cy;
      const cp = Math.cos(pitch), sp = Math.sin(pitch);
      const y2 = y * cp - z1 * sp, z2 = y * sp + z1 * cp;
      const dist = 4.2;
      const s = (Math.min(w, h * 0.9) * 1.55) / (dist + z2);
      return [w / 2 + x1 * s * 0.9, h * 0.5 - y2 * s * 0.9, z2];
    }

    function draw() {
      const J = poseAt(ft);
      const fi = Math.round(ft);
      cx += (J[0][0] - cx) * 0.08;
      cz += (J[0][2] - cz) * 0.08;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // floor grid: 0.5 m cells clipped to a 2.2 m circle around the thrower, so no line ever
      // passes behind the camera (perspective would stretch it across the view)
      ctx.lineWidth = 1;
      const RAD = 2.2;
      for (let i = -4; i <= 4; i++) {
        const a = i * 0.5, half = Math.sqrt(RAD * RAD - a * a);
        ctx.strokeStyle = `rgba(124,243,255,${i === 0 ? 0.14 : 0.07})`;
        let p1 = project([cx + a, 0, cz - half]), p2 = project([cx + a, 0, cz + half]);
        ctx.beginPath(); ctx.moveTo(p1[0], p1[1]); ctx.lineTo(p2[0], p2[1]); ctx.stroke();
        p1 = project([cx - half, 0, cz + a]); p2 = project([cx + half, 0, cz + a]);
        ctx.beginPath(); ctx.moveTo(p1[0], p1[1]); ctx.lineTo(p2[0], p2[1]); ctx.stroke();
      }
      // boundary ring
      ctx.strokeStyle = "rgba(124,243,255,0.12)";
      ctx.beginPath();
      for (let k = 0; k <= 64; k++) {
        const t = (k / 64) * Math.PI * 2, q = project([cx + Math.cos(t) * RAD, 0, cz + Math.sin(t) * RAD]);
        if (k === 0) ctx.moveTo(q[0], q[1]); else ctx.lineTo(q[0], q[1]);
      }
      ctx.stroke();

      // soft shadow under the feet
      const foot = project([J[0][0], 0, J[0][2]]);
      const g = ctx.createRadialGradient(foot[0], foot[1], 2, foot[0], foot[1], 70);
      g.addColorStop(0, "rgba(34,227,255,0.18)"); g.addColorStop(1, "rgba(34,227,255,0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(foot[0], foot[1], 95, 30, 0, 0, Math.PI * 2); ctx.fill();

      // hand trail (last ~0.6 s)
      const speedK = Math.min(1, (THROW.speeds[Math.min(F - 1, fi)] ?? 0) / MAX_SPEED);
      for (let k = 18; k >= 1; k--) {
        const tf = ft - k * 0.9;
        if (tf < 0) continue;
        const p = project(poseAt(tf)[W]);
        const a = 1 - k / 18;
        ctx.fillStyle = `rgba(255,154,77,${0.85 * a * a})`;
        ctx.beginPath(); ctx.arc(p[0], p[1], 1.2 + 4.2 * a * a, 0, Math.PI * 2); ctx.fill();
      }

      // bones, far to near
      const P2 = J.map(project);
      const bones: [number, number][] = [];
      for (let i = 1; i < P.length; i++) if (P[i] >= 0) bones.push([P[i], i]);
      bones.sort((a, b) => (P2[b[0]][2] + P2[b[1]][2]) - (P2[a[0]][2] + P2[a[1]][2]));
      ctx.lineCap = "round";
      for (const [a, b] of bones) {
        const hot = ARM.has(b);
        const depth = (P2[a][2] + P2[b][2]) / 2;
        const fade = Math.max(0.45, Math.min(1, 1.1 - depth * 0.25));
        const k = hot ? speedK * speedK : 0;
        const r = Math.round(124 + (255 - 124) * k), gg = Math.round(243 + (122 - 243) * k), bb = Math.round(255 + (47 - 255) * k);
        ctx.strokeStyle = `rgba(${r},${gg},${bb},${fade})`;
        ctx.lineWidth = (b === 15 || b === 12 ? 5 : b >= 20 ? 4 : 6) * fade;
        if (hot && k > 0.4) { ctx.shadowColor = "rgba(255,122,47,0.8)"; ctx.shadowBlur = 14 * k; } else { ctx.shadowBlur = 0; }
        ctx.beginPath(); ctx.moveTo(P2[a][0], P2[a][1]); ctx.lineTo(P2[b][0], P2[b][1]); ctx.stroke();
      }
      ctx.shadowBlur = 0;
      // joints
      for (let i = 0; i < P2.length; i++) {
        if (i === 15) continue;
        ctx.fillStyle = HINGES.has(i) ? "#0b0f17" : "#7cf3ff";
        ctx.strokeStyle = "rgba(124,243,255,0.9)";
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(P2[i][0], P2[i][1], HINGES.has(i) ? 3.2 : 2.4, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      }
      // head
      const hd = P2[15];
      ctx.fillStyle = "rgba(124,243,255,0.12)"; ctx.strokeStyle = "rgba(124,243,255,0.9)"; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.arc(hd[0], hd[1] - 6, 11, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

      return fi;
    }

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const dt = Math.min(0.05, (now - prev) / 1000); prev = now;
      if (!visible) return;
      if (!dragging && now - lastInteract > 2500) yaw += dt * 0.25;
      if (now >= pauseUntil) {
        const slow = ft > R - 14 && ft < R + 8;
        ft += dt * THROW.fps * (slow ? 0.25 : 1);
        if (ft >= F - 1) { ft = F - 1; pauseUntil = now + 900; }
      } else if (now + 16 >= pauseUntil && ft >= F - 1) { ft = 0; }
      const fi = draw();
      if (now - lastHud > 120) {
        lastHud = now;
        const deg = Math.round((((yaw * 180) / Math.PI) % 360 + 360) % 360);
        setHud({ frame: fi, phase: phaseOf(fi), slow: ft > R - 14 && ft < R + 8, deg });
      }
    };

    if (reduced) { draw(); setHud({ frame: R, phase: "Release", slow: false, deg: 0 }); }
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      canvas.removeEventListener("pointerdown", onDown); canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp); canvas.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <div ref={wrapRef} className={cn("relative select-none", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full cursor-grab touch-pan-y active:cursor-grabbing" aria-label="3D reconstruction of a disc golf backhand throw, drag to rotate" role="img" />
      {/* HUD */}
      <div className="pointer-events-none absolute left-4 top-4 flex flex-col gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-fog-400">
        <span className="text-cyan-400">● 3D Throw<span className="hidden sm:inline"> · reconstruction</span></span>
        <span>Frame {String(hud.frame + 1).padStart(3, "0")} / {String(F).padStart(3, "0")}</span>
        <span>View {String(hud.deg).padStart(3, "0")}°</span>
      </div>
      <div className="pointer-events-none absolute right-4 top-4 text-right font-mono text-[10.5px] uppercase tracking-[0.16em]">
        <span className={`inline-block rounded-md border px-2 py-1 transition-colors ${hud.slow ? "border-heat-400/50 text-heat-400" : "border-line text-fog-400"}`}>
          {hud.slow ? "Slow-mo 1/4×" : "1×"}
        </span>
      </div>
      <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10.5px] uppercase tracking-[0.16em]">
        <span className={hud.phase === "Release" ? "text-heat-400" : "text-fog-200"}>{hud.phase}</span>
        <span className="text-fog-600">Drag to spin</span>
      </div>
    </div>
  );
}
