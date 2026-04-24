/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Scissors, MapPin, Instagram, Phone, MessageCircle, 
  ChevronDown, Star, ArrowRight, Menu, X, CreditCard, 
  GraduationCap, ShoppingBag, Clock, Briefcase, Play, 
  Coffee, Wifi, Snowflake, Zap, Volume2, VolumeX, ShoppingCart
} from "lucide-react";
import { useState, useEffect } from "react";

// Assets
const LOGO_VIDEO = "https://res.cloudinary.com/dqukldtq1/video/upload/v1776904514/Create_a_twoframe_1080p_202601111008_rlsnpq.mp4";
const HERO_BG_VIDEO = "https://res.cloudinary.com/dqukldtq1/video/upload/v1776904514/Create_a_twoframe_1080p_202601111008_rlsnpq.mp4";
const ACADEMY_VIDEO = "https://res.cloudinary.com/dqukldtq1/video/upload/v1776904512/SnapInsta.to_AQMPXPvh17YFW61JJDTj11oUoJxkl36RAms6egC1XDIv0Zfg084CnNCwiJLY4RoWOBswmz4zS08263HuxudhfIve0geRTkVitHjG9m4_pvwww5.mp4";
const ABOUT_IMAGE = "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904516/historia_evco5c.png";

const PRODUCT_IMAGES = [
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904495/Captura_de_tela_2026-02-17_173826_gbvuuo.png",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904494/Captura_de_tela_2026-02-17_173811_mqpyuw.png",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904494/Captura_de_tela_2026-02-17_173755_ptkt9u.png",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904493/Captura_de_tela_2026-02-17_173735_tpf7mm.png"
];

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904499/Captura_de_tela_2026-04-08_141031_td6j1j.png",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904497/Captura_de_tela_2026-03-28_103646_aghqsg.png",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904497/Captura_de_tela_2026-03-28_175556_rkztvc.png",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904497/Captura_de_tela_2026-03-28_103929_nsmxo4.png",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904497/Captura_de_tela_2026-03-28_103908_cdq751.png",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904496/Captura_de_tela_2026-03-28_103735_fj6oz7.png",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904493/Captura_de_tela_2026-02-08_213611_dwqbk2.png"
];

const INSTAGRAM_IMAGES = [
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904516/WhatsApp_Image_2026-01-11_at_1.10.10_PM_2_zvjjhk.png",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904516/WhatsApp_Image_2026-01-11_at_9.36.31_AM_yyjglq.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904516/WhatsApp_Image_2026-01-11_at_1.10.10_PM_rdr8aq.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904512/SnapInsta.to_655026745_18391534171154522_4810041515507890466_n_g2apsu.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904514/WhatsApp_Image_2026-01-11_at_1.10.09_PM_eraxpz.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904507/IMG_0186_vqctfx.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904502/Captura_de_tela_2026-04-08_142542_q8dtjx.png",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904502/Captura_de_tela_2026-04-08_142522_gnxfzb.png"
];

const NAV_LINKS = [
  { name: "Sobre o Legado", href: "#about" },
  { name: "Unidades", href: "#locations" },
  { name: "Club Sião", href: "#services" },
  { name: "Sião Shop", href: "#shop" },
  { name: "Cursos", href: "#academy" },
  { name: "Recrutamento", href: "#work-with-us" }
];

const UNIT_CARAVELAS = "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904508/siao_caravelas_ekj6g8.jpg";
const UNIT_MANGUABA = "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904504/Captura_de_tela_2026-04-12_153251_xyl01q.png";
const UNIT_TREVO = "https://res.cloudinary.com/dqukldtq1/image/upload/v1776904503/Captura_de_tela_2026-04-08_144351_vntl7c.png";

const ART_VIDEOS = [
  "https://res.cloudinary.com/dqukldtq1/video/upload/v1776904517/SnapInsta.to_AQOuHky4XBLmmD9KtPMltfy8UJJPdZSgkryeLAcw7dIDbMxalyovozc4vvKFDa16aE93BoFfPvhe8hgLZljEA_k-lBN7FHkY9_G_KcQ_ar55zv.mp4",
  "https://res.cloudinary.com/dqukldtq1/video/upload/v1776904513/SnapInsta.to_AQM92rzqH1ZC1APYpnEDq6z6s54kbOcyCc4qxZ0iYSVonAQaZ6tgFyQiTpV8o-uhEzeFjL1qG03NyXtHrSOEZxZ6vGpXxSR9rnX_4Bs_aerjmj.mp4"
];

const MARQUEE_ITEMS = [
  "BARBEARIA DE ASSINATURA", "CORTE ILIMITADO", "EXPERIÊNCIA PREMIUM", "TRADIÇÃO E MODERNIDADE", 
  "SIÃO BARBER CLUB", "MARECHAL DEODORO - AL", "AGENDAMENTO ONLINE", "ACADEMY PROFISSIONAL"
];

const SERVICES = {
  cabelo: [
    { name: "CORTE (A PARTIR DE 7 ANOS)", price: "R$ 35,00" },
    { name: "PENTEADO", price: "R$ a partir de 25,00" },
    { name: "PROGRESSIVA", price: "R$ a partir de 100,00" },
    { name: "RELAXAMENTO", price: "R$ a partir de 55,00" },
    { name: "LUZES", price: "R$ a partir de 80,00" },
    { name: "PIGMENTAÇÃO DE CABELO", price: "R$ 30,00" },
    { name: "DESCOLORAÇÃO GLOBAL", price: "R$ A consultar" }
  ],
  barba: [
    { name: "BARBA EXPRESSA", price: "R$ 15,00" },
    { name: "BARBA SIMPLES", price: "R$ 25,00" },
    { name: "BARBA TERAPIA", price: "R$ 35,00" },
    { name: "PIGMENTAÇÃO DE BARBA", price: "R$ 20,00" }
  ],
  estetica: [
    { name: "LIMPEZA DE PELE", price: "R$ 40,00" },
    { name: "DEPILAÇÃO NASAL / ORELHA", price: "R$ 20,00" },
    { name: "SOBRANCELHA", price: "R$ 10,00" },
    { name: "HIDRATAÇÃO CABELO / BARBA", price: "R$ 25,00" }
  ],
  especiais: [
    { name: "ACABAMENTO DE PEZINHO", price: "R$ 10,00" },
    { name: "DIA DE NOIVO", price: "R$ A consultar (Serviço Exclusivo)" }
  ]
};

