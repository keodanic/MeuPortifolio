const Nav = () => {
    return ( 
        <div className="border-b-2 border-black h-12 w-full bg-slate-100 flex items-center justify-between p-5 font-bold shadow-2xl">
            <div className="gap-8 flex ">

            <a className="hover:text-xl hover:text-slate-500" href="#">Sobre Mim</a>
            <a className="hover:text-xl hover:text-slate-500" href="#">Projetos</a>
            </div>

            <a className=" bg-black rounded-2xl w-32 h-10 text-slate-100 flex justify-center items-center hover:bg-slate-300 hover:text-black" href="#">Fale Comigo</a>
        </div>
     );
}
 
export default Nav;