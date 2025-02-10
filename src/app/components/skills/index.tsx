import { SiJavascript, SiTypescript,SiPython,SiNestjs,SiExpress,SiAdonisjs,SiHtml5,SiCss3,SiTailwindcss,SiReact,SiNextdotjs,SiPrisma,SiAndroid } from "react-icons/si";
import { LiaNode, LiaAndroid } from "react-icons/lia";
import { BiLogoPostgresql,BiLogoAndroid } from "react-icons/bi";
import React from "react";

const Skills = () => {
    const logos=[
        {nome:"Python", logo:<SiPython/>},
        {nome:"JavaScript", logo:<SiJavascript/>},
        {nome:"NODEJS", logo:<LiaNode/>},
        {nome:"TypeScript", logo:<SiTypescript/>},
        {nome:"NEST", logo:<SiNestjs/>},
        {nome:"Adonis", logo:<SiAdonisjs/>},
        {nome:"Express", logo:<SiExpress/>},
        {nome:"PostgresSQL", logo:<BiLogoPostgresql/>},
        {nome:"Prisma", logo:<SiPrisma/>},
        {nome:"HTML", logo:<SiHtml5/>},
        {nome:"CSS", logo:<SiCss3/>},
        {nome:"Tailwind", logo:<SiTailwindcss/>},
        {nome:"React", logo:<SiReact/>},
        {nome:"NextJS", logo:<SiNextdotjs/>},
        {nome:"REACT NATIVE", logo:<BiLogoAndroid/>},
    ]
    return ( 
      <div>
        <h1 className="text-2xl text-blue-950 font-bold">HABILIDADES/SKILLS</h1>
      <div className="flex flex-wrap gap-3 h-[200px] w-[640px] bg-blue-950 p-5 rounded-xl">
        
      {logos.map((icone, index) => (
        <div key={index} className="relative group">
          {React.cloneElement(icone.logo, {
            className: "w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125 transition-transform"
          })}
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ">
            {icone.nome}
          </span>
        </div>
      ))}
      </div>
    </div>
     );
}
 
export default Skills;