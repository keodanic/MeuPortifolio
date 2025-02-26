"use client"

import { redirect } from "next/navigation";
import { BiLogoAndroid, BiLogoPostgresql } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { SiExpo, SiExpress, SiJavascript, SiNestjs, SiNextdotjs, SiPrisma, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const DivProjects = () => {
    const projs = [
        {
            name: "FREELANT",
            description: `O Freelant é um aplicativo inovador em desenvolvimento, criado para facilitar a conexão entre trabalhadores autônomos e clientes na cidade de Timon-MA. A plataforma permitirá que profissionais cadastrados divulguem seus serviços de forma prática e eficiente, enquanto clientes poderão encontrar especialistas de diversas áreas com facilidade.

A aplicação contará com um sistema intuitivo de cadastro e busca, permitindo que usuários filtrem serviços por categoria, avaliem profissionais e entrem em contato diretamente pelo app. Além disso, o Freelant oferecerá um ambiente seguro e acessível, promovendo a valorização do trabalho autônomo e incentivando o crescimento do mercado local.

Este projeto, desenvolvido como parte do meu Trabalho de Conclusão de Curso (TCC), ainda está em fase de desenvolvimento, utilizando tecnologias modernas para proporcionar uma solução eficiente e acessível à comunidade. `,
            tags: [<BiLogoAndroid />, <SiExpo />, <SiReact />, <SiTypescript />, <SiNestjs />, <SiTailwindcss />, <BiLogoPostgresql />,<SiPrisma/>]

        },
        {
            name: "Any-Recipe",
            description: `O Any Recipe é uma aplicação desenvolvida para facilitar o cadastro, organização e gerenciamento de receitas culinárias. 
O acesso à plataforma é restrito a usuários cadastrados, garantindo um ambiente seguro e personalizado. 

Após a criação da conta e autenticação na plataforma, o usuário pode registrar receitas, informando todos os detalhes necessários. 
Cada receita cadastrada gera automaticamente um card interativo, permitindo fácil visualização, edição e exclusão. 
Além disso, ao selecionar um card, o usuário tem acesso às informações completas da receita.

Essa solução visa proporcionar uma experiência intuitiva e eficiente para o gerenciamento de receitas, combinando praticidade e organização em um único aplicativo.`,
            tags: [<SiNextdotjs />, <SiTypescript />, <SiExpress />, <SiTailwindcss />, <BiLogoPostgresql />,<SiPrisma/>]
        },
        {
            name: "Gerenciamento de Tarefas",
            description: `Sistema de To-Do List desenvolvido em equipe, proporcionando uma experiência colaborativa enriquecedora. A aplicação permite que os usuários cadastrem tarefas, organizem suas atividades e gerenciem prazos de forma intuitiva. 
            
            Conta com um sistema de autenticação completo, incluindo cadastro, login e recuperação de senha, garantindo segurança e acessibilidade. Além disso, possui uma funcionalidade que permite agrupar tarefas em playlists personalizadas, facilitando a organização e priorização das atividades. O projeto foi uma excelente oportunidade para aprimorar habilidades técnicas e de trabalho em equipe, reforçando a importância da colaboração no desenvolvimento de software.
            
            Neste projeto fiquei responsével pelo Back-End e também em ajudar na integração com o Front-End.`,
            tags: [ <SiTypescript />, <SiNestjs />, <BiLogoPostgresql />,<SiPrisma/>,<SiNextdotjs />]
        },

    ]

    function Redi(){
        redirect("/projetos")
    }
    return (
        <div className="bg-blue-950 h-auto w-full p-14 rounded-x flex-wrap ">
            <h1 className="text-6xl text-slate-100 font-bold">Projetos</h1>
            <div className="flex flex-col gap-4">

                {projs.map((projetos, index) => (
                    <div key={index} className="flex gap-16 shadow-2xl p-10 shadow-black justify-center mt-4 hover:scale-105">
                        <div className="text-slate-100 w-4xl  flex-wrap flex gap-3">
                            <div className="flex gap-4 items-center  w-[750px] justify-between">
                                <h1 className="text-3xl font-bold">{projetos.name}</h1>
                                <h1 className="flex p-2 gap-3 text-3xl ">{projetos.tags}</h1>
                            </div>
                            <p className="flex text-xl whitespace-pre-line">{projetos.description}</p>
                        </div>
                        <div className="  flex justify-center items-center">
                            <h1 className="text-4xl h-[475px] w-[550px] bg-slate-100 justify-center items-center text-black flex">IMAGEM AQUI</h1>
                        </div>

                    </div>
                ))}
                <div className="flex justify-end mt-5">

                    <button className="bg-slate-100 p-5 rounded-2xl text-blue-950 flex items-center gap-3 font-bold hover:scale-110  hover:shadow-black hover:shadow-2xl" >
                        Veja todos meus Projetos {<BsFillArrowRightCircleFill className="text-2xl" />}
                    </button>

                </div>
            </div>
        </div>
    );
}

export default DivProjects;