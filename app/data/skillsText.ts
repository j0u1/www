import FigmaLogo from "../components/icons/Logos/FigmaLogo";
import TSLogo from "../components/icons/Logos/TSLogo";
import { Skills } from "../types/skills";

export const SKILLS: Skills[] = [
  {
    icon: TSLogo,
    title: "FrontEnd-разработчик",
    description: [
      "Делаю интерфейсы, которые выглядят просто и адаптивно работают.",
      "Основной стек — TypeScript, Nuxt (Vue), TailwindCSS.",
      "Владею также React, JavaScript, Sass, Astro, Python, Vite, SQL"
    ]
  },
  {
    icon: FigmaLogo,
    title: "UI/UX-дизайнер",
    description: [
      "Проектирую интерфейсы, которые остаются удобными в работе.",
      "Фокус — функциональность, ясность и удобство.",
      "Владею Figma, Adobe Photoshop и Adobe Illustrator"
    ],
    right: true
  }
] as const