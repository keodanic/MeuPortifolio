import AboutMe from "@/app/components/aboutMe";
import Hello from "@/app/components/apresentacao/page";
import DivProjects from "@/app/components/projects/page";
import Skills from "@/app/components/skills";


const Home = () => {
  return (
    <div className=" min-h-screen bg-slate-100 pl-20 pr-20 ">
      <div className="p-16 flex flex-col gap-6">
        <Hello />
        <Skills/>
      </div>
      
      <div className=" flex flex-col justify-center gap-8  m-10">
      <DivProjects />
      <AboutMe/>
      </div>
    </div>
  );
}

export default Home;