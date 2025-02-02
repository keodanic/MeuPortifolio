import Hello from "@/app/components/apresentacao/page";
import DivProjects from "@/app/components/projects/page";

const Home = () => {
    return ( 
      <div className=" min-h-screen bg-slate-100 p-10">
      <Hello/>
      <div className=" flex justify-center items-center m-10">
      <DivProjects/>
      </div>
      </div>
     );
}
 
export default Home;