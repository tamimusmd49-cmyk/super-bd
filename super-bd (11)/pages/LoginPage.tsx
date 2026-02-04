
import React, { useState } from 'react';
import * as _I from '../components/Icons';
import { auth as _au } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = ({ onSwitchToRegister: _sw }: any) => {
    const [_i, _si] = useState('');
    const [_p, _sp] = useState('');
    const [_l, _sl] = useState(false);
    const [_e, _se] = useState('');

    const _h = async (e: React.FormEvent) => {
        e.preventDefault(); _se(''); _sl(true);
        try {
            let _u = _i.trim();
            if (!_u.includes('@')) _u += '@superbd.com';
            await signInWithEmailAndPassword(_au, _u, _p.trim());
        } catch (x: any) {
            _se('ভুল তথ্য দিয়েছেন!'); _sl(false);
        }
    };

    return (
        <div className="w-full animate-fade-in-up">
            <div className="mb-6 sm:mb-8 text-center">
                <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">স্বাগতম</h1>
                <p className="text-trading-muted text-xs sm:text-sm">মার্কেট অ্যাক্সেস করতে আপনার তথ্য দিন।</p>
            </div>

            <form onSubmit={_h} className="space-y-4 sm:space-y-5">
                {_e && <div className="bg-trading-loss/10 border border-trading-loss/20 rounded-lg p-3 text-trading-loss text-xs text-center font-bold">{_e}</div>}
                
                <div className="space-y-1">
                    <label className="text-xs font-medium text-trading-muted ml-1">মোবাইল নাম্বার</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <_I.Phone className="h-5 w-5 text-trading-muted group-focus-within:text-trading-accent transition-colors" />
                        </div>
                        <input
                            type="tel"
                            value={_i} 
                            onChange={e => _si(e.target.value)}
                            required
                            className="block w-full pl-10 pr-3 py-3 bg-trading-dark/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-trading-accent/50 focus:border-trading-accent text-white placeholder-trading-muted transition-all outline-none text-base"
                            placeholder="017XXXXXXXX"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <div className="flex justify-between items-center ml-1">
                        <label className="text-xs font-medium text-trading-muted">পাসওয়ার্ড</label>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <_I.Lock className="h-5 w-5 text-trading-muted group-focus-within:text-trading-accent transition-colors" />
                        </div>
                        <input
                            type="password"
                            value={_p} 
                            onChange={e => _sp(e.target.value)}
                            required
                            className="block w-full pl-10 pr-3 py-3 bg-trading-dark/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-trading-accent/50 focus:border-trading-accent text-white placeholder-trading-muted transition-all outline-none text-base"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={_l}
                    className="w-full flex items-center justify-center py-3 px-4 rounded-lg text-trading-dark font-bold bg-trading-accent hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-trading-card focus:ring-trading-accent transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                    {_l ? (
                        <_I.Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <>
                            লগ ইন করুন
                            <_I.ArrowRight className="ml-2 w-5 h-5" />
                        </>
                    )}
                </button>
            </form>

            <div className="mt-5 pt-5 sm:mt-6 sm:pt-6 border-t border-white/5 text-center">
                <p className="text-sm text-trading-muted">
                    কোন একাউন্ট নেই?
                    <button onClick={_sw} className="ml-2 font-medium text-trading-accent hover:text-white transition-colors duration-200">
                        রেজিস্ট্রেশন করুন
                    </button>
                </p>
            </div>
        </div>
    );
};
export default LoginPage;
