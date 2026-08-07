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
  CheckCircle2,
  RefreshCw
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
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-start overflow-x-hidden font-sans select-none pb-16">
      
      {/* SVG REAL JIGSAW PUZZLE CLIP PATH DEFINITIONS */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          {/* Left Fragment Jigsaw Puzzle Mask with Classic Bulbous Tabs */}
          <clipPath id="jigsaw-left-piece" clipPathUnits="objectBoundingBox">
            <path d="
              M 0,0 
              L 0.80,0 
              C 0.80,0.06 0.74,0.09 0.74,0.14 C 0.74,0.19 0.82,0.22 0.88,0.22 C 0.94,0.22 1.00,0.19 1.00,0.14 C 1.00,0.09 0.94,0.06 0.88,0.06 L 0.88,0.38 
              C 0.88,0.44 0.82,0.47 0.82,0.52 C 0.82,0.57 0.90,0.60 0.96,0.60 C 1.02,0.60 1.06,0.57 1.06,0.52 C 1.06,0.47 1.00,0.44 0.94,0.44 L 0.94,0.72 
              C 0.94,0.78 0.88,0.81 0.88,0.86 C 0.88,0.91 0.96,0.94 1.02,0.94 C 1.08,0.94 1.12,0.91 1.12,0.86 L 0.84,1 
              L 0,1 Z
            " />
          </clipPath>

          {/* Right Fragment Jigsaw Puzzle Mask with Matching Sockets */}
          <clipPath id="jigsaw-right-piece" clipPathUnits="objectBoundingBox">
            <path d="
              M 1,0 
              L 0.20,0 
              C 0.20,0.06 0.26,0.09 0.26,0.14 C 0.26,0.19 0.18,0.22 0.12,0.22 C 0.06,0.22 0.00,0.19 0.00,0.14 C 0.00,0.09 0.06,0.06 0.12,0.06 L 0.12,0.38 
              C 0.12,0.44 0.18,0.47 0.18,0.52 C 0.18,0.57 0.10,0.60 0.04,0.60 C -0.02,0.60 -0.06,0.57 -0.06,0.52 C -0.06,0.47 0.00,0.44 0.06,0.44 L 0.06,0.72 
              C 0.06,0.78 0.12,0.81 0.12,0.86 C 0.12,0.91 0.04,0.94 -0.02,0.94 L 0.16,1 
              L 1,1 Z
            " />
          </clipPath>
        </defs>
      </svg>

      {/* Cohesive Background Neon Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* Subtle Background Grid */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* STICKY TOP NAVBAR BANNER */}
      <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-xl border-b border-red-500/30 px-4 py-3 shadow-2xl shadow-red-950/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 animate-pulse">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-red-400">Servicio Suspendido por No Pago</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                El sitio <strong className="text-white font-mono">multiserviciossosa.com.co</strong> ha sido desarmado en piezas por obligación pendiente.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={waNewOwnerOfferUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <Tag className="w-3.5 h-3.5 fill-slate-950" />
              <span>Oferta $100.000</span>
            </a>

            <a
              href={waOwnerReactivationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <RefreshCw className="w-3.5 h-3.5 text-slate-950" />
              <span>Reactivar $200.000</span>
            </a>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-5xl w-full mx-auto px-4 pt-10 pb-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-400 text-xs font-semibold backdrop-blur-md">
          <Puzzle className="w-4 h-4 text-cyan-400" />
          <span>Estructura Web Desensamblada en Rompecabezas</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Página Desarmada <br />
          <span className="bg-gradient-to-r from-red-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
            por Falta de Pago
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed">
          El sitio web <span className="text-slate-200 font-mono underline decoration-red-500/50">multiserviciossosa.com.co</span> se encuentra desensamblado. Las piezas centrales han sido retiradas por saldo pendiente de licencia.
        </p>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 max-w-6xl w-full mx-auto px-4 py-6 flex flex-col items-center">

        {/* -------------------------------------------------------------
            LATERALES CON MÁSCARA SVG DE ROMPECABEZAS (PIEZAS DENTADAS REALES)
           ------------------------------------------------------------- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden hidden lg:block z-0 opacity-35">
          
          {/* LADO IZQUIERDO CON PESTAÑAS DE ROMPECABEZAS */}
          <div 
            className="absolute top-0 left-0 w-[42%] h-full bg-[#0a192f] border-r-4 border-cyan-500/50 filter drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            style={{ clipPath: "url(#jigsaw-left-piece)" }}
          >
            <div className="w-[1200px] pointer-events-none opacity-80 transform -translate-x-10">
              <Navbar />
              <HeroSection />
              <ServicesSection />
            </div>
          </div>

          {/* LADO DERECHO CON ENCAJES DE ROMPECABEZAS */}
          <div 
            className="absolute top-0 right-0 w-[42%] h-full bg-[#0a192f] border-l-4 border-cyan-500/50 filter drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            style={{ clipPath: "url(#jigsaw-right-piece)" }}
          >
            <div className="w-[1200px] pointer-events-none opacity-80 transform -translate-x-[420px]">
              <Navbar />
              <HeroSection />
              <ServicesSection />
            </div>
          </div>

        </div>

        {/* PIEZAS PEQUEÑAS DE ROMPECABEZAS CON CONECTORES FLOTANTES */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 hidden md:block">
          
          {/* Pieza Pequeña 1 Top Left */}
          <div className="absolute top-24 left-10 transform -rotate-12 opacity-80">
            <div className="p-2.5 rounded-2xl bg-slate-900/90 border-2 border-red-500/50 shadow-2xl backdrop-blur-md flex items-center gap-2 text-[11px] text-red-400 font-mono">
              <Puzzle className="w-4 h-4 text-red-400" />
              <span>[ Pieza Faltante #1 ]</span>
            </div>
          </div>

          {/* Pieza Pequeña 2 Top Right */}
          <div className="absolute top-36 right-10 transform rotate-12 opacity-80">
            <div className="p-2.5 rounded-2xl bg-slate-900/90 border-2 border-cyan-500/50 shadow-2xl backdrop-blur-md flex items-center gap-2 text-[11px] text-cyan-400 font-mono">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>[ Pieza Faltante #2 ]</span>
            </div>
          </div>

        </div>

        {/* -------------------------------------------------------------
            SOLO 2 OPCIONES CLARAS DE ADQUISICIÓN / REACTIVACIÓN (CENTRO)
           ------------------------------------------------------------- */}
        <div className="relative z-20 max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-auto pt-4">

          {/* OPCIÓN 1: ADQUISICIÓN DE PROYECTO ($100.000 COP) */}
          <div className="relative group bg-slate-900/95 backdrop-blur-2xl border-2 border-cyan-500/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between text-left shadow-2xl transition-all duration-500 hover:border-cyan-400 hover:-translate-y-1">
            
            <div className="absolute -top-3.5 left-6 px-3.5 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-black text-[11px] rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
              <span>NUEVA ADQUISICIÓN</span>
            </div>

            <div className="space-y-4 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
                <Globe className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Dominio + Hosting + Página Nueva
                </h3>
                <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mt-0.5">
                  Creada Totalmente Desde Cero
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Obtén el dominio <strong className="text-white font-mono">multiserviciossosa.com.co</strong> con servicio de hosting y el diseño de una página web totalmente nueva creada a la medida de tus necesidades.
              </p>

              <div className="p-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-medium">Dominio + Host + Sitio Nuevo:</span>
                <span className="text-2xl font-black text-cyan-400 tracking-tight">$100.000 COP</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80">
              <a
                href={waNewOwnerOfferUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Comprar Dominio + Página Nueva ($100.000 COP)</span>
              </a>
            </div>
          </div>

          {/* OPCIÓN 2: REACTIVACIÓN DE SERVICIO OFICIAL ($200.000 COP) */}
          <div className="relative group bg-slate-900/95 backdrop-blur-2xl border-2 border-amber-500/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between text-left shadow-2xl transition-all duration-500 hover:border-amber-400 hover:-translate-y-1">
            
            <div className="absolute -top-3.5 left-6 px-3.5 py-1 bg-amber-500 text-slate-950 font-black text-[11px] rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>REACTIVACIÓN OFICIAL</span>
            </div>

            <div className="space-y-4 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
                <RefreshCw className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Reactivación de Servicio Oficial
                </h3>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mt-0.5">
                  Pago de Saldo Pendiente del 50%
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Si requieres volver a ensamblar el sitio web original de <strong className="text-white font-mono">Multiservicios Sosa</strong> y reactivar todas sus funciones, cancela el 50% restante de la licencia.
              </p>

              <div className="p-4 rounded-2xl bg-amber-950/60 border border-amber-500/40 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-medium">Pago de Reactivación:</span>
                <span className="text-2xl font-black text-amber-400 tracking-tight">$200.000 COP</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80">
              <a
                href={waOwnerReactivationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Reactivar Sitio Web Oficial ($200.000 COP)</span>
              </a>
            </div>
          </div>

        </div>

        {/* FOOTER WHATSAPP DIRECT NOTICE */}
        <footer className="relative z-20 max-w-2xl w-full mx-auto mt-10 text-center text-xs text-slate-400">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-900 backdrop-blur-md space-y-1">
            <p className="text-slate-300 font-medium">
              Atención Directa vía WhatsApp: <strong className="text-white font-mono">+57 311 858 7975</strong>
            </p>
            <p className="text-[11px] text-slate-500">
              Sin pasarelas de pago intermedias. La contratación o reactivación del servicio se realiza directamente vía WhatsApp oficial.
            </p>
          </div>
        </footer>

      </main>

    </div>
  );
}
