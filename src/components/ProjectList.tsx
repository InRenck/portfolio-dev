import type { PortfolioData } from '../data/portfolio';

interface ProjectListProps {
  data: PortfolioData; 
  lang: 'pt' | 'en';   
}

export function ProjectList({ data, lang }: ProjectListProps) {
  return (
    <section className="w-full bg-zinc-950 text-white py-32 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto w-full"> 
        <h2 className="text-4xl sm:text-6xl font-black mb-16 uppercase tracking-tighter">
          {lang === 'pt' ? 'Projetos em Destaque' : 'Featured Projects'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 transition-all duration-300 hover:-translate-y-2 hover:border-zinc-600 shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {project.tech.map((techItem) => (
                  <span 
                    key={techItem} 
                    className="px-4 py-2 bg-black text-zinc-300 rounded-full text-sm font-mono border border-zinc-800"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block text-white font-bold text-lg border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-colors"
              >
                {lang === 'pt' ? 'Ver Detalhes →' : 'View Details →'}
              </a>
            </div>
          ))}   
        </div>
      </div>
    </section>
  );
}