const SHOP_PRODUCTS = {
  linha_barbearia: [
    { name: "01 Pomada matte fox", price: "R$ 45" },
    { name: "02 Pomada matte embaixador", price: "R$ 60" },
    { name: "03 Pomada efeito brilho fox", price: "R$ 30" },
    { name: "04 Pomada efeito brilho embaixador", price: "R$ 45" },
    { name: "05 Pomada em pó fox", price: "R$ 45" },
    { name: "06 Creme pós barba fox", price: "R$ 50" },
    { name: "07 Shampoo de caspa", price: "R$ 38" },
    { name: "08 Shampoo de biotina", price: "R$ 38" },
    { name: "09 Shampoo 4x1 fox", price: "R$ 38" },
    { name: "10 Máscara de reposição", price: "R$ 50" },
    { name: "14 Balm", price: "R$ 45" },
    { name: "15 Óleo fox gota gota", price: "R$ 40" },
    { name: "19 levei-in", price: "R$ 50" },
    { name: "20 Shampoo matizador fox", price: "R$ 45" }
  ],
  acessorios: [
    { name: "11 Minoxidil kirkland", price: "R$ 85" },
    { name: "12 Escova mágica", price: "R$ 25" },
    { name: "13 Escova modeladora marco bony", price: "R$ 55" },
    { name: "16 Pente de madeira", price: "R$ 25" }
  ]
};

const FAQ_ITEMS = [
  { q: "Como funciona o plano ilimitado?", a: "Você paga uma mensalidade fixa e pode cortar o cabelo ou fazer a barba quantas vezes precisar no mês, sem custos adicionais por visita. Válido para todas as nossas unidades." },
  { q: "Preciso agendar horário?", a: "Recomendamos o agendamento via WhatsApp para garantir seu horário." },
  { q: "A Academy é para iniciantes?", a: "Sim! Nosso curso Sião Academy vai do zero ao avançado." }
];

const PLANS = [
  { name: "PLANO DE CORTE ILIMITADO", price: "59,99", icon: <Scissors size={16} />, features: ["CORTE DE CABELO ILIMITADO", "10% DE DESCONTO EM PRODUTOS E SERVIÇOS", "LAVAGEM INCLUSA"] },
  { name: "PLANO DE CORTE E BARBOTERAPIA", price: "129,99", icon: <Star size={16} />, promo: "DIRETO PARA", features: ["CORTES E BARBAS ILIMITADOS", "10% DE DESCONTO EM PRODUTOS E SERVIÇOS", "MASSAGEM FACIAL INCLUSA"], popular: true },
  { name: "PLANO DE CORTE E BARBA SIMPLES", price: "110,99", icon: <X size={16} />, features: ["CORTES ILIMITADOS", "BARBA SIMPLES ILIMITADA", "10% DE DESCONTO EM PRODUTOS E SERVIÇOS"] },
  { name: "PLANO DE BARBA ILIMITADO", price: "63,00", icon: <MessageCircle size={16} />, features: ["BARBA SIMPLES ILIMITADA", "10% DE DESCONTO EM PRODUTOS E SERVIÇOS", "HIDRATAÇÃO DE BARBA"] }
];

const LOCATIONS = [
  { name: "UNIDADE PRAIA DO FRANCÊS (CARAVELAS)", image: UNIT_CARAVELAS, review: "https://g.page/r/CWufi9YZUFOEEAE/review", color: "#D4AF37", address: "Galeria Caravelas, Praia do Francês", phone: "(82) 99388-1114", desc: "Um ambiente pensado para quem busca o máximo de conforto com a brisa do mar.", mapLink: "https://maps.app.goo.gl/k9eAMK98ZcEa4Y977" },
  { name: "UNIDADE TREVO", image: UNIT_TREVO, review: "https://g.page/r/CVbdoJRvt2hgEAE/review", color: "#ffffff", address: "Trevo do Francês", phone: "(82) 99106-6112", desc: "Ideal para quem busca qualidade premium com a agilidade que a rotina exige.", mapLink: "https://www.google.com/maps/search/?api=1&query=Barbearia+Siao+Trevo+do+Frances" },
  { name: "UNIDADE MANGUABA", image: UNIT_MANGUABA, review: "https://g.page/r/CdP3R-dd6deoEAE/review", color: "#ffffff", address: "Rodovia Edvaldo Lopes, em direção à Fazenda Barreiros", phone: "(82) 99146-8648", desc: "Espaço moderno e sofisticado para atender toda a região de Manguaba e arredores.", mapLink: "https://www.google.com/maps/search/?api=1&query=Barbearia+Siao+Manguaba+Rodovia+Edvaldo+Lopes" }
];

