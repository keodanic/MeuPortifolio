import AboutMe from "@/components/aboutMe";
import Hello from "@/components/apresentacao";
import DivProjects from "@/components/projects";
import Skills from "@/components/skills";
import ContactMe from "@/components/contactMe"; // Importe o novo componente

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100 px-4 sm:px-6 md:px-8 py-8 md:py-12 mt-10">
      {/* Seção Hero */}
      <section className="max-w-6xl mx-auto mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 flex flex-col gap-8 md:gap-12">
            <Hello />
            <Skills />
          </div>
        </div>
      </section>

      {/* Seção Projetos e Sobre */}
      <section className="max-w-6xl mx-auto flex flex-col gap-16">
        <DivProjects />
        <AboutMe />
        
        {/* Adicione o componente ContactMe aqui */}
        <ContactMe />
      </section>
    </div>
  );
}

export default Home;