import { useState } from 'react';
import { data } from './data/portfolio';
import { ProjectList } from './components/ProjectList';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');

  const toggleLang = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const currentData = data[lang];

  return (
    <div className="min-h-screen font-sans selection:bg-blue-600 selection:text-black flex flex-col bg-[#F4F3EE]">  
      <nav className="w-full p-6 sm:px-12 flex justify-end z-50">
        <button
          onClick={toggleLang}
          className="px-5 py-2 text-sm font-bold text-black border-2 border-black rounded-full hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 cursor-pointer"
        >
          {lang === 'pt' ? '🇺🇸 English' : '🇧🇷 Português'}
        </button>
      </nav>
      <header className="relative w-full min-h-[80vh] flex flex-col justify-center px-6 sm:px-12 lg:px-20 pb-10 text-black overflow-hidden text-left">
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <p className="font-mono text-sm sm:text-lg mb-6 tracking-[0.3em] uppercase font-bold">
            {lang === 'pt' ? 'Olá, eu sou' : 'Hi, I am'}
          </p>

          <h1 className="text-[18vw] sm:text-[10rem] lg:text-[13rem] font-black tracking-tighter leading-[0.75] mb-8 uppercase text-black">
            Inghara <br />
            <span className="font-serif italic font-light lowercase tracking-normal text-zinc-600">
              renck.
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight border-l-8 border-blue-600 pl-6">
                {currentData.role}
              </h2>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-zinc-800">
                {currentData.bio}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/4 right-5 sm:right-20 rotate-[12deg] hover:rotate-0 transition-transform duration-300 cursor-pointer hidden sm:block z-20">
          <div className="bg-black text-white px-8 py-4 rounded-full font-bold text-xl sm:text-2xl shadow-[8px_8px_0px_#2563eb] border-2 border-black">
            {lang === 'pt' ? 'Front-End (React/Node)' : 'Front-End (React/Node)'}
          </div>
        </div>
      </header>
      <ProjectList data={currentData} lang={lang} />
      <Skills data={currentData} lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}