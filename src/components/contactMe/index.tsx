"use client"
import { FiMail, FiLinkedin, FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

const ContactMe = () => {
  return (
    <section id="contact" className="py-12 px-4 bg-blue-950 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Fale Comigo</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Email */}
          <a 
            href="mailto:victordanielsnt@gmail.com" 
            className="bg-blue-900 p-6 rounded-lg flex flex-col items-center text-center hover:bg-blue-800 transition-colors"
          >
            <FiMail className="text-3xl text-white mb-3" />
            <h3 className="text-xl font-bold text-white mb-1">Email</h3>
            <p className="text-blue-200">victordanielsnt@gmail.com</p>
          </a>
          
          {/* WhatsApp */}
          <a 
            href="https://web.whatsapp.com/send/?phone=86981509299&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-900 p-6 rounded-lg flex flex-col items-center text-center hover:bg-blue-800 transition-colors"
          >
            <SiWhatsapp className="text-3xl text-white mb-3" />
            <h3 className="text-xl font-bold text-white mb-1">WhatsApp</h3>
            <p className="text-blue-200">Envie uma mensagem</p>
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/victordaniel-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-900 p-6 rounded-lg flex flex-col items-center text-center hover:bg-blue-800 transition-colors"
          >
            <FiLinkedin className="text-3xl text-white mb-3" />
            <h3 className="text-xl font-bold text-white mb-1">LinkedIn</h3>
            <p className="text-blue-200">Conecte-se comigo</p>
          </a>
          
          {/* GitHub */}
          <a 
            href="https://github.com/keodanic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-900 p-6 rounded-lg flex flex-col items-center text-center hover:bg-blue-800 transition-colors"
          >
            <FiGithub className="text-3xl text-white mb-3" />
            <h3 className="text-xl font-bold text-white mb-1">GitHub</h3>
            <p className="text-blue-200">Veja meus projetos</p>
          </a>
          
          {/* Instagram */}
          <a 
            href="https://instagram.com/victoor__sc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-900 p-6 rounded-lg flex flex-col items-center text-center hover:bg-blue-800 transition-colors"
          >
            <FiInstagram className="text-3xl text-white mb-3" />
            <h3 className="text-xl font-bold text-white mb-1">Instagram</h3>
            <p className="text-blue-200">Me siga</p>
          </a>
          
          {/* Outro (opcional) */}
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-900 p-6 rounded-lg flex flex-col items-center text-center hover:bg-blue-800 transition-colors"
          >
            <FiTwitter className="text-3xl text-white mb-3" />
            <h3 className="text-xl font-bold text-white mb-1">Twitter/X</h3>
            <p className="text-blue-200">(Em manutenção)</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;