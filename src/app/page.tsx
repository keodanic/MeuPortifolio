
import Nav from "../components/navbar/nav";
import Home from "./home/page";

export const metadata = {
  title: 'Victor Daniel | Desenvolvedor Full Stack',
  description: 'Portfólio profissional com meus projetos.',
}

export default function Main() {
  return (
   <div>
     <Nav/>
     <Home/>
   </div>
  );
}
