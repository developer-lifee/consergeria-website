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
  Star,
  RefreshCw,
  Flame
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
    <div className="relative w-full min-h-screen bg-[#05070c] text-slate-100 flex flex-col items-center justify-between overflow-x-hidden font-sans select-none">
      
      {/* Background Neon Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-600/10 rounded-full blur-[200px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none z-0" />

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* -------------------------------------------------------------
          FULL-VIEWPORT LATERAL PUZZLE FRAGMENTS (FULL BLEED LEFT & RIGHT)
         ------------------------------------------------------------- */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0 hidden lg:block">
        
        {/* LADO IZQUIERDO DE LA PÁGINA (0 a 35% de la pantalla) */}
        <div className="absolute top-0 left-0 w-[35vw] h-full overflow-hidden bg-[#0a192f] border-r-4 border-cyan-400 shadow-[15px_0_40px_rgba(6,182,212,0.3)]">
          <div className="w-[100vw] pointer-events-none opacity-90">
            <Navbar />
            <HeroSection />
            <ServicesSection />
          </div>
          {/* Tabs de encaje de rompecabezas en el borde */}
          <div className="absolute top-1/4 -right-4 w-8 h-12 bg-cyan-400 rounded-r-full shadow-lg border-y-2 border-r-2 border-white" />
          <div className="absolute top-2/3 -right-4 w-8 h-12 bg-cyan-400 rounded-r-full shadow-lg border-y-2 border-r-2 border-white" />
        </div>

        {/* LADO DERECHO DE LA PÁGINA (65% a 100% de la pantalla) */}
        <div className="absolute top-0 right-0 w-[35vw] h-full overflow-hidden bg-[#0a192f] border-l-4 border-cyan-400 shadow-[-15px_0_40px_rgba(6,182,212,0.3)]">
          <div className="w-[100vw] pointer-events-none opacity-90 transform -translate-x-[65vw]">
            <Navbar />
            <HeroSection />
            <ServicesSection />
          </div>
          {/* Socket de encaje de rompecabezas en el borde */}
          <div className="absolute top-1/3 -left-4 w-8 h-12 bg-[#05070c] rounded-r-full border-y-2 border-r-2 border-cyan-400 shadow-inner" />
          <div className="absolute top-3/4 -left-4 w-8 h-12 bg-[#05070c] rounded-r-full border-y-2 border-r-2 border-cyan-400 shadow-inner" />
        </div>

      </div>

      {/* PIEZAS PEQUEÑAS DE ROMPECABEZAS FLOTANDO EN LA GRIETA */}
      <div className="fixed inset-0 pointer-events-none z-10 hidden md:block">
        <div className="absolute top-28 left-[36vw] transform -rotate-12 bg-slate-900/95 border-2 border-red-500/60 p-2.5 rounded-2xl text-[11px] font-mono text-red-400 shadow-2xl backdrop-blur-md flex items-center gap-2">
          <Puzzle className="w-4 h-4 text-red-500" />
          <span>[ Pieza Desprendida ]</span>
        </div>

        <div className="absolute bottom-28 right-[36vw] transform rotate-12 bg-slate-900/95 border-2 border-amber-500/60 p-2.5 rounded-2xl text-[11px] font-mono text-amber-400 shadow-2xl backdrop-blur-md flex items-center gap-2">
          <Lock className="w-4 h-4 text-amber-500" />
          <span>[ Pieza Faltante 50% ]</span>
        </div>
      </div>

      {/* -------------------------------------------------------------
          CONTENIDO CENTRAL (EL HUECO NEGRO CON LAS OFERTAS DE WHATSAPP)
         ------------------------------------------------------------- */}
      <header className="relative z-30 w-full bg-slate-950/90 backdrop-blur-xl border-b border-red-500/30 px-4 py-3 shadow-2xl">
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

      {/* CENTRAL MAIN CONTENT */}
      <main className="relative z-20 max-w-3xl w-full mx-auto px-4 py-8 flex flex-col items-center gap-8 text-center my-auto">

        {/* HERO TITLE */}
        <div className="space-y-4">
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

          <p className="max-w-lg mx-auto text-slate-300 text-xs md:text-sm leading-relaxed">
            El sitio web <span className="text-white font-mono underline decoration-red-500/50">multiserviciossosa.com.co</span> se encuentra desensamblado. Las piezas centrales han sido retiradas por saldo pendiente de licencia.
          </p>
        </div>

        {/* LAS 2 TARJETAS CENTRALES DE PAGO / OFERTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

          {/* OPCIÓN 1: NUEVO CLIENTE ($100.000 COP) */}
          <div className="relative group bg-slate-950/95 backdrop-blur-2xl border-2 border-cyan-500/60 rounded-3xl p-6 flex flex-col justify-between text-left shadow-2xl transition-all duration-300 hover:border-cyan-400 hover:scale-[1.02]">
            
            <div className="absolute -top-3.5 left-6 px-3.5 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-black text-[11px] rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
              <span>NUEVA ADQUISICIÓN</span>
            </div>

            <div className="space-y-4 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
                <Globe className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  Dominio + Hosting + Página Nueva
                </h3>
                <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mt-0.5">
                  Creada Desde Cero a tu Gusto
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Obtén el dominio <strong className="text-white font-mono">multiserviciossosa.com.co</strong> con servicio de hosting y una página web 100% nueva diseñada desde cero.
              </p>

              <div className="p-3.5 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-medium">Dominio + Host + Sitio Nuevo:</span>
                <span className="text-xl font-black text-cyan-400 tracking-tight">$100.000 COP</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={waNewOwnerOfferUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Comprar Todo por $100.000 COP</span>
              </a>
            </div>
          </div>

          {/* OPCIÓN 2: REACTIVACIÓN DE SERVICIO OFICIAL ($200.000 COP) */}
          <div className="relative group bg-slate-950/95 backdrop-blur-2xl border-2 border-amber-500/70 rounded-3xl p-6 flex flex-col justify-between text-left shadow-2xl transition-all duration-300 hover:border-amber-400 hover:scale-[1.02]">
            
            <div className="absolute -top-3.5 left-6 px-3.5 py-1 bg-amber-500 text-slate-950 font-black text-[11px] rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>REACTIVACIÓN OFICIAL</span>
            </div>

            <div className="space-y-4 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
                <RefreshCw className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  Reactivación de Servicio Oficial
                </h3>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mt-0.5">
                  Pago de Saldo Pendiente del 50%
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Si requieres volver a ensamblar el sitio web original de <strong className="text-white font-mono">Multiservicios Sosa</strong> y reactivar todas sus funciones, cancela el 50% restante.
              </p>

              <div className="p-3.5 rounded-2xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-medium">Pago de Reactivación:</span>
                <span className="text-xl font-black text-amber-400 tracking-tight">$200.000 COP</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={waOwnerReactivationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Reactivar Sitio Web ($200.000 COP)</span>
              </a>
            </div>
          </div>

        </div>

      </main>

      {/* FOOTER NOTICE */}
      <footer className="relative z-20 max-w-xl w-full mx-auto px-4 text-center text-xs text-slate-400">
        <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-900 backdrop-blur-md space-y-1">
          <p className="text-slate-300 font-medium text-xs">
            Atención Directa vía WhatsApp: <strong className="text-white font-mono">+57 311 858 7975</strong>
          </p>
          <p className="text-[11px] text-slate-500">
            Sin pasarelas de pago intermedias. La contratación o reactivación se realiza directamente vía WhatsApp oficial.
          </p>
        </div>
      </footer>

    </div>
  );
}
