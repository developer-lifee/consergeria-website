"use client";

import React from "react";
import { 
  ShieldAlert, 
  Lock, 
  MessageCircle, 
  ShoppingBag, 
  Tag, 
  Puzzle, 
  Sparkles,
  Zap,
  Globe,
  Layout,
  Star,
  Flame
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { LegalSection } from "@/components/legal-section";
import { TeamSection } from "@/components/team-section";
import { Footer } from "@/components/footer";

export function SuspendedPuzzlePage() {

  const domainOnlyMsg = encodeURIComponent("quiero la oferta del dominio https://multiserviciossosa.com.co/ por solo 100.000 pesos");
  const domainWithSiteMsg = encodeURIComponent("quiero la oferta del dominio https://multiserviciossosa.com.co/ con una página totalmente nueva por solo 200.000 pesos");
  const cancelServiceMsg = encodeURIComponent("Hola, solicito información para regularizar el saldo/reactivar la página multiserviciossosa.com.co");
  
  const waDomainOnlyUrl = `https://wa.me/573118587975?text=${domainOnlyMsg}`;
  const waDomainWithSiteUrl = `https://wa.me/573118587975?text=${domainWithSiteMsg}`;
  const waCancelUrl = `https://wa.me/573118587975?text=${cancelServiceMsg}`;

  return (
    <div className="relative min-h-screen bg-[#05070c] text-slate-100 overflow-x-hidden font-sans select-none">
      
      {/* SVG MASK / CLIP-PATH DEFINITIONS FOR JAGGED PUZZLE CRACK */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          {/* Left Cracked Puzzle Fragment Mask */}
          <clipPath id="crack-left-puzzle" clipPathUnits="objectBoundingBox">
            <path d="
              M 0,0 
              L 0.88,0 
              C 0.82,0.08 0.94,0.12 0.86,0.18 
              C 0.78,0.24 0.90,0.28 0.84,0.34 
              C 0.76,0.40 0.92,0.46 0.85,0.52 
              C 0.77,0.58 0.95,0.64 0.88,0.70 
              C 0.80,0.76 0.92,0.82 0.85,0.88 
              C 0.79,0.94 0.90,0.97 0.85,1 
              L 0,1 Z
            " />
          </clipPath>

          {/* Right Cracked Puzzle Fragment Mask */}
          <clipPath id="crack-right-puzzle" clipPathUnits="objectBoundingBox">
            <path d="
              M 1,0 
              L 0.12,0 
              C 0.18,0.08 0.06,0.12 0.14,0.18 
              C 0.22,0.24 0.10,0.28 0.16,0.34 
              C 0.24,0.40 0.08,0.46 0.15,0.52 
              C 0.23,0.58 0.05,0.64 0.12,0.70 
              C 0.20,0.76 0.08,0.82 0.15,0.88 
              C 0.21,0.94 0.10,0.97 0.15,1 
              L 1,1 Z
            " />
          </clipPath>
        </defs>
      </svg>

      {/* Neon Glow Accents Behind the Crack */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/20 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* MAIN CONTAINER: CRACKED PUZZLE CANVAS */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center">

        {/* -------------------------------------------------------------
            FRACTURED BACKGROUND SIDES (THE BLUE REAL WEBSITE FRAGMENTS)
           ------------------------------------------------------------- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden hidden lg:block z-0 opacity-40">
          
          {/* Left Fragment of Real Site */}
          <div 
            className="absolute top-0 left-0 w-[42%] h-full bg-[#0a192f] border-r-4 border-amber-500/50 filter drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]"
            style={{ clipPath: "url(#crack-left-puzzle)" }}
          >
            <div className="w-[1200px] pointer-events-none opacity-80 transform -translate-x-10">
              <Navbar />
              <HeroSection />
              <ServicesSection />
            </div>
          </div>

          {/* Right Fragment of Real Site */}
          <div 
            className="absolute top-0 right-0 w-[42%] h-full bg-[#0a192f] border-l-4 border-amber-500/50 filter drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]"
            style={{ clipPath: "url(#crack-right-puzzle)" }}
          >
            <div className="w-[1200px] pointer-events-none opacity-80 transform -translate-x-[400px]">
              <Navbar />
              <HeroSection />
              <ServicesSection />
            </div>
          </div>

        </div>

        {/* FLOATING PUZZLE PIECES POLLUTING THE CENTRAL VOID */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 hidden md:block">
          
          {/* Floating Fallen Puzzle Piece Left */}
          <div className="absolute top-36 left-12 transform -rotate-12 opacity-40 hover:opacity-100 transition-opacity">
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-red-500/50 shadow-2xl backdrop-blur-md flex items-center gap-2 text-xs text-red-400 font-mono">
              <Puzzle className="w-5 h-5 text-red-500" />
              <span>[ Pieza Desprendida #1 ]</span>
            </div>
          </div>

          {/* Floating Fallen Puzzle Piece Right */}
          <div className="absolute top-48 right-12 transform rotate-12 opacity-40 hover:opacity-100 transition-opacity">
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-amber-500/50 shadow-2xl backdrop-blur-md flex items-center gap-2 text-xs text-amber-400 font-mono">
              <Lock className="w-5 h-5 text-amber-500" />
              <span>[ Pieza Faltante 50% ]</span>
            </div>
          </div>

        </div>

        {/* -------------------------------------------------------------
            CENTRAL BLACK GAP / VOID CONTENT (THE PAYMENT & SALE HUB)
           ------------------------------------------------------------- */}
        <div className="relative z-20 max-w-3xl w-full mx-auto px-4 py-8 flex flex-col items-center gap-8 text-center my-auto">

          {/* TOP ALERT BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/40 text-red-400 text-xs md:text-sm font-extrabold uppercase tracking-wider backdrop-blur-md shadow-xl shadow-red-950/40 animate-pulse">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span>Servicio Suspendido por No Pago</span>
          </div>

          {/* MAIN HEADLINE IN THE PUZZLE CRACK */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Página Agrietada & <br />
              <span className="bg-gradient-to-r from-red-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Desarmada por No Pago
              </span>
            </h1>

            <p className="max-w-xl mx-auto text-slate-300 text-sm md:text-base leading-relaxed">
              El sitio web <span className="text-white font-mono underline decoration-red-500/50">multiserviciossosa.com.co</span> ha colapsado en forma de rompecabezas. Faltan las piezas centrales por saldo pendiente del 50%.
            </p>
          </div>

          {/* CENTRAL NOTICE CARDS GRID (PAYMENT / DOMAIN SALE OPTIONS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2">

            {/* CARD 1: SOLO DOMINIO ($100.000 COP) */}
            <div className="relative group bg-slate-900/90 backdrop-blur-2xl border-2 border-emerald-500/50 rounded-3xl p-6 flex flex-col justify-between text-left shadow-2xl transition-all duration-500 hover:border-emerald-400 hover:-translate-y-1">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-extrabold text-[11px] rounded-full flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>OFERTA 1</span>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
                  <Tag className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Solo Dominio Web
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
                    Transferencia Inmediata
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Adquiere la propiedad del dominio <strong className="text-white font-mono">multiserviciossosa.com.co</strong> para tu empresa o proyecto.
                </p>

                <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Precio solo dominio:</span>
                  <span className="text-xl font-black text-emerald-400 tracking-tight">$100.000 COP</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href={waDomainOnlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Comprar Solo Dominio ($100.000 COP)</span>
                </a>
              </div>
            </div>

            {/* CARD 2: DOMINIO + PÁGINA WEB NUEVA ($200.000 COP) */}
            <div className="relative group bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/40 backdrop-blur-2xl border-2 border-amber-500/70 rounded-3xl p-6 flex flex-col justify-between text-left shadow-2xl transition-all duration-500 hover:border-amber-400 hover:-translate-y-1">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-[11px] rounded-full shadow-lg flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-slate-950" />
                <span>OFERTA RECOMENDADA</span>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
                  <Layout className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Dominio + Página Nueva
                  </h3>
                  <p className="text-xs text-amber-400 font-medium uppercase tracking-wider">
                    Paquete Completo Todo Incluido
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Obtén el dominio <strong className="text-white font-mono">multiserviciossosa.com.co</strong> con una página web 100% nueva diseñada desde cero.
                </p>

                <div className="p-3 rounded-2xl bg-amber-950/60 border border-amber-500/40 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Dominio + Sitio Nuevo:</span>
                  <span className="text-xl font-black text-amber-400 tracking-tight">$200.000 COP</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href={waDomainWithSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Comprar Dominio + Página Nueva ($200.000)</span>
                </a>
              </div>
            </div>

          </div>

          {/* CARD 3: ÁREA DE REGULARIZACIÓN O CANCELACIÓN PARA EL TITULAR */}
          <div className="w-full p-6 rounded-3xl bg-slate-900/90 backdrop-blur-2xl border-2 border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-2xl">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4" />
                <span>¿Eres el Titular de la Cuenta?</span>
              </div>
              <h4 className="text-base font-bold text-white">
                Regularizar Saldo / Reactivar el Sitio
              </h4>
              <p className="text-xs text-slate-400">
                Ponte en contacto directo si deseas ponert al día o cancelar el contrato.
              </p>
            </div>

            <a
              href={waCancelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-all shrink-0 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 text-amber-400" />
              <span>Contactar para Regularizar</span>
            </a>
          </div>

          {/* FOOTER NOTICE */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-900 text-xs text-slate-400 space-y-1">
            <p className="text-slate-300 font-medium">
              Atención Directa vía WhatsApp: <strong className="text-white font-mono">+57 311 858 7975</strong>
            </p>
            <p className="text-[11px] text-slate-500">
              Sin pasarelas de pago intermedias. La entrega de ofertas o regularización se gestiona exclusivamente por WhatsApp oficial.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
