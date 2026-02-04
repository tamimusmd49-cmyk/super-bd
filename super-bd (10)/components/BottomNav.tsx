
import React from 'react';
import { Page } from '../types';
import * as _I from './Icons';

const BottomNav = ({ currentPage: _c, setPage: _s }: { currentPage: Page, setPage: (p: Page) => void }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto z-50">
            <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-t from-[#0B1221] to-transparent pointer-events-none"></div>
            <div className="bg-[#0F1729]/95 backdrop-blur-xl border-t border-white/5 pb-safe pt-2 px-6 h-[80px] flex items-start justify-between shadow-[0_-5px_20px_rgba(0,0,0,0.3)] rounded-t-2xl">
                <button onClick={() => _s(Page.HOME)} className="flex flex-col items-center gap-1 w-16 group pt-2">
                    <div className={`transition-all duration-300 ${_c === Page.HOME ? '-translate-y-1' : ''}`}>
                         <_I.Home className={`w-6 h-6 transition-colors ${_c === Page.HOME ? 'text-emerald-400 fill-emerald-400/20' : 'text-slate-400 group-hover:text-slate-200'}`} />
                    </div>
                    <span className={`text-[10px] font-medium ${_c === Page.HOME ? 'text-emerald-400' : 'text-slate-500'}`}>Home</span>
                </button>
                <button onClick={() => _s(Page.DEPOSIT)} className="relative -top-8 group">
                    <div className="absolute inset-0 bg-emerald-500/50 blur-lg rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border-[4px] border-[#0B1221] transition-all transform duration-300 ${_c === Page.DEPOSIT ? 'bg-emerald-500 scale-110' : 'bg-gradient-to-tr from-indigo-500 to-purple-600 hover:scale-105'}`}>
                        <_I.Wallet className="w-6 h-6 text-white" />
                    </div>
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 w-max">Deposit</span>
                </button>
                <button onClick={() => _s(Page.PROFILE)} className="flex flex-col items-center gap-1 w-16 group pt-2">
                     <div className={`transition-all duration-300 ${_c === Page.PROFILE ? '-translate-y-1' : ''}`}>
                        <_I.User className={`w-6 h-6 transition-colors ${_c === Page.PROFILE ? 'text-emerald-400 fill-emerald-400/20' : 'text-slate-400 group-hover:text-slate-200'}`} />
                     </div>
                    <span className={`text-[10px] font-medium ${_c === Page.PROFILE ? 'text-emerald-400' : 'text-slate-500'}`}>Profile</span>
                </button>
            </div>
        </div>
    );
};
export default BottomNav;
