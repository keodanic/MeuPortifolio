import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiJavascript, SiNextdotjs, SiTypescript } from "react-icons/si";

const DivProjects = () => {
    const projs = [
        {
            name: "Any-Recipe",
            description: `O Any Recipe é uma aplicação desenvolvida para facilitar o cadastro, organização e gerenciamento de receitas culinárias. 
O acesso à plataforma é restrito a usuários cadastrados, garantindo um ambiente seguro e personalizado. 

Após a criação da conta e autenticação na plataforma, o usuário pode registrar receitas, informando todos os detalhes necessários. 
Cada receita cadastrada gera automaticamente um card interativo, permitindo fácil visualização, edição e exclusão. 
Além disso, ao selecionar um card, o usuário tem acesso às informações completas da receita.

Essa solução visa proporcionar uma experiência intuitiva e eficiente para o gerenciamento de receitas, combinando praticidade e organização em um único aplicativo.`,
            tags: [<SiNextdotjs />, <SiTypescript />, <SiExpress />, <BiLogoPostgresql />]
        },
        {
            name: "Any-Recipe",
            description: "Aplicação de gerenciamentos de receitas",
            tags: [<SiNextdotjs />, <SiJavascript />]
            
        },

    ]

    return (
        <div className="bg-blue-950 h-auto w-full p-14 rounded-x flex-wrap ">
            <h1 className="text-6xl text-slate-100 font-bold">Projetos</h1>
            <div className="flex flex-col gap-4">

                {projs.map((projetos, index) => (
                    <div key={index} className="flex justify-center mt-4">
                        <div className="text-slate-100 w-[750px] flex-wrap flex gap-3">
                            <div className="flex gap-4 items-center">
                                <h1 className="text-3xl">{projetos.name}</h1>
                                <h1 className="flex gap-3 text-3xl">{projetos.tags}</h1>
                            </div>
                            <p className="flex items-center whitespace-pre-line">{projetos.description}</p>
                        </div>
                        <div className="h-[400px] w-[300px] bg-slate-100 flex justify-center items-center">
                            <h1 className="text-4xl text-black">IMAGEM AQUI</h1>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default DivProjects;