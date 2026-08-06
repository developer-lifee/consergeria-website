'use client';

import React, { useState } from 'react';
import { Lock, Puzzle, AlertTriangle, CreditCard, RefreshCw } from 'lucide-react';

interface HalfPaidOverlayProps {
  /**
   * Si es true, el overlay de 50% de pago estará activo.
   * Si la factura fue pagada en su totalidad, ponlo en false.
   */
  active?: boolean;
}

export const HalfPaidOverlay: React.FC<HalfPaidOverlayProps> = ({ active = true }) => {
  const [showPayModal, setShowPayModal] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);

  if (!active) return null;

  const handleUnlockAttempt = () => {
    setAttemptCount((prev) => prev + 1);
    setShowPayModal(true);
  };

  return (
    <>
      {/* Capa de Blur + Rompecabezas Bloqueando la mitad inferior / áreas de la pantalla */}
      <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col justify-end">
        {/* Banner informativo superior discreto pero visible */}
        <div className="bg-amber-500/90 text-black px-4 py-2 text-xs sm:text-sm font-mono text-center backdrop-blur-md border-b border-amber-600/40 pointer-events-auto flex items-center justify-center gap-2 shadow-md">
          <AlertTriangle className="w-4 h-4 text-black shrink-0 animate-bounce" />
          <span>
            <strong>MODO 50% LICENCIA:</strong> Esta página web se encuentra renderizada al 50% debido a saldo pendiente de pago del 50% restante.
          </span>
        </div>

        {/* Sección Oscurecida con Blur y Piezas de Rompecabezas (Cubre la mitad de la pantalla) */}
        <div className="h-[55vh] w-full relative backdrop-blur-xl bg-black/80 border-t border-slate-700/80 pointer-events-auto flex flex-col items-center justify-center text-white px-4 text-center overflow-hidden transition-all duration-500">
          
          {/* Patrón decorativo de rejilla/rompecabezas de fondo */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Iconos de piezas de rompecabezas flotando */}
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center animate-pulse">
              <Puzzle className="w-10 h-10 text-amber-400" />
            </div>
            <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1.5 shadow-lg">
              <Lock className="w-4 h-4" />
            </div>
          </div>

          {/* Título e instrucciones */}
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-amber-400 font-mono">
            [ Piezas Faltantes / Componente Bloqueado ]
          </h2>

          <p className="max-w-md text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
            Se ha completado el <span className="text-emerald-400 font-semibold">50% del proyecto</span> (Adelanto recibido). Para desbloquear el 50% restante de las vistas, funciones e imágenes, por favor procese el segundo pago.
          </p>

          {/* Barra de Progreso del Pago */}
          <div className="w-full max-w-xs bg-slate-900 rounded-full h-4 mb-6 border border-slate-700 overflow-hidden relative">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full rounded-full transition-all duration-1000"
              style={{ width: '50%' }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white font-mono drop-shadow">
              PROGRESO DE PAGO: 50% / 100%
            </span>
          </div>

          {/* Botón para intentar desbloquear */}
          <button
            onClick={handleUnlockAttempt}
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-bold rounded-xl shadow-lg shadow-amber-500/20 transition-transform active:scale-95 flex items-center gap-2 cursor-pointer font-mono"
          >
            <CreditCard className="w-5 h-5" />
            Desbloquear 50% Restante
          </button>
        </div>
      </div>

      {/* Modal de "Simulación de Pago" o Aviso al Cliente */}
      {showPayModal && (
        <div className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500/50 rounded-2xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <div className="mx-auto w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-amber-400 animate-spin" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Pasarela de Verificación de Factura</h3>
            <p className="text-slate-300 text-sm mb-6">
              Buscando comprobante de pago del 50% faltante en la cuenta del desarrollador...
            </p>

            <div className="p-3 bg-red-950/60 border border-red-800/60 rounded-xl text-red-200 text-xs mb-6 font-mono">
              ❌ ERROR: Transferencia no detectada ({attemptCount} {attemptCount === 1 ? 'intento' : 'intentos'}).
              <br />
              Por favor reintente tras realizar la transferencia bancaria/Yappy correspondiente al programador.
            </div>

            <button
              onClick={() => setShowPayModal(false)}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-medium text-sm transition-colors cursor-pointer"
            >
              Entendido / Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HalfPaidOverlay;
