"use client";

import React, { useState } from "react";
import { 
  ShieldAlert, 
  Lock, 
  MessageCircle, 
  ShoppingBag, 
  Tag, 
  Puzzle, 
  CheckCircle2,
  Sparkles,
  Zap,
  Globe,
  Layout,
  Star
} from "lucide-react";
import Image from "next/image";

export function SuspendedPuzzlePage() {
  const [hoveredPiece, setHoveredPiece] = useState<number | null>(null);

  const domainOnlyMsg = encodeURIComponent("quiero la oferta del dominio https://multiserviciossosa.com.co/ por solo 100.000 pesos");
  const domainWithSiteMsg = encodeURIComponent("quiero la oferta del dominio https://multiserviciossosa.com.co/ con una página totalmente nueva por solo 200.000 pesos");
  const cancelServiceMsg = encodeURIComponent("Hola, solicito información para regularizar el saldo/reactivar la página multiserviciossosa.com.co");
  
  const waDomainOnlyUrl = `https://wa.me/573118587975?text=${domainOnlyMsg}`;
  const waDomainWithSiteUrl = `https://wa.me/573118587975?text=${domainWithSiteMsg}`;
  const waCancelUrl = `https://wa.me/573118587975?text=${cancelServiceMsg}`;

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-start overflow-x-hidden font-sans select-none pb-20">
      
      {/* Background Neon Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Subtle Grid Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* HEADER BANNER */}
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
                El dominio <strong className="text-white font-mono">multiserviciossosa.com.co</strong> se encuentra desarmado en piezas por obligación pendiente.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={waCancelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
              <span>Titular: Regularizar</span>
            </a>

            <a
              href={waDomainWithSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <Tag className="w-3.5 h-3.5 fill-slate-950" />
              <span>Oferta $200.000</span>
            </a>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-5xl w-full mx-auto px-4 pt-10 pb-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/40 text-amber-400 text-xs font-semibold backdrop-blur-md">
          <Puzzle className="w-4 h-4 text-amber-400" />
          <span>Estructura Web Desensamblada en Rompecabezas</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Página No Disponible <br />
          <span className="bg-gradient-to-r from-red-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            por Falta de Pago
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed">
          Las vistas y módulos principales del sitio han sido fragmentados en piezas independientes. Explora las piezas activas y las ofertas de adquisición disponibles.
        </p>
      </section>

      {/* MAIN PUZZLE TILES GRID */}
      <main className="relative z-10 max-w-6xl w-full mx-auto px-4 py-6 space-y-12">
        
        {/* ========================================================
            OFICINAS Y OFERTAS DE ADQUISICIÓN DESTACADAS
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* OFERTA 1: SOLO DOMINIO ($100.000 COP) */}
          <div className="relative group bg-slate-900/80 backdrop-blur-xl border-2 border-emerald-500/40 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:border-emerald-400 hover:-translate-y-1">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-extrabold text-xs rounded-full flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>OFERTA 1</span>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Tag className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Solo Dominio Web
                </h3>
                <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider mt-0.5">
                  Transferencia Inmediata
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Adquiere el dominio <strong className="text-white font-mono">multiserviciossosa.com.co</strong> por un pago único de oportunidad.
              </p>

              <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                <span className="text-xs text-slate-300">Precio solo dominio:</span>
                <span className="text-xl font-black text-emerald-400 tracking-tight">$100.000 COP</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={waDomainOnlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Comprar Solo Dominio ($100.000 COP)</span>
              </a>
            </div>
          </div>

          {/* OFERTA 2 (NUEVA): DOMINIO + PÁGINA WEB NUEVA ($200.000 COP) */}
          <div className="relative group bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/30 backdrop-blur-xl border-2 border-amber-500/60 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:border-amber-400 hover:-translate-y-1">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs rounded-full shadow-lg flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-slate-950" />
              <span>OFERTA RECOMENDADA</span>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Layout className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Dominio + Página Web Totalmente Nueva
                </h3>
                <p className="text-xs text-amber-400 font-medium uppercase tracking-wider mt-0.5">
                  Paquete Completo Todo Incluido
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Obtén el dominio <strong className="text-white font-mono">multiserviciossosa.com.co</strong> junto con un sitio web 100% personalizado diseñado a tu medida desde cero.
              </p>

              <div className="p-3 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-between">
                <span className="text-xs text-slate-300">Dominio + Sitio Nuevo:</span>
                <span className="text-xl font-black text-amber-400 tracking-tight">$200.000 COP</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={waDomainWithSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Comprar Dominio + Página Nueva ($200.000 COP)</span>
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================
            CAPTURAS / PANTALLAZOS DEL SITIO EN PIEZAS DE ROMPECABEZAS
           ======================================================== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Puzzle className="w-5 h-5 text-amber-400" />
              <span>Piezas y Capturas del Sitio Original</span>
            </h3>
            <span className="text-xs text-slate-400">Piezas desensambladas</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* PIEZA 1: PANTALLAZO ENCABEZADO Y HERO */}
            <div className="relative group bg-slate-900/90 border-2 border-slate-800 rounded-3xl p-4 shadow-xl transition-all hover:border-slate-700">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <span className="text-[11px] font-black uppercase text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  PIEZA #1: INICIO & IDENTIDAD
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">CAPTURA</span>
              </div>

              {/* MOCKUP CAPTURA HERO */}
              <div className="relative h-44 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col justify-between p-4 bg-gradient-to-br from-slate-900 to-slate-950">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[10px] font-bold text-cyan-400">MS</div>
                    <span className="text-xs font-bold text-white">Multiservicios Sosa</span>
                  </div>
                  <span className="text-[9px] bg-cyan-950 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-800">CONSERJERÍA</span>
                </div>

                <div className="space-y-1 my-auto">
                  <h5 className="text-sm font-bold text-slate-100">Servicio de Conserjería Profesional</h5>
                  <p className="text-[11px] text-slate-400 leading-tight">Atención en portería, control de acceso y apoyo operativo para conjuntos y edificios.</p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-800/60">
                  <span className="text-[9px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">✓ Personal Certificado</span>
                </div>
              </div>
            </div>

            {/* PIEZA 2: COMPONENTE BLOQUEADO */}
            <div className="relative group bg-slate-950/90 border-2 border-dashed border-red-500/40 rounded-3xl p-4 flex flex-col items-center justify-center text-center gap-3 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <Lock className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase text-red-400">PIEZA #2: COTIZADOR VIVO</span>
                <h5 className="text-sm font-bold text-white">[ Pieza Bloqueada ]</h5>
                <p className="text-xs text-slate-400 mt-1">Calculador de tarifas y turnos de portería fuera de servicio.</p>
              </div>
            </div>

            {/* PIEZA 3: PANTALLAZO SERVICIOS */}
            <div className="relative group bg-slate-900/90 border-2 border-slate-800 rounded-3xl p-4 shadow-xl transition-all hover:border-slate-700">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <span className="text-[11px] font-black uppercase text-cyan-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  PIEZA #3: PORTAFOLIO DE SERVICIOS
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">CAPTURA</span>
              </div>

              {/* MOCKUP CAPTURA SERVICIOS */}
              <div className="relative h-44 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-3 space-y-2 bg-gradient-to-br from-slate-900 to-slate-950">
                <div className="text-[11px] font-bold text-cyan-400 uppercase">Funciones Claras</div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    🏢 Portería 24/7
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    📋 Visitantes
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    📦 Correspondencia
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    🛡️ Rondas
                  </div>
                </div>
              </div>
            </div>

            {/* PIEZA 4: COMPONENTE BLOQUEADO */}
            <div className="relative group bg-slate-950/90 border-2 border-dashed border-amber-500/40 rounded-3xl p-4 flex flex-col items-center justify-center text-center gap-3 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Lock className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase text-amber-400">PIEZA #4: MÓDULO DE RESERVAS</span>
                <h5 className="text-sm font-bold text-white">[ Pieza Desconectada ]</h5>
                <p className="text-xs text-slate-400 mt-1">Módulo de agenda y contratación de conserjes suspendido.</p>
              </div>
            </div>

            {/* PIEZA 5: PANTALLAZO EQUIPO & LEGAL */}
            <div className="relative group bg-slate-900/90 border-2 border-slate-800 rounded-3xl p-4 shadow-xl transition-all hover:border-slate-700">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <span className="text-[11px] font-black uppercase text-indigo-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  PIEZA #5: EQUIPO & MARCO LEGAL
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">CAPTURA</span>
              </div>

              {/* MOCKUP CAPTURA LEGAL */}
              <div className="relative h-44 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-3 space-y-2 bg-gradient-to-br from-slate-900 to-slate-950">
                <div className="text-[11px] font-bold text-indigo-400">Cumplimiento Normativo PH</div>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Servicios adaptados a la reglamentación de propiedad horizontal en Colombia.
                </p>
                <div className="p-2 rounded bg-indigo-950/40 border border-indigo-500/20 text-[10px] text-indigo-300 font-medium">
                  ✓ Personal capacitado sin vinculación directa para la copropiedad.
                </div>
              </div>
            </div>

            {/* PIEZA 6: TITULAR ACCIÓN */}
            <div className="relative group bg-slate-900/90 border-2 border-amber-500/40 rounded-3xl p-4 flex flex-col justify-between shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-2">
                <span className="text-[11px] font-black uppercase text-amber-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  PIEZA #6: ÁREA DEL TITULAR
                </span>
              </div>

              <div className="space-y-2 my-auto">
                <h5 className="text-sm font-bold text-white"> Regularizar o Cancelar Servicio</h5>
                <p className="text-xs text-slate-400">Ponte en contacto para poner al día tu saldo o dar de baja el proyecto.</p>
              </div>

              <a
                href={waCancelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all mt-2"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                <span>Contactar a Soporte</span>
              </a>
            </div>

          </div>
        </div>

      </main>

      {/* FOOTER NOTICE */}
      <footer className="relative z-10 max-w-4xl w-full mx-auto px-4 mt-12 text-center text-xs text-slate-400">
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-1">
          <p className="text-slate-300 font-medium">
            Atención Directa vía WhatsApp: <strong className="text-white font-mono">+57 311 858 7975</strong>
          </p>
          <p className="text-[11px] text-slate-500">
            Sin pasarelas de pago intermedias. La entrega de ofertas o regularizaciones se gestiona vía WhatsApp oficial.
          </p>
        </div>
      </footer>

    </div>
  );
}
