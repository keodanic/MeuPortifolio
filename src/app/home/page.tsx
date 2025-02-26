import AboutMe from "@/app/components/aboutMe";
import Hello from "@/app/components/apresentacao";
import DivProjects from "@/app/components/projects";
import Skills from "@/app/components/skills";
import minhaImagem from "../../assets/img/FOTO3X4.jpg"
import Image from "next/image"


const Home = () => {
  return (
    <div className=" min-h-screen bg-slate-100 pl-7 pr-7  ">
      <div className="flex justify-between p-10">
      <div className="p-16 flex flex-col gap-6">
        <Hello />
        <Skills/>
      </div>
      <Image src={minhaImagem} alt="LogoTipo" className="rounded-3xl h-[412px] w-[284px] border-black border-4 shadow-2xl shadow-blue-950 mr-9 mt-4"/>
      </div>
      
      <div className=" flex flex-col justify-center gap-8  m-10">
      <DivProjects />
      <AboutMe/>
      </div>
    </div>
  );
}

export default Home;