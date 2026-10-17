import React from 'react';

export default function Toast({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto p-4 rounded-xl shadow-2xl border text-sm flex items-start gap-3 transform transition-all duration-300 animate-in slide-in-from-bottom-4 ${
            toast.type === 'error'
              ? 'bg-rose-950 text-rose-100 border-rose-800'
              : 'bg-[#0a2540] text-white border-[#c59b27]/40'
          }`}
        >
          <span className="text-lg">
            {toast.type === 'error' ? '⚠️' : '✨'}
          </span>
          <div className="flex-1 text-xs leading-relaxed font-medium">
            {toast.message}
          </div>
          <button
            onClick={() => onDismiss(toast.id)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
