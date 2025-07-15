"use client"
import { useRouter } from "next/navigation";
import { BiLogoAndroid, BiLogoPostgresql } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { SiExpo, SiExpress, SiJavascript, SiNestjs, SiNextdotjs, SiPrisma, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import Image from "next/image";

const DivProjects = () => {
  const router = useRouter();

  const projs = [
    {
      id: "freelant",
      name: "FREELANT",
      description: `App para conectar freelancers e clientes em Timon-MA`,
      tags: [<BiLogoAndroid />, <SiExpo />, <SiReact />, <SiTypescript />, <SiNestjs />, <SiTailwindcss />, <BiLogoPostgresql />, <SiPrisma />],
      image: "/projects/Freelant/freelant-cadastro.png" 
    },
    {
      id: "monitoring",
      name: "Monitoring CO2",
      description: `O Any Recipe é uma aplicação desenvolvida para facilitar o cadastro, organização e gerenciamento de receitas culinárias...`,
      tags: [<SiNextdotjs />, <SiTypescript />, <SiExpress />, <SiTailwindcss />, <BiLogoPostgresql />, <SiPrisma />],
      image: "/projects/MonitoringCO2/history.png" 
    },
    {
      id: "multirao",
      name: "Fundação Report",
      description: `Freela desenvolvido para uma empresa associada ao governo do Piauí que permite o cadastro.`,
      tags: [<SiTypescript />, <SiNestjs />, <BiLogoPostgresql />, <SiPrisma />, <SiNextdotjs />],
      image: "/projects/Fundacao-Report/multiraoCadastro.png" 
    },
  ];

  return (
    <div className="bg-blue-950 w-full px-4 md:px-8 py-8 rounded-xl">
      <h1 className="text-3xl md:text-5xl text-slate-100 font-bold mb-8 text-center md:text-left">Projetos</h1>

      <div className="flex flex-col gap-6">
        {projs.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-6 p-4 md:p-6 hover:scale-[1.01] transition-all bg-blue-900 rounded-lg"
          >
            {/* Conteúdo */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-white">{project.name}</h1>
                <p className="text-sm md:text-base text-gray-300">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xl">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-blue-950 p-2 rounded-lg text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Imagem - Agora com Image do Next.js */}
            <div className="lg:w-1/3 h-48 md:h-56 relative rounded-lg overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`Imagem do projeto ${project.name}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-slate-100/10 flex items-center justify-center">
                  <span className="text-white">IMAGEM AQUI</span>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Botão que redireciona para a página de projetos */}
        <button 
          onClick={() => router.push("/projects")}
          className="self-end mt-4 bg-slate-100 px-4 py-2 md:px-6 md:py-3 rounded-lg text-blue-950 flex items-center gap-2 font-medium hover:scale-105 transition-transform hover:bg-slate-200"
        >
          Veja todos <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default DivProjects;