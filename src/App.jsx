import React, { useState } from "react";
import { 
  MessageCircle, HeartHandshake, Leaf, Sparkles, 
  CheckCircle2, BookOpen, HelpCircle, ChevronDown, ChevronUp,
  Instagram, Quote 
} from "lucide-react";

// COMPONENTE FAQ
function FaqItem({ pergunta, resposta }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-4 border-b border-emerald-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left gap-4 group focus:outline-none"
      >
        <span className="font-semibold text-emerald-900 group-hover:text-emerald-700 transition-colors">
          {pergunta}
        </span>
        {isOpen ? <ChevronUp size={18} className="text-emerald-600" /> : <ChevronDown size={18} className="text-emerald-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-emerald-800 text-sm leading-relaxed">{resposta}</p>
      </div>
    </div>
  );
}

export default function App() {
  const whatsappLink = "https://wa.me/+5522988769995?text=Olá%20Ingrid,%20vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sessão.";
  const instagramLink = "https://www.instagram.com/ingridmarins.psi/";

  const especialidades = [
    "Oferecer um lugar seguro para o seu sentir",
    "Transformar a confusão interna em clareza e fôlego",
    "Melhorar a qualidade da sua conexão consigo e com o outro",
    "Acolher sua história, de onde quer que você esteja"
  ];

  return (
    <div className="min-h-screen bg-emerald-100/50 text-emerald-950 font-sans flex flex-col items-center">
      
      <div className="w-full max-w-lg flex flex-col gap-8 pb-10 pt-8 px-4 sm:px-8 bg-white/90 shadow-2xl shadow-emerald-950/5 ring-1 ring-emerald-100">
        
        {/* Header - Identidade Visual */}
        <div className="text-center flex flex-col items-center gap-4 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-100 rounded-full scale-110 animate-pulse"></div>
            <img
              src="/foto.jpeg" 
              alt="Ingrid Marins - Psicóloga"
              className="relative w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-emerald-950 tracking-tight">Ingrid Marins</h1>
            <p className="text-sm font-medium text-emerald-700 mt-1 uppercase tracking-widest">
              Psicóloga Clínica • CRP 05/84106
            </p>
            <div className="flex flex-col items-center gap-2 mt-3">
              <span className="inline-flex items-center gap-1.5 bg-white text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Atendimento Online
              </span>
              <a 
                href={instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-600 hover:text-emerald-800 text-xs font-medium transition-colors"
              >
                <Instagram size={14} /> @ingridmarins.psi
              </a>
            </div>
          </div>
        </div>

        {/* Hero Card - Frase Inicial Atualizada */}
        <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <div className="rounded-3xl shadow-sm border border-emerald-100 bg-white p-8 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <HeartHandshake className="mx-auto text-emerald-600 mb-4" size={32} />
            <h2 className="text-xl font-semibold text-emerald-950 mb-4 leading-snug">
              O que você sente merece um lugar de acolhimento, não de julgamento.
            </h2>
            <div className="bg-emerald-50/50 p-5 rounded-xl inline-block mb-6 border border-emerald-100 text-left">
               <p className="text-emerald-800 leading-relaxed text-sm sm:text-base">
                Muitas vezes, a ansiedade, os conflitos e as incertezas são formas que encontramos de lidar com o mundo. Na terapia, abrimos espaço para transformar a confusão em clareza através de uma relação autêntica e humana.
               </p>
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full rounded-2xl bg-emerald-600 text-white p-4 flex items-center justify-center gap-2 font-medium hover:bg-emerald-700 hover:scale-[1.02] active:scale-95 transition-all shadow-sm shadow-emerald-600/20 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2">
                <MessageCircle size={20} /> Agendar minha sessão
              </button>
            </a>
          </div>
        </div>

        {/* Sobre o Atendimento - Texto Atualizado */}
        <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <div className="rounded-3xl shadow-sm border border-emerald-100 bg-white p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-100 rounded-xl text-emerald-700">
                <Leaf size={20} />
              </div>
              <h2 className="font-bold text-xl text-emerald-950 tracking-tight">Sobre o atendimento</h2>
            </div>
            <p className="text-emerald-800 leading-relaxed">
              Nem sempre o que nos traz à terapia é um grande evento, mas o desejo de um lugar de confiança para organizar o sentir.
            </p>
            <div className="text-emerald-800 leading-relaxed bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 italic">
              "Aqui, ofereço um encontro humano e sensível para você habitar sua própria história com mais clareza, fortalecendo sua presença e o seu bem-estar no dia a dia."
            </div>
          </div>
        </div>

        {/* Como posso ajudar - Especialidades Atualizadas */}
        <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <div className="rounded-3xl shadow-sm border border-emerald-100 bg-white p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-md">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-emerald-100 rounded-xl text-emerald-700">
                <Sparkles size={20} />
              </div>
              <h2 className="font-bold text-xl text-emerald-950 tracking-tight">Como posso ajudar</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {especialidades.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-emerald-900 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 shadow-sm">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                  <span className="leading-snug text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Citação de Jorge Ponciano */}
        <div className="animate-fade-in-up" style={{ animationDelay: "350ms" }}>
            <div className="p-8 bg-emerald-50/30 rounded-3xl border border-emerald-100/50 relative overflow-hidden">
                <Quote className="absolute -top-2 -left-2 text-emerald-100 w-20 h-20 -z-10 opacity-40" />
                <p className="text-emerald-900 leading-relaxed italic text-sm sm:text-base relative z-10">
                    "É importante que o homem não perca a singularidade de sua existência, porque, diferentemente de uma pedra, de uma rosa, ele pensa, sente e fala, mas não deve viver de pensamentos já pensados, conviver com sentimentos que lhe foram impostos e falar palavras que não são suas."
                </p>
                <p className="text-emerald-600 font-bold text-xs mt-4 tracking-widest uppercase">— Jorge Ponciano</p>
            </div>
        </div>

        {/* Abordagem Técnica Atualizada */}
        <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <div className="rounded-3xl shadow-sm border border-emerald-100 bg-white p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-md">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-emerald-100 rounded-xl text-emerald-700">
                <BookOpen size={20} />
              </div>
              <h2 className="font-bold text-xl text-emerald-950 tracking-tight">Minha Abordagem</h2>
            </div>
            <p className="text-emerald-800 leading-relaxed">
              Com fundamentação na <strong>Gestalt-terapia e na Existencial-Fenomenológica</strong>, compreendo a clínica como um espaço de respeito absoluto à sua singularidade.
            </p>
            <p className="text-emerald-800 leading-relaxed">
              Aqui, buscamos dar lugar às suas próprias palavras e sentimentos, desconstruindo o que lhe foi imposto para que você possa habitar o mundo de forma mais livre, consciente e integrada.
            </p>
          </div>
        </div>

        {/* FAQ - Tira-dúvidas */}
        <div className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <div className="rounded-3xl shadow-sm border border-emerald-100 bg-white p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-100 rounded-xl text-emerald-700">
                <HelpCircle size={20} />
              </div>
              <h2 className="font-bold text-xl text-emerald-950 tracking-tight">Dúvidas Comuns</h2>
            </div>
            <div className="flex flex-col">
              <FaqItem 
                pergunta="Quanto tempo dura cada sessão?" 
                resposta="As sessões individuais têm duração média de 50 minutos. É o seu tempo reservado para cuidar de si." 
              />
              <FaqItem 
                pergunta="Como funciona o atendimento online?" 
                resposta="As consultas são feitas por videochamada em plataforma segura e sigilosa, garantindo seu conforto e privacidade." 
              />
              <FaqItem 
                pergunta="Você emite recibo para reembolso?" 
                resposta="Sim! Emito recibos com todos os dados necessários para você solicitar o reembolso junto ao seu convênio médico." 
              />
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <div className="rounded-3xl bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 text-center border border-emerald-200 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <p className="font-semibold text-emerald-950 text-lg mb-6 leading-snug">
              Seu processo pode começar agora. Estou aqui para te acompanhar.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full rounded-2xl bg-emerald-700 text-white p-4 flex items-center justify-center gap-3 font-medium hover:bg-emerald-800 hover:scale-[1.02] active:scale-95 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">
                <MessageCircle size={22} /> Iniciar minha caminhada
              </button>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-emerald-600/80 text-[11px] flex flex-col gap-2 pb-6 border-t border-emerald-100 pt-6">
          <p>© 2026 Ingrid Marins - Psicóloga Clínica</p>
          <p>CRP 05/84106 | Todos os direitos reservados</p>
          <div className="flex justify-center gap-4 mt-1">
            <a href="https://e-psi.cfp.org.br/" target="_blank" rel="noreferrer" className="hover:text-emerald-800 underline transition-colors">Cadastro e-Psi</a>
            <a href={instagramLink} target="_blank" rel="noreferrer" className="hover:text-emerald-800 underline transition-colors">Instagram</a>
          </div>
          <p className="max-w-xs mx-auto mt-4 leading-tight opacity-70">
            AVISO: Este site não oferece atendimento de urgência. Em caso de crise, ligue para o CVV no número 188.
          </p>
        </footer>

      </div>
    </div>
  );
}