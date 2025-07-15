"use client"
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-slate-100"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              
              <Image
                src="/logo.png" 
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <span className="ml-3 text-xl font-bold text-blue-950 hidden sm:block">
                Victor
              </span>
            </div>
          </Link>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => smoothScroll('aboutMe')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Sobre Mim
            </button>
            <button 
              onClick={() => router.push("/projects")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => smoothScroll('contact')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors ml-4"
            >
              Fale Comigo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => smoothScroll('about')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Sobre Mim
            </button>
            <button
               onClick={() => router.push("/projects")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Projetos
            </button>
            <button
              onClick={() => smoothScroll('contact')}
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 mt-2"
            >
              Fale Comigo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;