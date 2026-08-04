export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export interface SkillGroup {
  category: string;
  list: string[];
}

export interface PortfolioData {
  role: string;
  bio: string;
  projects: Project[];
  skills: SkillGroup[];
}

export const data: Record<string, PortfolioData> = {
  pt: {
    role: "Desenvolvedora de Software",
    bio: "Construo soluções práticas e eficientes. Focada em criar experiências de usuário fluidas, performáticas e acessíveis, com integrações robustas entre front-end e APIs REST.",
    projects: [
      {
        id: 1,
        title: "DopamineFocus",
        description: "Aplicação web gamificada focada em criar uma experiência de usuário fluida e de alto desempenho. Utiliza lógicas de recompensa dinâmicas que engajam o usuário. Design 100% responsivo.",
        tech: ["React (TypeScript)", "Node.js", "Tailwind CSS"],
        link: "https://github.com/InRenck/DopamineFocus-App"
      },
      {
        id: 2,
        title: "Nexus ERP",
        description: "Sistema de gestão nativo com forte arquitetura de dados (Node.js/Java). Destaca-se pelo gerenciamento complexo de estado e comunicação eficiente entre camadas lógicas offline.",
        tech: ["React", "Electron", "Node.js", "Java"],
        link: "https://github.com/InRenck/Nexus-ControledeVendas"
      }
    ],
    skills: [
      {
        category: "Front-end & UI",
        list: ["React", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "Acessibilidade Web"]
      },
      {
        category: "Ecossistema & Ferramentas",
        list: ["Vite", "Integração de APIs REST", "Git/GitHub", "Otimização (Lighthouse)"]
      },
      {
        category: "Back-end & Lógica",
        list: ["Node.js", "Java", "Lógica de Gamificação", "Inglês C2"]
      }
    ]
  },
  en: {
    role: "Software Developer",
    bio: "I build practical and efficient solutions. Focused on creating fluid, high-performance, and accessible user experiences, with robust integrations between front-end and REST APIs.",
    projects: [
      {
        id: 1,
        title: "DopamineFocus",
        description: "Gamified web application focused on creating a fluid and high-performance user experience. Uses dynamic reward logics that engage the user. 100% responsive design.",
        tech: ["React (TypeScript)", "Node.js", "Tailwind CSS"],
        link: "#"
      },
      {
        id: 2,
        title: "Nexus ERP",
        description: "Native management system with strong data architecture (Node.js/Java). Stands out for complex state management and efficient communication between offline logical layers.",
        tech: ["React", "Electron", "Node.js", "Java"],
        link: "#"
      }
    ],
    skills: [
      {
        category: "Front-end & UI",
        list: ["React", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "Web Accessibility"]
      },
      {
        category: "Ecosystem & Tools",
        list: ["Vite", "REST API Integration", "Git/GitHub", "Optimization (Lighthouse)"]
      },
      {
        category: "Back-end & Logic",
        list: ["Node.js", "Java", "Gamification Logic", "C2 English"]
      }
    ]
  }
};