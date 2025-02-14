import { SiJavascript, SiTypescript,SiPython,SiNestjs,SiExpress,SiAdonisjs,SiHtml5,SiCss3,SiTailwindcss,SiReact,SiNextdotjs,SiPrisma, SiExpo } from "react-icons/si";
import { LiaNode, LiaAndroid } from "react-icons/lia";
import { BiLogoPostgresql,BiLogoAndroid } from "react-icons/bi";
import React from "react";

const Skills = () => {
    const logos=[
        {nome:"Python", logo:<SiPython/>, hover: "hover:bg-yellow-500 hover:text-blue-900"},
        {nome:"JavaScript", logo:<SiJavascript/>,hover: " hover:text-yellow-500 hover:bg-black"},
        {nome:"NODEJS", logo:<LiaNode/>,hover: "hover:bg-green-500 hover:text-black"},
        {nome:"TypeScript", logo:<SiTypescript/>,hover: "hover:text-blue-500"},
        {nome:"NEST", logo:<SiNestjs/>,hover: "hover:bg-black hover:text-red-500"},
        {nome:"Adonis", logo:<SiAdonisjs/>,hover: " hover:text-purple-500"},
        {nome:"Express", logo:<SiExpress/>,hover: ""},
        {nome:"PostgresSQL", logo:<BiLogoPostgresql/>,hover: "hover:text-blue-700"},
        {nome:"Prisma", logo:<SiPrisma/>,hover: "hover:bg-black hover:text-slate-100"},
        {nome:"HTML", logo:<SiHtml5/>,hover: "hover:text-orange-500"},
        {nome:"CSS", logo:<SiCss3/>,hover: "hover:text-blue-500"},
        {nome:"Tailwind", logo:<SiTailwindcss/>,hover: "hover:text-blue-400"},
        {nome:"React", logo:<SiReact/>,hover: "hover:bg-black hover:text-blue-500"},
        {nome:"NextJS", logo:<SiNextdotjs/>,hover: ""},
        {nome:"REACT NATIVE", logo:<BiLogoAndroid/>,hover: " hover:text-green-500"},
        {nome:"EXPO", logo:<SiExpo/>,hover: "hover:bg-black hover:text-slate-100"},
    ]
    return ( 
      <div>
        <h1 className="text-2xl text-blue-950 font-bold">HABILIDADES/SKILLS</h1>
      <div className="flex flex-wrap gap-3 h-[200px] w-[640px] bg-blue-950 p-5 rounded-xl">
        
      {logos.map((icone, index) => (
        <div key={index} className="relative group">
          {React.cloneElement(icone.logo, {
            className: `w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125 transition-transform ${icone.hover}`
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