const VideoWithSoundToggle = ({ src, className, overlay }: { src: string, className?: string, overlay?: boolean }) => {
  const [isMuted, setIsMuted] = useState(true);
  return (
     <div className="relative w-full h-full group">
        <video autoPlay loop muted={isMuted} playsInline className={`w-full h-full object-cover ${className || ''}`} referrerPolicy="no-referrer">
           <source src={src} type="video/mp4" />
        </video>
        {overlay && isMuted && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
             <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center text-neutral-900 shadow-2xl animate-pulse"><Play fill="currentColor" size={30} /></div>
           </div>
        )}
        <button 
          onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
          className="absolute bottom-4 right-4 bg-black/40 hover:bg-amber-500 hover:text-black text-white p-3 rounded-full backdrop-blur-md transition-all z-20 group-hover:opacity-100 opacity-60"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
     </div>
  );
};

export default function App() {
  const [activeUnit, setActiveUnit] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const [showCatalog, setShowCatalog] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setProductIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans overflow-x-hidden">
      
      {/* Sticky Header Container */}
      <header className="sticky top-0 z-[100] w-full">
        {/* Marquee Header */}
        <div className="py-2 bg-amber-500 overflow-hidden whitespace-nowrap relative">
          <div className="flex animate-marquee">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex shrink-0">
                {MARQUEE_ITEMS.map((item, idx) => (
                  <span key={idx} className="mx-6 text-neutral-900 font-bold text-[10px] tracking-widest flex items-center gap-2">
                    <div className="w-1 h-1 bg-neutral-900 rounded-full" /> {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navbar */}
        <nav className="relative bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden border border-amber-500/30">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover"><source src={LOGO_VIDEO} type="video/mp4" /></video>
              </div>
              <span className="font-display font-black text-xl tracking-tighter uppercase leading-none">
                SIÃO <span className="text-amber-500">BARBER CLUB</span>
              </span>
            </div>
            
            <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold tracking-widest uppercase text-neutral-400">
              {NAV_LINKS.map((item) => (
                <a key={item.name} href={item.href} className="hover:text-amber-500 transition-colors">{item.name}</a>
              ))}
              <a href="https://instagram.com/siao_barber_club" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500"><Instagram size={18} /></a>
            </div>

            <a href="https://wa.link/q20rlq" target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-neutral-950 px-6 py-2.5 rounded-xl font-black text-[10px] tracking-widest hover:bg-amber-400 transition-all uppercase shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              AGENDAR AGORA
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <header className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-x-0 top-0 h-full w-full opacity-60">
           <video autoPlay muted loop playsInline className="w-full h-full object-cover transform scale-110" referrerPolicy="no-referrer"><source src={HERO_BG_VIDEO} type="video/mp4" /></video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-neutral-950/40 to-neutral-950" />
        
        <div className="relative z-10 w-full max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400">EXPERIÊNCIA PREMIUM EM ALAGOAS</span>
          </div>
          
          <h1 className="font-display font-black text-6xl md:text-[110px] leading-[0.85] tracking-tight uppercase mb-8">
            MODERNIDADE E<br/>
            <span className="text-amber-500 italic">TRADIÇÃO</span><br/>
            EM CADA DETALHE.
          </h1>
          
          <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-snug">
            Muito mais do que um corte comum. Um ritual de precisão, sofisticação e cuidado no coração de Marechal Deodoro.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://cashbarber.com.br/siaobarberclub" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-amber-500 text-neutral-950 px-10 py-5 rounded-xl font-black text-xs tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl">
              <Clock size={16} /> AGENDAR HORÁRIO
            </a>
            <a href="#academy" className="w-full sm:w-auto bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-5 rounded-xl font-black text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
              <GraduationCap size={16} /> ACADEMY
            </a>
          </div>

          <div className="mt-24 animate-bounce flex flex-col items-center gap-2 opacity-40">
             <span className="text-[10px] font-bold tracking-widest uppercase">Explorar</span>
             <ChevronDown size={20} />
          </div>
        </div>
      </header>

      {/* Plans Section */}
      <section id="plans" className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">ASSINATURA EXCLUSIVE</span>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase mt-4">PLANO DE CORTE <span className="italic text-amber-500">ILIMITADO.</span></h2>
          <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mt-6 max-w-xl mx-auto leading-relaxed">Mantenha seu visual impecável todos os dias com economia e praticidade. Escolha o plano que melhor se adapta ao seu estilo de vida.</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {PLANS.map((plan, i) => (
            <div key={i} className={`relative p-10 rounded-[35px] border ${plan.popular ? 'border-amber-500/50 bg-amber-500/5' : 'border-white/5 bg-neutral-900/60'} transition-all hover:border-amber-500/40 group overflow-hidden`}>
              {plan.popular && (
                <div className="absolute top-8 right-8 bg-[#cc0000] text-white text-[8px] font-black px-3 py-1.5 rounded-full">ESTE É PARA</div>
              )}
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-amber-500 mb-8 border border-white/10 group-hover:scale-110 transition-transform">{plan.icon}</div>
              <h4 className="font-display font-black text-xs tracking-widest uppercase mb-10 leading-tight h-8">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-1 relative">
                <span className="text-amber-500 font-bold text-xs">R$</span>
                <span className="text-[52px] font-black tracking-tighter leading-none italic">{plan.price.split(',')[0]}</span>
                <div className="flex flex-col ml-1">
                  <span className="text-xl font-bold leading-none">,{plan.price.split(',')[1]}</span>
                  <span className="text-[8px] font-bold text-neutral-600 uppercase">por mês</span>
                </div>
              </div>
              <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-10 pb-8 border-b border-white/5 italic">Tempo de carência <br/> INDETERMINADO</div>
              <ul className="space-y-5 mb-12">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-4 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    <div className="w-1 h-1 bg-amber-500 rounded-full mt-1.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="https://cashbarber.com.br/siaobarberclub" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-amber-500 text-neutral-950 font-black text-[10px] tracking-[0.2em] uppercase hover:scale-105 transition-all shadow-lg active:scale-95 text-center flex justify-center items-center">ASSINAR AGORA</a>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-6">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30 text-amber-500">
             <Clock size={18} />
          </div>
          <div>
            <span className="text-amber-500 font-bold tracking-widest text-[10px] uppercase">OBSERVAÇÃO IMPORTANTE:</span>
            <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wide leading-relaxed mt-1">Os planos de assinatura estão disponíveis em todas as nossas unidades <span className="text-white">(Praia do Francês, Manguaba e Trevo).</span></p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="avalições" className="py-32 px-6 bg-black relative border-y border-white/5">
        <div className="absolute inset-0 bg-amber-500/[0.02]" />
        <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
          <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">VOZES DA EXPERIÊNCIA</span>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase mt-4 leading-none">O QUE DIZEM NOSSOS <span className="text-amber-500">CLIENTES.</span></h2>
          <p className="text-neutral-400 text-xs font-bold tracking-[0.1em] mt-12 max-w-3xl mx-auto leading-relaxed">
            A SUA OPINIÃO CONSTRÓI O NOSSO LEGADO. AVALIAR A UNIDADE QUE VOCÊ VISITOU FORTALECE NOSSA BARBEARIA E NOS AJUDA A MANTER O PADRÃO SIÃO QUE VOCÊ MERECE.
            <br/><br/>
            DEIXE <span className="text-amber-500">5 ESTRELAS</span>, UM COMENTÁRIO DETALHADO SOBRE O SEU ATENDIMENTO E COMPARTILHE UMA FOTO DO SEU VISUAL RENOVADO PARA GUIAR OUTROS HOMENS A TEREM ESSA MESMA EXPERIÊNCIA DE EXCELÊNCIA.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-16">
             {LOCATIONS.map((loc, i) => (
               <a key={i} href={loc.review} target="_blank" rel="noopener noreferrer" className="bg-amber-500/10 border border-amber-500/30 px-10 py-5 rounded-3xl font-black text-[10px] tracking-widest uppercase hover:bg-amber-500 hover:text-neutral-950 transition-all flex items-center gap-3">
                 AVALIAR {loc.name.split(' ').pop().replace(' (CARAVELAS)', '')} <Star size={14} fill="currentColor" />
               </a>
             ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
           {[
             { n: "RODRIGO ALVES", t: "O melhor atendimento que já tive em uma barbearia. O padrão Sião é realmente diferenciado." },
             { n: "GUSTAVO LIMA", t: "O plano de corte ilimitado foi a melhor escolha. Sempre alinhado e com custo-benefício incrível." },
             { n: "FELIPE SANTOS", t: "Ambiente sensacional, profissionais de primeira. Recomendo a todos que buscam qualidade." },
             { n: "ANDRÉ OLIVEIRA", t: "Atendimento impecável e ambiente muito agradável. Recomendo!" }
           ].map((rev, i) => (
             <div key={i} className="p-10 rounded-[35px] border border-white/5 bg-neutral-900/60 relative group hover:border-amber-500/20 transition-all">
                <div className="flex text-amber-500 gap-1 mb-8">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <div className="absolute top-10 right-10 text-neutral-800"><MessageCircle size={40} /></div>
                <p className="text-xs font-bold text-neutral-400 uppercase italic leading-relaxed mb-10 tracking-wider">"{rev.t}"</p>
                <div className="pt-8 border-t border-white/5">
                  <h5 className="font-black text-[10px] text-amber-500 tracking-widest uppercase">{rev.n}</h5>
                  <span className="text-[8px] font-black text-neutral-600 uppercase tracking-widest">CLIENTE FIEL</span>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="avalições" className="py-32 px-6 bg-black relative border-y border-white/5">
        <div className="absolute inset-0 bg-amber-500/[0.02]" />
        <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
          <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">VOZES DA EXPERIÊNCIA</span>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase mt-4 leading-none">O QUE DIZEM NOSSOS <span className="text-amber-500">CLIENTES.</span></h2>
          <p className="text-neutral-400 text-xs font-bold tracking-[0.1em] mt-12 max-w-3xl mx-auto leading-relaxed">
            A SUA OPINIÃO CONSTRÓI O NOSSO LEGADO. AVALIAR A UNIDADE QUE VOCÊ VISITOU FORTALECE NOSSA BARBEARIA E NOS AJUDA A MANTER O PADRÃO SIÃO QUE VOCÊ MERECE.
            <br/><br/>
            DEIXE <span className="text-amber-500">5 ESTRELAS</span>, UM COMENTÁRIO DETALHADO SOBRE O SEU ATENDIMENTO E COMPARTILHE UMA FOTO DO SEU VISUAL RENOVADO PARA GUIAR OUTROS HOMENS A TEREM ESSA MESMA EXPERIÊNCIA DE EXCELÊNCIA.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-16">
             {LOCATIONS.map((loc, i) => (
               <a key={i} href={loc.review} target="_blank" rel="noopener noreferrer" className="bg-amber-500/10 border border-amber-500/30 px-10 py-5 rounded-3xl font-black text-[10px] tracking-widest uppercase hover:bg-amber-500 hover:text-neutral-950 transition-all flex items-center gap-3">
                 AVALIAR {loc.name.split(' ').pop().replace(' (CARAVELAS)', '')} <Star size={14} fill="currentColor" />
               </a>
             ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
           {[
             { n: "RODRIGO ALVES", t: "O melhor atendimento que já tive em uma barbearia. O padrão Sião é realmente diferenciado." },
             { n: "GUSTAVO LIMA", t: "O plano de corte ilimitado foi a melhor escolha. Sempre alinhado e com custo-benefício incrível." },
             { n: "FELIPE SANTOS", t: "Ambiente sensacional, profissionais de primeira. Recomendo a todos que buscam qualidade." },
             { n: "ANDRÉ OLIVEIRA", t: "Atendimento impecável e ambiente muito agradável. Recomendo!" }
           ].map((rev, i) => (
             <div key={i} className="p-10 rounded-[35px] border border-white/5 bg-neutral-900/60 relative group hover:border-amber-500/20 transition-all">
                <div className="flex text-amber-500 gap-1 mb-8">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <div className="absolute top-10 right-10 text-neutral-800"><MessageCircle size={40} /></div>
                <p className="text-xs font-bold text-neutral-400 uppercase italic leading-relaxed mb-10 tracking-wider">"{rev.t}"</p>
                <div className="pt-8 border-t border-white/5">
                  <h5 className="font-black text-[10px] text-amber-500 tracking-widest uppercase">{rev.n}</h5>
                  <span className="text-[8px] font-black text-neutral-600 uppercase tracking-widest">CLIENTE FIEL</span>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">LEGADO DE EXCELÊNCIA</span>
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase mt-4 leading-[0.9]">A HISTÓRIA POR<br/> TRÁS DA <span className="italic text-amber-500">LÂMINA.</span></h2>
            <p className="text-neutral-400 text-lg font-medium mt-10 leading-relaxed">
              Nascida em Marechal Deodoro, Alagoas, a Sião Barber Club transcende o conceito de barbearia. É um refúgio para o homem que valoriza o tempo, a tradição e a autoexpressão através de uma estética impecável.
            </p>
            <div className="grid grid-cols-3 gap-10 mt-16 pt-10 border-t border-white/10">
              {[ {n: "10+", l: "ANOS DE HISTÓRIA"}, {n: "3", l: "UNIDADES ATIVAS"}, {n: "4.8", l: "MÉDIA DE AVALIAÇÕES"} ].map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-amber-500 mb-1 leading-none">{s.n}</div>
                  <div className="text-[8px] font-bold text-neutral-600 uppercase tracking-[0.2em]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-10 bg-amber-500/5 blur-[120px] rounded-full" />
            <img src={ABOUT_IMAGE} alt="History" className="rounded-3xl shadow-2xl relative z-10 w-full hover:scale-[1.02] transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="py-32 px-6 bg-neutral-900/40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-20 items-center">
           <div className="lg:w-1/2">
            <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">SIÃO ACADEMY</span>
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase mt-4 leading-[0.9]">TORNE-SE UM<br/> BARBEIRO <span className="italic text-amber-500">COMPLETO.</span></h2>
            <p className="text-neutral-400 text-sm font-bold uppercase tracking-widest mt-10 leading-relaxed">O curso mais completo de Alagoas. Evolua do zero à maestria com certificação reconhecida e suporte para inserção no mercado de luxo.</p>
            
            <div className="mt-16 space-y-10">
              {[
                { i: <CreditCard />, t: "CERTIFICAÇÃO", d: "DIPLOMA PREMIUM RECONHECIDO EM TODO O TERRITÓRIO NACIONAL PARA SUA CARREIRA DE SUCESSO." },
                { i: <Play />, t: "METODOLOGIA", d: "FOCO TOTAL EM RESULTADOS REAIS, 80% DE PRÁTICA ASSISTIDA EM MODELOS REAIS." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                   <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-500">{item.i}</div>
                   <div>
                     <h4 className="font-black text-xs tracking-widest uppercase mb-1">{item.t}</h4>
                     <p className="text-[10px] font-bold text-neutral-500 uppercase leading-relaxed tracking-wider">{item.d}</p>
                   </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 relative overflow-hidden group">
               <div className="relative z-10">
                <span className="text-amber-500 font-bold text-[9px] tracking-[0.3em] uppercase">INSCRIÇÕES ABERTAS - VAGAS LIMITADAS</span>
                <p className="text-[10px] font-bold text-neutral-400 mt-2 uppercase tracking-wide">Deseja se tornar um profissional de excelência? Fale conosco agora pelo WhatsApp para manifestar seu interesse, tirar dúvidas e garantir sua vaga na próxima turma.</p>
               </div>
            </div>

            <a href="https://wa.link/6a32w7" target="_blank" rel="noopener noreferrer" className="mt-10 bg-amber-500 text-neutral-950 px-10 py-5 rounded-xl font-black text-[11px] tracking-widest uppercase hover:scale-105 transition-all w-full md:w-auto shadow-xl shadow-amber-500/10 border-b-4 border-amber-600 inline-block text-center mb-10 lg:mb-0">QUERO SER UM BARBEIRO PADRÃO SIÃO</a>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-[9/16] max-w-[400px] mx-auto rounded-[40px] overflow-hidden border-[10px] border-neutral-900 shadow-[0_0_100px_rgba(0,0,0,0.8)] relative cursor-pointer">
                <VideoWithSoundToggle src={ACADEMY_VIDEO} overlay={true} />
             </div>
          </div>
        </div>
      </section>

      {/* Work With Us Heading */}
      <section id="work-with-us-header" className="py-24 px-6 text-center">
        <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">MODERNIDADE E TRADIÇÃO EM CADA DETALHE</span>
        <h2 className="font-display font-black text-6xl md:text-8xl uppercase mt-4 mb-10 leading-none">SAIBA COMO<br/> <span className="text-amber-500 italic">TRABALHAR</span><br/> CONOSCO.</h2>
        <p className="text-neutral-500 text-sm font-bold uppercase tracking-[0.2em] max-w-2xl mx-auto mb-12 leading-relaxed">Seja como barbeiro ou colaborador, nosso time aguarda por você. Mande uma mensagem caso tenha interesse em fazer parte da equipe Sião Barber Club.</p>
        <a href="https://forms.gle/exemplo" target="_blank" rel="noopener noreferrer" className="bg-amber-500 font-black text-xs tracking-widest uppercase px-12 py-5 rounded-2xl text-neutral-900 flex items-center justify-center gap-4 max-w-sm mx-auto hover:bg-white transition-all shadow-xl shadow-amber-500/20 active:scale-95"><Briefcase /> TRABALHE CONOSCO</a>
      </section>

      {/* Products */}
      <section id="shop" className="py-32 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
          <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">MANTENHA A PAIXÃO EM CASA</span>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase mt-4 leading-none">NOSSOS <span className="italic text-amber-500">PRODUTOS.</span></h2>
          <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-8">Uma seleção rigorosa do que há de melhor em estética masculina e cuidados pessoais para o seu dia a dia.</p>
        </div>

        <div className="max-w-xl mx-auto relative group">
           <div className="absolute -inset-20 bg-amber-500/5 blur-[100px] rounded-full group-hover:bg-amber-500/10 transition-colors" />
           <div className="relative aspect-square overflow-hidden rounded-[80px] border border-white/5 bg-neutral-900/50 p-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
              <img src={PRODUCT_IMAGES[productIndex]} alt="Product" className="w-[85%] relative z-10 animate-float pointer-events-none drop-shadow-[0_0_80px_rgba(212,175,55,0.4)]" referrerPolicy="no-referrer" />
           </div>
        </div>

        <button 
          onClick={() => setShowCatalog(!showCatalog)}
          className="flex items-center justify-between w-full max-w-xl mx-auto mt-16 p-6 rounded-2xl bg-amber-500 text-neutral-950 font-black text-xs tracking-[0.2em] uppercase hover:bg-white transition-all shadow-xl group"
        >
           <div className="flex items-center gap-4"><ShoppingBag size={18} /> VER CATÁLOGO COMPLETO</div>
           <ChevronDown size={20} className={`transition-transform duration-300 ${showCatalog ? 'rotate-180' : ''}`} />
        </button>

        {showCatalog && (
          <div className="max-w-7xl mx-auto mt-24 grid lg:grid-cols-2 gap-x-24 gap-y-16 p-4 animate-in fade-in slide-in-from-top-4 duration-500">
             {Object.entries(SHOP_PRODUCTS).map(([key, list], i) => (
               <div key={key}>
                  <div className="flex items-center gap-4 mb-10 border-l-4 border-amber-500 pl-4">
                     <h3 className="font-display font-black text-xs tracking-[0.4em] uppercase text-amber-500">{key.replace('_', ' ')}</h3>
                  </div>
                  <div className="space-y-8">
                    {list.map((s, j) => (
                      <div key={j} className="flex items-end justify-between gap-4 group/item">
                        <span className="text-[11px] font-black text-white uppercase tracking-widest leading-none pb-1">{s.name}</span>
                        <div className="flex-1 border-b border-white/10 mb-1" />
                        <span className="text-[11px] font-black text-amber-500 uppercase pb-1 leading-none shrink-0 italic flex items-center gap-3">
                          {s.price}
                          <a href="https://wa.link/q20rlq" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-white transition-colors opacity-50 hover:opacity-100"><ShoppingCart size={15} /></a>
                        </span>
                      </div>
                    ))}
                  </div>
               </div>
             ))}
          </div>
        )}

        <p className="text-center text-[9px] font-black tracking-[0.3em] text-neutral-700 uppercase mt-16 italic">Visite uma de nossas unidades para conhecer a linha completa</p>
      </section>

      {/* Service Table */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">EXPERIÊNCIA SIÃO</span>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase mt-4">TABELA DE <span className="italic text-amber-500">SERVIÇOS.</span></h2>
          <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mt-8 max-w-xl mx-auto leading-relaxed">Oferecemos uma seleção completa de serviços focada na estética masculina contemporânea, unindo técnicas clássicas à inovação constante de nossa equipe.</p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-x-24 gap-y-20 p-4">
           {Object.entries(SERVICES).map(([key, list], i) => (
             <div key={key}>
                <div className="flex items-center gap-4 mb-10 border-l-4 border-amber-500 pl-4">
                   <h3 className="font-display font-black text-xs tracking-[0.4em] uppercase text-amber-500">{key.replace('estetica', 'ESTÉTICA & TRATAMENTOS').replace('especiais', 'ESPECIAIS & ACABAMENTOS')}</h3>
                </div>
                <div className="space-y-8">
                  {list.map((s, j) => (
                    <div key={j} className="flex items-end justify-between gap-4">
                      <span className="text-[11px] font-black text-white uppercase tracking-widest leading-none pb-1">{s.name}</span>
                      <div className="flex-1 border-b border-white/10 mb-1" />
                      <span className="text-[11px] font-black text-amber-500 uppercase pb-1 leading-none shrink-0 italic">{s.price}</span>
                    </div>
                  ))}
                </div>
             </div>
           ))}
        </div>

        <p className="text-center text-[9px] font-bold tracking-widest text-neutral-600 uppercase mt-20 italic">* OS VALORES \"A PARTIR DE\" PODEM VARIAR CONFORME O COMPRIMENTO DO CABELO E A COMPLEXIDADE DO SERVIÇO. CONSULTE SEU BARBEIRO PARA UM ORÇAMENTO PERSONALIZADO.</p>
        
        <a href="https://wa.link/q20rlq" target="_blank" rel="noopener noreferrer" className="mt-16 bg-amber-500 font-black text-[11px] tracking-widest uppercase px-12 py-5 rounded-2xl text-neutral-900 mx-auto block hover:scale-105 transition-all shadow-xl active:scale-95 text-center max-w-sm flex items-center justify-center">AGENDAR SERVIÇO VIA WHATSAPP</a>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 border-t border-white/5 pt-20">
           {[ {icon: <Coffee />, label: "CAFÉ"}, {icon: <Wifi />, label: "WI-FI ULTRA"}, {icon: <Snowflake />, label: "AMBIENTE CLIMATIZADO"}, {icon: <Zap />, label: "ESTÉTICA AVANÇADA"} ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center gap-4 opacity-40 group hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">{feature.icon}</div>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase">{feature.label}</span>
              </div>
           ))}
        </div>
      </section>

      {/* Structure Gallery */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">NOSSA ESTRUTURA</span>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase mt-4">UM AMBIENTE À ALTURA DO SEU <span className="italic text-amber-500">ESTILO.</span></h2>
          <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-10 max-w-2xl mx-auto leading-relaxed">CADA DETALHE DA NOSSA BARBEARIA FOI PLANEJADO PARA OFERECER NÃO APENAS CONFORTO, MAS UMA IMERSÃO TOTAL NO LUXO E NA TRADIÇÃO DA <span className="text-white border-b border-amber-500">BARBEARIA CLÁSSICA.</span></p>
        </div>
        
        <div className="max-w-[1400px] mx-auto flex gap-4 overflow-x-hidden relative pb-10">
           <div className="flex gap-4 animate-marquee-fast hover:[animation-play-state:paused]">
             {[...Array(4)].map((_, i) => (
               <div key={i} className="flex gap-4 shrink-0">
                 {GALLERY_IMAGES.map((img, idx) => (
                    <div key={idx} className="w-[300px] h-[450px] shrink-0 rounded-3xl overflow-hidden group border border-white/5 border-b-4 border-b-amber-500/0 hover:border-b-amber-500 transition-all duration-500">
                       <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" referrerPolicy="no-referrer" />
                    </div>
                 ))}
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Focus Videos */}
      <section className="py-32 px-6 text-center">
        <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">A ARTE EM FOCO</span>
        <h2 className="font-display font-black text-5xl md:text-6xl uppercase mt-4 mb-2">MODERNIDADE E <span className="italic text-amber-500">TRADIÇÃO</span></h2>
        <h3 className="font-display font-black text-4xl mb-10 uppercase tracking-tighter">EM CADA DETALHE.</h3>
        <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest max-w-xl mx-auto mb-20 italic">Confira os detalhes de precisão e a transformação completa que entregamos em cada atendimento.</p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {ART_VIDEOS.map((vid, i) => (
            <div key={i} className="aspect-[9/16] rounded-[45px] overflow-hidden border-[1px] border-white/5 bg-neutral-900 relative group shadow-2xl">
               <VideoWithSoundToggle src={vid} />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section className="py-32 px-6 bg-neutral-900/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">CONECTE-SE AO LEGADO</span>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase mt-4">SIGA-NOS NO <span className="italic text-amber-500">INSTAGRAM.</span></h2>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mt-8 max-w-2xl mx-auto leading-relaxed opacity-60">Acompanhe nossas redes sociais para ficar por dentro das atualizações, promoções, eventos e muito mais. Junte-se à nossa comunidade!</p>
          <button className="mt-12 bg-amber-500 font-black text-xs tracking-widest uppercase px-12 py-4 rounded-xl text-neutral-900 flex items-center gap-4 mx-auto hover:bg-white transition-all shadow-xl active:scale-95"><Instagram size={18} /> SEGUIR NO INSTAGRAM</button>
        </div>

        <div className="max-w-[1400px] mx-auto flex gap-4 overflow-x-hidden relative h-[400px]">
           <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
             {[...Array(4)].map((_, i) => (
               <div key={i} className="flex gap-4 shrink-0">
                  {INSTAGRAM_IMAGES.map((img, idx) => (
                    <div key={idx} className="w-[280px] h-full rounded-2xl overflow-hidden border border-white/5 bg-neutral-900 group">
                       <img src={img} alt="Insta" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
                    </div>
                  ))}
               </div>
             ))}
           </div>
        </div>
        <p className="text-center text-[10px] font-black tracking-widest text-[#222] uppercase mt-20">VER MAIS NO @SIAO_BARBER_CLUB</p>
      </section>

      {/* Locations */}
      <section id="locations" className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">LOGÍSTICA SIÃO</span>
          <h2 className="font-display font-black text-5xl md:text-[80px] leading-none uppercase mt-4">ESTAMOS ONDE VOCÊ <span className="text-amber-500">PRECISA.</span></h2>
          <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mt-12 max-w-2xl mx-auto leading-relaxed">VOCÊ ENCONTRA ESTRATEGICAMENTE LOCALIZADAS EM MARECHAL DEODORO PARA GARANTIR QUE O LUXO E A PRECISÃO ESTEJAM SEMPRE AO SEU ALCANCE.</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          {LOCATIONS.map((loc, i) => (
            <div key={i} onClick={() => setActiveUnit(i)} className={`relative group cursor-pointer overflow-hidden rounded-3xl border-2 transition-all ${activeUnit === i ? 'border-amber-500' : 'border-white/5 opacity-60 hover:opacity-100'}`}>
               <div className="aspect-[4/3] relative">
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-neutral-950/40" />
               </div>
               <div className="p-8 bg-neutral-900/60">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500"><MapPin size={16} /></div>
                    <h4 className="font-black text-[11px] text-white uppercase tracking-wider">{loc.name}</h4>
                  </div>
                  <div className="space-y-3 font-bold text-[10px] text-neutral-500 uppercase tracking-widest">
                     <p className="flex items-start gap-3 text-neutral-400 leading-tight">📍 {loc.address}</p>
                     <p className="flex items-center gap-3">📞 {loc.phone}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative rounded-[40px] overflow-hidden aspect-[21/9] border border-white/5 bg-neutral-900 group">
           <iframe 
              src={`https://maps.google.com/maps?q=${encodeURIComponent(LOCATIONS[activeUnit].address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(100%) hue-rotate(180deg) contrast(1.2) sepia(30%)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0 grayscale"
           ></iframe>
           <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-xl border border-white/10 z-10 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
              <div className="border-l-[4px] border-amber-500 pl-6 flex-1">
                <span className="text-amber-500 font-bold text-[8px] tracking-[0.3em] uppercase">UNIDADE SELECIONADA</span>
                <h4 className="font-display font-black text-2xl uppercase mt-2 mb-3 tracking-tight leading-none">{LOCATIONS[activeUnit].name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 max-w-md italic">{LOCATIONS[activeUnit].desc}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <a href={LOCATIONS[activeUnit].review} target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-neutral-950 px-8 py-4 rounded-xl font-black text-[10px] tracking-widest uppercase hover:bg-white transition-all flex items-center justify-center gap-3">
                   AVALIAR UNIDADE <Star size={14} fill="currentColor" />
                </a>
                <a href={LOCATIONS[activeUnit].mapLink} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-black text-[10px] tracking-widest uppercase hover:bg-white/10 transition-all flex items-center justify-center">
                   ABRIR NO MAPS
                </a>
              </div>
           </div>
        </div>
      </section>

      {/* Final Career Cta */}
      <section id="work-with-us" className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px]">FAÇA PARTE DO TIME</span>
          <h2 className="font-display font-black text-6xl md:text-8xl uppercase mt-4 mb-4 leading-none">SAIBA COMO<br/> <span className="text-amber-500 italic">TRABALHAR</span> CONOSCO.</h2>
          <p className="text-neutral-500 text-[11px] font-bold uppercase tracking-[0.2em] max-w-2xl mx-auto mb-16 leading-relaxed">ESTAMOS SEMPRE EM BUSCA DE TALENTOS QUE COMPARTILHAM NOSSA PAIXÃO PELA EXCELÊNCIA E PELA ARTE DA BARBEARIA. SE VOCÊ É UM PROFISSIONAL DEDICADO E BUSCA CRESCER EM UM AMBIENTE DE LUXO, QUEREMOS TE CONHECER.</p>
          <a href="https://forms.gle/exemplo" target="_blank" rel="noopener noreferrer" className="bg-amber-500 font-black text-[11px] tracking-widest uppercase px-16 py-6 rounded-2xl text-neutral-900 mx-auto max-w-md flex justify-center hover:bg-white transition-all shadow-xl shadow-amber-500/20 active:scale-95 group">
             ENVIAR CURRÍCULO AGORA <ArrowRight size={20} className="inline ml-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 relative z-10">
          <div className="col-span-2 space-y-10">
             <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-amber-500 shadow-xl shadow-amber-500/10">
                   <video autoPlay muted loop playsInline className="w-full h-full object-cover"><source src={LOGO_VIDEO} type="video/mp4" /></video>
                </div>
                <h3 className="font-display font-black text-3xl uppercase tracking-tighter">SIÃO <span className="text-amber-500">BARBER CLUB</span></h3>
             </div>
             <p className="text-neutral-600 text-xs font-bold uppercase tracking-widest leading-relaxed max-w-md italic">Dominando o mercado de barbearia contemporânea, unindo a essência da técnica, tradição e luxo.</p>
             <div className="flex gap-4">
                 <a href="https://instagram.com/siao_barber_club" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 hover:text-amber-500 hover:border-amber-500 transition-all"><Instagram size={20} /></a>
                 <a href="https://wa.link/q20rlq" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 hover:text-amber-500 hover:border-amber-500 transition-all"><MessageCircle size={20} /></a>
             </div>
          </div>
          <div>
            <h4 className="font-black text-[10px] tracking-[0.4em] uppercase text-amber-500 mb-10">NAVEGAÇÃO</h4>
            <ul className="space-y-4 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
              {NAV_LINKS.map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-white transition-colors">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[10px] tracking-[0.4em] uppercase text-amber-500 mb-10">CONTATO</h4>
             <ul className="space-y-6 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
              <li className="flex items-center gap-4"><MapPin size={16} className="text-amber-500" /> Marechal Deodoro, Alagoas</li>
              <li className="flex items-center gap-4"><MessageCircle size={16} className="text-amber-500" /> contato@siaobarberclub.com.br</li>
              <li className="flex items-center gap-4"><Phone size={16} className="text-amber-500" /> Marechal Deodoro, Alagoas</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 text-[9px] font-black text-neutral-800 tracking-[0.4em] uppercase italic">
          <p>© 2026 SIÃO BARBER CLUB. TRADIÇÃO, MODERINDADE EM CADA DETALHE.</p>
          <p className="flex items-center gap-4">SISTEMA DESENVOLVIDO POR <span className="text-neutral-500">SIÃO BARBER CLUB.</span></p>
        </div>
      </footer>

      {/* Global CSS */}
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-25%); } }
        @keyframes marquee-fast { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-40px); } }
        @keyframes shine { 0% { transform: translateX(-150%) skewX(-12deg); } 20% { transform: translateX(150%) skewX(-12deg); } 100% { transform: translateX(150%) skewX(-12deg); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
        .animate-marquee-fast { animation: marquee-fast 30s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-shine { animation: shine 5s ease-in-out infinite; }
        html { scroll-behavior: smooth; }
        body { background: #0B0D11; cursor: default; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      {/* Dynamic Floating Button */}
      <div className="fixed bottom-10 right-10 z-[100] group">
          <div className="absolute -inset-4 bg-green-500/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform" />
          <a href="https://wa.link/q20rlq" target="_blank" className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center">
             <MessageCircle size={32} fill="currentColor" />
          </a>
      </div>
    </div>
  );
}
