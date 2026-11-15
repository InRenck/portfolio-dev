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
    role: "Desenvolvedora & QA Júnior",
    bio: "Formada em Análise e Desenvolvimento de Sistemas e concluinte de Direito, com experiência prática em suporte técnico, testes manuais de sistemas e validação de regras de negócio. Foco atual em JavaScript, SQL e desenvolvimento web com código limpo e bem testado.",
    projects: [
      {
        id: 1,
        title: "DopamineFocus",
        description: "Aplicação web responsiva para organização de tarefas e sessões de foco, com temporizador e acompanhamento gamificado de progresso.",
        tech: ["React", "JavaScript", "Tailwind CSS"],
        link: "https://github.com/InRenck/DopamineFocus-App"
      },
      {
        id: 2,
        title: "Nexus ERP",
        description: "Aplicação desktop offline desenvolvida como projeto de conclusão de ADS, com cadastro de produtos, controle de estoque, fluxo de pedidos e estimativa fiscal local.",
        tech: ["React", "Electron", "Vite", "JavaScript"],
        link: "https://github.com/InRenck/Nexus-ControledeVendas"
      }
    ],
    skills: [
      {
        category: "Front-end & Web",
        list: ["React", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "React", "Design Responsivo"]
      },
      {
        category: "Dados, QA & Ferramentas",
        list: ["SQL (Consultas)", "Testes Manuais & QA", "Git/GitHub", "Validação de Regras"]
      },
      {
        category: "Base & Diferenciais",
        list: ["LegalTech & Direito", "Suporte Técnico", "Lógica de Gamificação", "Inglês C2"]
      }
    ]
  },
  en: {
    role: "Junior Developer & QA",
    bio: "Systems Analysis and Development graduate and final-year Law student with hands-on experience in IT support, manual software testing, and business rule validation. Currently focused on JavaScript, SQL, and building clean, well-tested web applications.",
    projects: [
      {
        id: 1,
        title: "DopamineFocus",
        description: "Responsive web application for task organization and focus sessions, featuring a timer and gamified progress tracking.",
        tech: ["React", "JavaScript", "Tailwind CSS"],
        link: "https://github.com/InRenck/DopamineFocus-App"
      },
      {
        id: 2,
        title: "Nexus ERP",
        description: "Offline desktop application built as an ADS capstone project, featuring product catalog, inventory tracking, order flows, and local tax estimation.",
        tech: ["React", "Electron", "Vite", "JavaScript"],
        link: "https://github.com/InRenck/Nexus-ControledeVendas"
      }
    ],
    skills: [
      {
        category: "Front-end & Web",
        list: ["React", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "React", "Responsive Design"]
      },
      {
        category: "Data, QA & Tools",
        list: ["SQL (Queries)", "Manual Testing & QA", "Git/GitHub", "Business Rule Validation"]
      },
      {
        category: "Base & Diferenciais",
        list: ["LegalTech & Law", "Technical Support", "Gamification", "English C2"]
      }
    ]
  }
};