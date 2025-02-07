import Hello from "@/app/components/apresentacao/page";
import DivProjects from "@/app/components/projects/page";
import Skills from "@/app/components/skills";
import Test from "@/app/components/skills/test";

const Home = () => {
  return (
    <div className=" min-h-screen bg-slate-100 pl-20 pr-20 ">
      <div className="p-16 flex flex-col gap-6">
        <Hello />
        <Skills/>
        <Test/>
      </div>
      
      <div className=" flex justify-center items-center m-10">
        <DivProjects />
      </div>
    </div>
  );
}

export default Home;