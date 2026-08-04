import type { PortfolioData } from '../data/portfolio';

interface SkillsProps {
  data: PortfolioData;
  lang: 'pt' | 'en';
}

export function Skills({ data, lang }: SkillsProps) {
  return (
    <section className="w-full bg-[#F4F3EE] text-black py-32 px-6 sm:px-12 lg:px-20 border-t-8 border-black">
      <div className="max-w-7xl mx-auto w-full">    
        <h2 className="text-4xl sm:text-6xl font-black mb-16 uppercase tracking-tighter">
          {lang === 'pt' ? 'Arsenal Técnico' : 'Technical Arsenal'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-zinc-900 border-b-2 border-blue-600 pb-2 inline-block">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 mt-4">
                {skillGroup.list.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-zinc-100 border-2 border-black text-black font-bold rounded-full text-sm shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}