const STACK = ["ts", "js", "html", "css", "sass", "tailwind", "vue", "nuxt", "react", "nextjs"];
const TOOLS = ["vite", "nodejs", "bun", "pnpm", "git", "github", "docker", "postgres", "mysql", "figma"];

export default function Stack() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col gap-4">
      <Row icons={TOOLS} size="size-7" />
      <Row icons={STACK} size="size-9" />
    </div>
  );
}

function Row({ icons, size }: { icons: string[]; size: string }) {
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {icons.map((id) => (
        <li key={id} className="bg-background">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://skillicons.dev/icons?i=${id}`}
            alt={id}
            title={id}
            className={`${size} rounded-lg opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0`}
          />
        </li>
      ))}
    </ul>
  );
}