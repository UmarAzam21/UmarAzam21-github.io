import {
  siDjango,
  siDocker,
  siExpress,
  siFastapi,
  siFlask,
  siGit,
  siGithub,
  siGitlab,
  siJavascript,
  siJsonwebtokens,
  siLangchain,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siOnnx,
  siOpencv,
  siPostgresql,
  siPostman,
  siPuppeteer,
  siPython,
  siReact,
  siRedux,
  siShadcnui,
  siTailwindcss,
  siTypescript,
  siUltralytics,
  type SimpleIcon,
} from "simple-icons";

/** Tech name (as written in data/content.ts) → brand logo from Simple Icons. */
const logos: Record<string, SimpleIcon> = {
  LangChain: siLangchain,
  YOLO11: siUltralytics,
  OpenCV: siOpencv,
  ONNX: siOnnx,
  Python: siPython,
  FastAPI: siFastapi,
  Django: siDjango,
  Flask: siFlask,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  "React.js": siReact,
  "Next.js": siNextdotjs,
  "React Native": siReact,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  "Tailwind CSS": siTailwindcss,
  "shadcn/ui": siShadcnui,
  "Redux Toolkit": siRedux,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  JWT: siJsonwebtokens,
  Git: siGit,
  GitHub: siGithub,
  GitLab: siGitlab,
  Docker: siDocker,
  Postman: siPostman,
  Puppeteer: siPuppeteer,
};

/** Monochrome logo (inherits text colour), or a small dot for concepts without a logo. */
export function TechIcon({ name, size = 14 }: { name: string; size?: number }) {
  const icon = logos[name];
  if (!icon) {
    return (
      <span aria-hidden className="flex items-center justify-center" style={{ width: size, height: size }}>
        <span className="h-[5px] w-[5px] rounded-full bg-current opacity-60" />
      </span>
    );
  }
  return (
    <svg aria-hidden role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="shrink-0">
      <path d={icon.path} />
    </svg>
  );
}
