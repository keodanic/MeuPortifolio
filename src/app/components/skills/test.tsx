import { SiJavascript, SiTypescript,SiPython,SiNestjs,SiExpress,SiAdonisjs,SiHtml5,SiCss3,SiTailwindcss,SiReact,SiNextdotjs,SiPrisma,SiAndroid } from "react-icons/si";
import { LiaNode, LiaAndroid } from "react-icons/lia";
import { BiLogoPostgresql,BiLogoAndroid } from "react-icons/bi";

const Test = () => {
    const logos=[
        {nome:"JavaScript", logo:<SiJavascript/>},
        {nome:"TypeScript", logo:<SiTypescript/>},
        {nome:"Python", logo:<SiPython/>},
        {nome:"NEST", logo:<SiNestjs/>},
    ]
    return ( 
        <div className="flex flex-wrap gap-3 h-[200px] w-[640px] bg-blue-950 p-5">
            <h1 className="w-[4rem] h-[4rem] bg-slate-100 p-2 rounded-2xl hover:scale-125">{logos.map(imagem=>imagem.logo)}</h1>
        </div>
     );
}
 
export default Test;