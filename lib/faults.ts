// The 20 faults Pose Estimation grades (names + camera angles only), mirrored from the app's
// data/faultLibrary.js. The coach's descriptions, fixes and drills stay in the app: they are the
// coach's words and the reason to download. Keep names in sync if the library changes.
export type Angle = "side" | "behind" | "front";
export const FAULTS: { throw: "Backhand" | "Forehand"; name: string; angles: Angle[] }[] = [
  { throw: "Backhand", name: "Poor loading sequence", angles: ["side", "behind"] },
  { throw: "Backhand", name: "Early rotation (opening up)", angles: ["front", "side"] },
  { throw: "Backhand", name: "Poor athletic posture", angles: ["side", "front"] },
  { throw: "Backhand", name: "Weak front-side brace", angles: ["side", "front"] },
  { throw: "Backhand", name: "Poor plant timing", angles: ["side", "behind"] },
  { throw: "Backhand", name: "Rounding", angles: ["behind", "front"] },
  { throw: "Backhand", name: "Early upper body rotation", angles: ["front", "side"] },
  { throw: "Backhand", name: "Losing the power pocket", angles: ["front", "behind"] },
  { throw: "Backhand", name: "Incomplete weight transfer / rotation", angles: ["side", "behind"] },
  { throw: "Backhand", name: "Poor finish and balance", angles: ["side", "front", "behind"] },
  { throw: "Forehand", name: "Poor lower body load", angles: ["side", "behind"] },
  { throw: "Forehand", name: "Collapsed / unstable load position", angles: ["side", "front"] },
  { throw: "Forehand", name: "Chicken wing (elbow escape)", angles: ["front", "behind"] },
  { throw: "Forehand", name: "No lower body sequence (arm-initiated)", angles: ["side", "front"] },
  { throw: "Forehand", name: "Losing the compact forehand path", angles: ["behind", "front"] },
  { throw: "Forehand", name: "Pushing the disc (no lag)", angles: ["front", "behind"] },
  { throw: "Forehand", name: "Poor sequence timing", angles: ["side", "front"] },
  { throw: "Forehand", name: "Poor wrist lag and acceleration", angles: ["behind", "front"] },
  { throw: "Forehand", name: "Poor weight transfer", angles: ["side", "behind"] },
  { throw: "Forehand", name: "Poor finish and balance", angles: ["side", "front", "behind"] },
];
