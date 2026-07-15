// Clean, stroke-based line icons (single style, currentColor) to replace emoji.
// One consistent 24px grid, 1.5 stroke, round caps — the "serious product" look.

export type IconName =
  | 'check'
  | 'x'
  | 'minus'
  | 'arrowRight'
  | 'bolt'
  | 'target'
  | 'disc'
  | 'video'
  | 'cpu'
  | 'layers'
  | 'bag'
  | 'flag'
  | 'alert'
  | 'card'
  | 'chat';

export function Icon({ name, className = 'w-6 h-6' }: { name: IconName; className?: string }) {
  const p = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (name) {
    case 'check':
      return <svg {...p}><path d="M20 6 9 17l-5-5" /></svg>;
    case 'x':
      return <svg {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>;
    case 'minus':
      return <svg {...p}><path d="M5 12h14" /></svg>;
    case 'arrowRight':
      return <svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case 'bolt':
      return <svg {...p}><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" /></svg>;
    case 'target':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'disc':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    case 'video':
      return (
        <svg {...p}>
          <rect x="2" y="6" width="13" height="12" rx="2" />
          <path d="M22 8.5 16 12l6 3.5v-7z" />
        </svg>
      );
    case 'cpu':
      return (
        <svg {...p}>
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
          <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
        </svg>
      );
    case 'layers':
      return (
        <svg {...p}>
          <path d="M12 3 3 8l9 5 9-5-9-5z" />
          <path d="M3 13l9 5 9-5" />
        </svg>
      );
    case 'bag':
      return (
        <svg {...p}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
        </svg>
      );
    case 'flag':
      return (
        <svg {...p}>
          <path d="M5 21V4c3-1.5 6 1.5 9 0v9c-3 1.5-6-1.5-9 0" />
        </svg>
      );
    case 'alert':
      return (
        <svg {...p}>
          <path d="M12 3 2 20h20L12 3z" />
          <path d="M12 10v4M12 17.4v.2" />
        </svg>
      );
    case 'card':
      return (
        <svg {...p}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      );
    case 'chat':
      return (
        <svg {...p}>
          <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
        </svg>
      );
    default:
      return null;
  }
}
