// src/App.jsx
import React, { useState } from "react"; // Adicionado o useState aqui
import { 
  MessageCircle, HeartHandshake, Leaf, Sparkles, 
  CheckCircle2, BookOpen, HelpCircle, ChevronDown, ChevronUp 
} from "lucide-react";

// 1. COMPONENTE FAQ (Declarado fora do App para funcionar corretamente)
function FaqItem({ pergunta, resposta }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left gap-4 group"
      >
        <span className="font-semibold text-stone-700 group-hover:text-emerald-700 transition-colors">
          {pergunta}
        </span>
        {isOpen ? <ChevronUp size={20} className="text-emerald-600" /> : <ChevronDown size={20} className="text-stone-400" />}
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-stone-600 text-sm leading-relaxed">
          {resposta}
        </p>
      </div>
    </div>
  );
}

// 2. COMPONENTE PRINCIPAL
export default function App() {
  const whatsappLink = "https://wa.me/+5522988769995?text=Olá%20Ingrid,%20gostaria%20de%20agendar%20uma%20consulta.";

  const beneficios = [
    "Entender e regular suas emoções",
    "Lidar com crises de ansiedade",
    "Melhorar a qualidade dos seus relacionamentos",
    "Desenvolver um autoconhecimento profundo"
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 p-4 sm:p-8 font-sans flex flex-col items-center">
      
      <div className="w-full max-w-lg flex flex-col gap-8 pb-10">
        
        {/* Header */}
        <div className="text-center mt-8 flex flex-col items-center gap-4 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-100 rounded-full scale-110 animate-pulse"></div>
            <img
              src="/foto.jpeg" 
              alt="Ingrid Marins"
              className="relative w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-stone-900 tracking-tight">Ingrid Marins</h1>
            <p className="text-sm font-medium text-stone-500 mt-1 uppercase tracking-widest">
              Psicóloga Clínica • CRP 05/84106
            </p>
            <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full mt-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Atendimento Online
            </span>
          </div>
        </div>

        {/* Hero Card */}
        <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <div className="rounded-3xl shadow-sm border border-stone-200/60 bg-white p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <HeartHandshake className="mx-auto text-emerald-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold text-stone-800 mb-3 leading-snug">
              Você não precisa lidar com tudo sozinho(a).
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Ansiedade, cansaço emocional, relações difíceis ou confusão interna — existe um espaço seguro e acolhedor para você organizar tudo isso.
            </p>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full rounded-2xl bg-emerald-600 text-white p-4 flex items-center justify-center gap-2 font-medium hover:bg-emerald-700 hover:scale-[1.02] active:scale-95 transition-all shadow-md">
                <MessageCircle size={20} /> Agendar pelo WhatsApp
              </button>
            </a>
          </div>
        </div>

        {/* Sobre */}
        <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <div className="rounded-3xl shadow-sm border border-stone-200/60 bg-white p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-stone-100 rounded-xl text-stone-600">
                <Leaf size={20} />
              </div>
              <h2 className="font-bold text-xl text-stone-800">Sobre o atendimento</h2>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Muitas vezes, o que nos leva à terapia não é um grande acontecimento, mas o acúmulo do que sentimos no dia a dia.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Aqui, você encontra um espaço de escuta, acolhimento e compreensão, <strong>totalmente livre de julgamentos</strong>.
            </p>
          </div>
        </div>

        {/* Benefícios */}
        <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <div className="rounded-3xl shadow-sm border border-stone-200/60 bg-white p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-stone-100 rounded-xl text-stone-600">
                <Sparkles size={20} />
              </div>
              <h2 className="font-bold text-xl text-stone-800">Como posso te ajudar</h2>
            </div>
            <ul className="flex flex-col gap-4 mt-2">
              {beneficios.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-stone-700">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Abordagem */}
        <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <div className="rounded-3xl shadow-sm border border-stone-200/60 bg-white p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-stone-100 rounded-xl text-stone-600">
                <BookOpen size={20} />
              </div>
              <h2 className="font-bold text-xl text-stone-800">Minha Abordagem</h2>
            </div>
            <p className="text-stone-600 leading-relaxed italic border-l-4 border-emerald-200 pl-4">
              "O autoconhecimento é o caminho para a liberdade emocional."
            </p>
            <p className="text-stone-600 leading-relaxed">
              Utilizo a <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, focando em como pensamentos influenciam emoções e ações.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <div className="rounded-3xl shadow-sm border border-stone-200/60 bg-white p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-stone-100 rounded-xl text-stone-600">
                <HelpCircle size={20} />
              </div>
              <h2 className="font-bold text-xl text-stone-800">Dúvidas Comuns</h2>
            </div>
            <div className="divide-y divide-stone-100">
              <FaqItem 
                pergunta="Quanto tempo dura cada sessão?" 
                resposta="As sessões individuais têm duração média de 50 minutos." 
              />
              <FaqItem 
                pergunta="Como funciona o atendimento online?" 
                resposta="As consultas são feitas por videochamada em plataforma segura e sigilosa." 
              />
              <FaqItem 
                pergunta="Você emite recibo para reembolso?" 
                resposta="Sim! Emito recibos com todos os dados para você solicitar o reembolso junto ao convênio." 
              />
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-100 p-8 text-center border border-emerald-100/50 transition-all hover:shadow-lg">
            <p className="font-semibold text-emerald-900 text-lg mb-6 leading-snug">
              Dar o primeiro passo pode transformar sua relação com você mesmo(a).
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full rounded-2xl bg-stone-900 text-white p-4 flex items-center justify-center gap-2 font-medium hover:bg-stone-800 hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
                <MessageCircle size={20} /> Quero agendar minha sessão
              </button>
            </a>
          </div>
        </div>

        {/* Rodapé */}
        <footer className="mt-10 text-center text-stone-400 text-xs flex flex-col gap-2">
          <p>© 2026 Ingrid Marins - Psicóloga Clínica</p>
          <p>CRP 05/84106 | Todos os direitos reservados</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://e-psi.cfp.org.br/" target="_blank" rel="noreferrer" className="hover:text-emerald-600 underline">Cadastro e-Psi</a>
          </div>
          <p className="max-w-xs mx-auto mt-4 text-[10px] leading-tight text-stone-400/70">
            AVISO: Este site não oferece atendimento de urgência. Em caso de crise, ligue para o CVV no número 188.
          </p>
        </footer>

      </div>
    </div>
  );
}