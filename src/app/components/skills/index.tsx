import { SiJavascript, SiTypescript,SiPython,SiNestjs,SiExpress,SiAdonisjs,SiHtml5,SiCss3,SiTailwindcss,SiReact,SiNextdotjs,SiPrisma,SiAndroid } from "react-icons/si";
import { LiaNode, LiaAndroid } from "react-icons/lia";
import { BiLogoPostgresql,BiLogoAndroid } from "react-icons/bi";

const Skills = () => {
    return ( 
        <div className="flex flex-wrap gap-3 h-[200px] w-[640px] bg-blue-950 p-5">
            <SiPython className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <SiJavascript className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <LiaNode className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <SiTypescript className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <SiNestjs className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <SiAdonisjs className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <SiExpress className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <BiLogoPostgresql className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <SiPrisma className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <SiHtml5 className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <SiCss3 className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <SiTailwindcss className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <SiReact className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <SiNextdotjs className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
            <BiLogoAndroid className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125"/>
        </div>
     );
}
 
export default Skills;