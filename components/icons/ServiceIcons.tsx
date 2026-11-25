import type { SVGProps } from "react";

export type ServiceIconId = "ai" | "app" | "enterprise" | "dev" | "vision" | "data" | "tools";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

/** Browser window with a neural-node pattern. */
function AiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4" width="19" height="16" rx="1" />
      <path d="M2.5 7.5h19" />
      <circle cx="4.6" cy="5.75" r=".45" fill="currentColor" />
      <circle cx="6.3" cy="5.75" r=".45" fill="currentColor" />
      <rect x="4.5" y="9.5" width="8" height="8.5" />
      <path d="M4.5 9.5l8 8.5M12.5 9.5l-8 8.5" />
      <path d="M14.5 10h5M14.5 12.5h5M14.5 15h3.5M14.5 17.5h4.5" />
    </svg>
  );
}

/** Mobile phone beside a browser. */
function AppIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="12.5" y="2.5" width="9" height="19" rx="1.4" />
      <path d="M15.5 4.4h3" />
      <rect x="14.2" y="6.5" width="5.6" height="5" fill="currentColor" fillOpacity=".12" />
      <path d="M14.2 14h5.6M14.2 16h4" />
      <circle cx="17" cy="19.4" r=".55" />
      <rect x="2.5" y="11" width="8.5" height="10.5" rx="2.5" />
      <circle cx="5.3" cy="15" r="1.25" />
      <circle cx="8.3" cy="15" r="1.25" />
      <path d="M5 18.5h3.8" />
      <path d="M6.75 11V8.5h-1.5" />
    </svg>
  );
}

/** Stacked tenant blocks on a shared base. */
function EnterpriseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 21.5h19" />
      <rect x="3.5" y="13" width="4.5" height="8.5" />
      <rect x="9.75" y="9" width="4.5" height="12.5" />
      <rect x="16" y="5" width="4.5" height="16.5" />
      <path d="M5.75 13V9.5M12 9V5.5M18.25 5V2.5" />
      <circle cx="5.75" cy="8.5" r="1" />
      <circle cx="12" cy="4.5" r="1" />
      <path d="M5 16h1.5M5 18h1.5M11.25 12h1.5M11.25 14h1.5M11.25 16h1.5M17.5 8h1.5M17.5 10h1.5M17.5 12h1.5M17.5 14h1.5" />
    </svg>
  );
}

/** Laptop with code and a small gear. */
function DevIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="6" width="15" height="10.5" rx="1" />
      <path d="M1.5 19h19l-1.5-2.5H3z" />
      <path d="M6.5 9.5l-1.5 1.5 1.5 1.5M10 9.5l1.5 1.5-1.5 1.5M7.4 13.2l2-4.4" />
      <path d="M13 10h3.5M13 12h2.5" />
      <circle cx="19.5" cy="5" r="1.4" />
      <path d="M19.5 2.4v1.2M19.5 6.4v1.2M16.9 5h1.2M20.9 5h1.2" />
    </svg>
  );
}

/** Eye inside a detection bounding box. */
function VisionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 7V3.5h3.5M18 3.5h3.5V7M21.5 17v3.5H18M6 20.5H2.5V17" />
      <path d="M5 12c2-3.3 4.4-5 7-5s5 1.7 7 5c-2 3.3-4.4 5-7 5s-5-1.7-7-5z" />
      <circle cx="12" cy="12" r="2.3" />
      <circle cx="12" cy="12" r=".6" fill="currentColor" />
    </svg>
  );
}

/** Database cylinder with a shield. */
function DataIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="10" cy="5" rx="7" ry="2.5" />
      <path d="M3 5v12c0 1.4 3.1 2.5 7 2.5M17 5v5" />
      <path d="M3 11c0 1.4 3.1 2.5 7 2.5" />
      <path d="M17.5 12.5l3.5 1.3v3c0 2.2-1.5 3.7-3.5 4.4-2-.7-3.5-2.2-3.5-4.4v-3z" />
      <path d="M16.2 17l1 1 2-2.2" />
    </svg>
  );
}

/** Wrench crossed with a screwdriver. */
function ToolsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 6.5a4 4 0 0 1 5.3-3.8l-2.6 2.6.5 2.3 2.3.5 2.6-2.6a4 4 0 0 1-5.3 5.2L7.5 20.5a1.8 1.8 0 0 1-2.5-2.5l9.8-9.8a4 4 0 0 1-.3-1.7z" />
      <path d="M3 3l2.5 1 4.5 4.5-1.5 1.5L4 5.5z" />
      <path d="M14 14l5.5 5.5a1.4 1.4 0 0 1-2 2L12 16" />
    </svg>
  );
}

const icons: Record<ServiceIconId, (p: IconProps) => React.JSX.Element> = {
  data: DataIcon,
  tools: ToolsIcon,
  vision: VisionIcon,
  ai: AiIcon,
  app: AppIcon,
  enterprise: EnterpriseIcon,
  dev: DevIcon,
};

export function ServiceIcon({ id, ...props }: { id: ServiceIconId } & IconProps) {
  const Icon = icons[id];
  return <Icon {...props} />;
}
