"use client";

import React from "react";
import { 
  ShieldAlert, 
  Lock, 
  MessageCircle, 
  Tag, 
  Puzzle, 
  Sparkles,
  Zap,
  Globe,
  Layout,
  Star,
  Flame,
  Layers,
  ArrowRight
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";

export function SuspendedPuzzlePage() {

  const newOwnerOfferMsg = encodeURIComponent("quiero la oferta del dominio https://multiserviciossosa.com.co/ mas hosting mas pagina nueva creada de cero por solo 100.000 pesos");
  const ownerReactivationMsg = encodeURIComponent("Hola, deseo pagar los 200.000 pesos pendientes para reactivar el sitio multiserviciossosa.com.co");
  
  const waNewOwnerOfferUrl = `https://wa.me/573118587975?text=${newOwnerOfferMsg}`;
  const waOwnerReactivationUrl = `https://wa.me/573118587975?text=${ownerReactivationMsg}`;

  return (
    <div className="relative min-h-screen bg-[#05070c] text-slate-100 overflow-x-hidden font-sans select-none">
      
      {/* SVG MASK / CLIP-PATH DEFINITIONS FOR PUZZLE EDGES & MISSING HOLES */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          {/* Left Split Puzzle Mask with interlocking tabs */}
          <clipPath id="split-left-puzzle" clipPathUnits="objectBoundingBox">
            <path d="
              M 0,0 
              L 0.86,0 
              C 0.80,0.06 0.94,0.10 0.86,0.16 
              C 0.78,0.22 0.92,0.26 0.84,0.32 
              C 0.76,0.38 0.94,0.44 0.86,0.50 
              C 0.78,0.56 0.96,0.62 0.88,0.68 
              C 0.80,0.74 0.94,0.80 0.86,0.86 
              C 0.78,0.92 0.92,0.96 0.86,1 
              L 0,1 Z
            " />
          </clipPath>

          {/* Right Split Puzzle Mask with interlocking sockets */}
          <clipPath id="split-right-puzzle" clipPathUnits="objectBoundingBox">
            <path d="
              M 1,0 
              L 0.14,0 
              C 0.20,0.06 0.06,0.10 0.14,0.16 
              C 0.22,0.22 0.08,0.26 0.16,0.32 
              C 0.24,0.38 0.06,0.44 0.14,0.50 
              C 0.22,0.56 0.04,0.62 0.12,0.68 
              C 0.20,0.74 0.06,0.80 0.14,0.86 
              C 0.22,0.92 0.08,0.96 0.14,1 
              L 1,1 Z
            " />
          </clipPath>
        </defs>
      </svg>

      {/* Neon Glow Accents */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/15 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* Grid Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center">

        {/* -------------------------------------------------------------
            LATERALES CON LA PÁGINA DESARMADA Y PIEZAS PEQUEÑAS FALTANTES
           ------------------------------------------------------------- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden hidden lg:block z-0 opacity-40">
          
          {/* LADO IZQUIERDO DE LA PÁGINA */}
          <div 
            className="absolute top-0 left-0 w-[41%] h-full bg-[#0a192f] border-r-4 border-amber-500/50 filter drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]"
            style={{ clipPath: "url(#split-left-puzzle)" }}
          >
            <div className="w-[1200px] pointer-events-none opacity-85 transform -translate-x-10">
              <Navbar />
              <HeroSection />
              <ServicesSection />
            </div>
          </div>

          {/* LADO DERECHO DE LA PÁGINA */}
          <div 
            className="absolute top-0 right-0 w-[41%] h-full bg-[#0a192f] border-l-4 border-amber-500/50 filter drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]"
            style={{ clipPath: "url(#split-right-puzzle)" }}
          >
            <div className="w-[1200px] pointer-events-none opacity-85 transform -translate-x-[420px]">
              <Navbar />
              <HeroSection />
              <ServicesSection />
            </div>
          </div>

        </div>

        {/* PIEZAS PEQUEÑAS DESPRENDIDAS Y HUECOS EN FLOTACIÓN */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 hidden md:block">
          
          {/* Pieza pequeña 1 flotando izquierda arriba */}
          <div className="absolute top-28 left-8 transform -rotate-12 opacity-80 animate-bounce transition-transform duration-1000">
            <div className="p-2.5 rounded-2xl bg-slate-900/90 border-2 border-red-500/60 shadow-2xl backdrop-blur-md flex items-center gap-2 text-[11px] text-red-400 font-mono">
              <Puzzle className="w-4 h-4 text-red-500" />
              <span>[ Pieza Faltante #1 ]</span>
            </div>
          </div>

          {/* Pieza pequeña 2 flotando derecha centro */}
          <div className="absolute top-44 right-10 transform rotate-12 opacity-80 transition-transform duration-1000">
            <div className="p-2.5 rounded-2xl bg-slate-900/90 border-2 border-amber-500/60 shadow-2xl backdrop-blur-md flex items-center gap-2 text-[11px] text-amber-400 font-mono">
              <Lock className="w-4 h-4 text-amber-500" />
              <span>[ Pieza Faltante #2 ]</span>
            </div>
          </div>

          {/* Pieza pequeña 3 flotando izquierda centro */}
          <div className="absolute bottom-40 left-12 transform rotate-6 opacity-75">
            <div className="p-2.5 rounded-2xl bg-slate-900/90 border-2 border-emerald-500/60 shadow-2xl backdrop-blur-md flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>[ Pieza Faltante #3 ]</span>
            </div>
          </div>

        </div>

        {/* -------------------------------------------------------------
            CENTRO NEGRO (ESPACIO DE PAGO Y OFERTAS DE WHATSAPP)
           ------------------------------------------------------------- */}
        <div className="relative z-20 max-w-3xl w-full mx-auto px-4 py-8 flex flex-col items-center gap-8 text-center my-auto">

          {/* INSIGNIA DE ALERTA */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/40 text-red-400 text-xs md:text-sm font-extrabold uppercase tracking-wider backdrop-blur-md shadow-xl shadow-red-950/40 animate-pulse">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span>Servicio Suspendido por No Pago</span>
          </div>

          {/* TITULO PRINCIPAL */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Página Desarmada <br />
              <span className="bg-gradient-to-r from-red-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                por Falta de Pago
              </span>
            </h1>

            <p className="max-w-xl mx-auto text-slate-300 text-sm md:text-base leading-relaxed">
              El sitio web <span className="text-white font-mono underline decoration-red-500/50">multiserviciossosa.com.co</span> ha sido desensamblado. Las piezas centrales y módulos clave han sido desprendidos por saldo pendiente.
            </p>
          </div>

          {/* SECCIÓN DE TARJETAS DE PAGO Y OFERTAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2">

            {/* TARJETA 1: OFERTA NUEVO PROPIETARIO ($100.000 COP) */}
            <div className="relative group bg-slate-900/90 backdrop-blur-2xl border-2 border-emerald-500/50 rounded-3xl p-6 flex flex-col justify-between text-left shadow-2xl transition-all duration-500 hover:border-emerald-400 hover:-translate-y-1">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-[11px] rounded-full shadow-lg flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-slate-950" />
                <span>OFERTA DE OPORTUNIDAD</span>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                  <Globe className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Dominio + Hosting + Página Nueva
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
                    Creada Totalmente Desde Cero
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Adquiere el dominio <strong className="text-white font-mono">multiserviciossosa.com.co</strong> con hosting incluido y una página web 100% nueva diseñada desde cero a tu gusto.
                </p>

                <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Dominio + Host + Página Nueva:</span>
                  <span className="text-xl font-black text-emerald-400 tracking-tight">$100.000 COP</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href={waNewOwnerOfferUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Comprar Todo por $100.000 COP</span>
                </a>
              </div>
            </div>

            {/* TARJETA 2: REACTIVACIÓN PARA LA DUEÑA TITULAR ($200.000 COP) */}
            <div className="relative group bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/40 backdrop-blur-2xl border-2 border-amber-500/70 rounded-3xl p-6 flex flex-col justify-between text-left shadow-2xl transition-all duration-500 hover:border-amber-400 hover:-translate-y-1">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-amber-500 text-slate-950 font-black text-[11px] rounded-full shadow-lg flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-slate-950" />
                <span>EXCLUSIVO TITULAR</span>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
                  <Zap className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Reactivación para la Dueña
                  </h3>
                  <p className="text-xs text-amber-400 font-medium uppercase tracking-wider">
                    Pago de Saldo Pendiente del 50%
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Si eres la dueña y deseas ensamblar nuevamente el sitio web original y reactivar todas sus funciones, cancela el 50% restante.
                </p>

                <div className="p-3 rounded-2xl bg-amber-950/60 border border-amber-500/40 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Pago de Reactivación:</span>
                  <span className="text-xl font-black text-amber-400 tracking-tight">$200.000 COP</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href={waOwnerReactivationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Reactivar Sitio ($200.000 COP)</span>
                </a>
              </div>
            </div>

          </div>

          {/* AVISO INFORMATIVO INFERIOR */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-900 text-xs text-slate-400 space-y-1 w-full">
            <p className="text-slate-300 font-medium">
              Atención Directa vía WhatsApp: <strong className="text-white font-mono">+57 311 858 7975</strong>
            </p>
            <p className="text-[11px] text-slate-500">
              Sin pasarelas de pago intermedias. La contratación de la oferta nueva o la reactivación del titular se realiza vía WhatsApp oficial.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
