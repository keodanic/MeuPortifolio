"use client"
import { use, useEffect, useState } from "react";

const Hello = () => {
  const frases = ["Victor Daniel", "Desenvolvedor Full-Stack"]
  const [fraseIndex, setFraseIndex] = useState(0);
  const [apagado, setApagado] = useState(false)
  const [texto, setTexto] = useState("")
  const velocidade = 80
  const tempoEspera = 1000

  useEffect(() => {
    const fraseAtual = frases[fraseIndex];

    if (!apagado) {
      if (texto.length < fraseAtual.length) {
        setTimeout(() => setTexto(fraseAtual.slice(0, texto.length + 1)), velocidade)
      }
      else {
        setTimeout(() => setApagado(true), tempoEspera)
      }
    }
    else {
      if (texto.length > 0) {
        setTimeout(() => setTexto(fraseAtual.slice(0, texto.length - 1)), velocidade)
      }
      else {
        setApagado(false)
        setFraseIndex((prev) => (prev + 1) % frases.length)
      }
    }
  }, [texto, apagado])

  return (
    <div>
      <div className="text-2xl flex gap-3">
        <h1>Olá, eu</h1>
        <h1 className="text-blue-950 font-extrabold">sou</h1>
      </div>
      <div className="flex">
        <h1 className="text-4xl font-bold">{texto} </h1>
        <span className="text-3xl font-bold animate-ping">|</span>
      </div>

    </div>

  );
}

export default Hello;