import { SiJavascript, SiTypescript, SiPython, SiNestjs, SiExpress, SiAdonisjs, SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNextdotjs, SiPrisma, SiExpo } from "react-icons/si";
import { LiaNode } from "react-icons/lia";
import { BiLogoPostgresql, BiLogoAndroid } from "react-icons/bi";
import React from "react";

const Skills = () => {
    const logos = [
        { nome: "Python", logo: <SiPython />, hover: "hover:bg-yellow-500 hover:text-blue-900" },
        { nome: "JavaScript", logo: <SiJavascript />, hover: "hover:text-yellow-500 hover:bg-black" },
        { nome: "NODEJS", logo: <LiaNode />, hover: "hover:bg-green-500 hover:text-black" },
        { nome: "TypeScript", logo: <SiTypescript />, hover: "hover:text-blue-500" },
        { nome: "NEST", logo: <SiNestjs />, hover: "hover:bg-black hover:text-red-500" },
        { nome: "Adonis", logo: <SiAdonisjs />, hover: "hover:text-purple-500" },
        { nome: "Express", logo: <SiExpress />, hover: "" },
        { nome: "PostgresSQL", logo: <BiLogoPostgresql />, hover: "hover:text-blue-700" },
        { nome: "Prisma", logo: <SiPrisma />, hover: "hover:bg-black hover:text-slate-100" },
        { nome: "HTML", logo: <SiHtml5 />, hover: "hover:text-orange-500" },
        { nome: "CSS", logo: <SiCss3 />, hover: "hover:text-blue-500" },
        { nome: "Tailwind", logo: <SiTailwindcss />, hover: "hover:text-blue-400" },
        { nome: "React", logo: <SiReact />, hover: "hover:bg-black hover:text-blue-500" },
        { nome: "NextJS", logo: <SiNextdotjs />, hover: "" },
        { nome: "REACT NATIVE", logo: <BiLogoAndroid />, hover: "hover:text-green-500" },
        { nome: "EXPO", logo: <SiExpo />, hover: "hover:bg-black hover:text-slate-100" },
    ];

    return ( 
        <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-xl sm:text-2xl text-blue-950 font-bold mb-4">HABILIDADES/SKILLS</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 bg-blue-950 p-4 md:p-6 rounded-xl">
                {logos.map((icone, index) => (
                    <div 
                        key={index} 
                        className="relative group flex flex-col items-center"
                    >
                        <div className={`w-12 h-12 md:w-14 md:h-14 bg-slate-100 p-2 rounded-xl flex items-center justify-center transition-all ${icone.hover} group-hover:scale-110`}>
                            {React.cloneElement(icone.logo, {
                                className: "w-full h-full"
                            })}
                        </div>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            {icone.nome}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;