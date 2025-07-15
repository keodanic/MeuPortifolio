'use client'
import { useState } from 'react'
import { SiGithub } from "react-icons/si"
import { FiLock, FiX } from "react-icons/fi"
import Image from 'next/image'

interface Project {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  images: string[]
  github: string | null
  isPrivate: boolean
  features?: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <>
      {/* Card clicável */}
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
      >
        {/* Imagem principal */}
        <div className="relative h-48 w-full bg-gray-100">
          {project.images[0] ? (
            <Image
              src={project.images[0]}
              alt={project.name}
              fill
              className="object-cover"
              priority={false}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Sem preview
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
          <p className="text-gray-600 mb-4">{project.shortDescription}</p>
          
          {/* Tecnologias */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm"
              >
                {tech}
              </span>
            ))}
            
          </div>
        </div>
      </div>

      {/* Modal de Detalhes */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho do Modal */}
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold">{project.name}</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6">
              {/* Carrossel de Imagens */}
              <div className="relative mb-6">
                <div className="relative h-64 md:h-80 w-full bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.name} - Imagem ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Controles do Carrossel (se tiver mais de uma imagem) */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage() }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                    >
                      &lt;
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage() }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                    >
                      &gt;
                    </button>
                    <div className="flex justify-center mt-2 gap-1">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index) }}
                          className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Descrição Completa */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Descrição</h3>
                <p className="text-gray-700 whitespace-pre-line">{project.fullDescription}</p>
              </div>

              {/* Funcionalidades (se existir) */}
              {project.features && project.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Funcionalidades</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tecnologias */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link GitHub */}
              <div className="pt-4 border-t">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                  >
                    <SiGithub className="text-lg" />
                    <span>Ver Código no GitHub</span>
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-600">
                    <FiLock className="text-lg" />
                    <span>Código Privado</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}