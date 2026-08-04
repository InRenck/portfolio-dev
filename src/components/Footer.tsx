interface FooterProps {
  lang: 'pt' | 'en';
}

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="w-full bg-zinc-950 text-white py-20 px-6 sm:px-12 border-t-2 border-zinc-800 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-8">
        {lang === 'pt' ? 'Vamos conversar?' : "Let's talk?"}
      </h2>
      <p className="text-zinc-400 max-w-xl mb-12 text-lg">
        {lang === 'pt' 
          ? 'Estou sempre aberta a discutir novos projetos, arquiteturas escaláveis e oportunidades no universo de tecnologia.'
          : 'I am always open to discussing new projects, scalable architectures, and opportunities in the tech universe.'}
      </p>
      <div className="mb-12 p-6 md:p-8 border-2 border-blue-600 bg-zinc-900 rounded-3xl max-w-3xl w-full flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_#2563eb]">
        <div className="text-left font-mono text-sm sm:text-base text-zinc-300">
          <p className="mb-3">
            <span className="font-bold text-white text-lg">🎓 {lang === 'pt' ? 'Formação:' : 'Education:'}</span><br />
            {lang === 'pt' ? 'Análise e Desenvolvimento de Sistemas (ADS)' : 'Systems Analysis and Development (ADS)'}<br />
            {lang === 'pt' ? 'Direito' : 'Law'}
          </p>
          <p>
            <span className="font-bold text-white text-lg">🌎 {lang === 'pt' ? 'Idioma:' : 'Language:'}</span><br />
            {lang === 'pt' ? 'Inglês Nível C2 (Avançado/Fluente)' : 'C2 English (Fluent)'}
          </p>
        </div>
        <a 
        href={lang === 'pt' ? '/cv-pt.pdf' : '/cv-en.pdf'} 
        target="_blank" 
        download
        className="px-8 py-4 bg-white text-black font-black uppercase rounded-full hover:bg-zinc-200 transition-all border-2 border-black whitespace-nowrap shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1"
        >
          {lang === 'pt' ? '📄 Baixar CV' : '📄 Download CV'}
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <a 
          href="https://www.linkedin.com/in/inghara-renck/" 
          target="_blank" 
          rel="noreferrer"
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors shadow-[4px_4px_0px_#2563eb] hover:shadow-none hover:translate-y-1 hover:translate-x-1"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/inrenck" 
          target="_blank" 
          rel="noreferrer"
          className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors shadow-[4px_4px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-y-1 hover:translate-x-1"
        >
          GitHub
        </a>
        <a 
          href="mailto:renck.in15@gmail.com" 
          className="px-8 py-3 border-2 border-zinc-700 text-white font-bold rounded-full hover:border-white transition-colors"
        >
          {lang === 'pt' ? 'E-mail' : 'Email'}
        </a>
      </div>
      <p className="mt-16 text-zinc-600 text-sm font-mono">
        © {new Date().getFullYear()} Inghara Renck.
      </p>
    </footer>
  );
}