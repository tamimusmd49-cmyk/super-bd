
import React, { useState } from 'react';
import * as _I from '../components/Icons';
import { auth as _au, db as _db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const RegisterPage = ({ onSwitchToLogin: _sw }: any) => {
    const [_n, _sn] = useState('');
    const [_c, _sc] = useState('');
    const [_p, _sp] = useState('');
    const [_cp, _scp] = useState('');
    const [_l, _sl] = useState(false);
    const [_e, _se] = useState('');

    const _h = async (e: React.FormEvent) => {
        e.preventDefault(); _se('');
        if (_p !== _cp) return _se('পাসওয়ার্ড মিলছে না!');
        if (_p.length < 6) return _se('পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে');
        _sl(true);
        try {
            let _em = _c.trim(), _ph = "N/A", _re = "N/A";
            if (!_em.includes('@')) { _ph = _em; _em += '@superbd.com'; } else { _re = _em; }
            const _cr = await createUserWithEmailAndPassword(_au, _em, _p);
            await setDoc(doc(_db, "users", _cr.user.uid), { uid: _cr.user.uid, name: _n, phone: _ph, realEmail: _re, email: _em, balance: 0, role: 'user', status: 'active', createdAt: serverTimestamp() });
        } catch (x: any) { _se('রেজিস্ট্রেশন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।'); _sl(false); }
    };

    return (
        <div className="w-full animate-fade-in-up">
            <div className="mb-6 sm:mb-8 text-center">
                <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">একাউন্ট তৈরি করুন</h1>
                <p className="text-trading-muted text-xs sm:text-sm">Super BD তে যুক্ত হয়ে আজই ট্রেডিং শুরু করুন।</p>
            </div>

            <form onSubmit={_h} className="space-y-4 sm:space-y-5">
                {_e && <div className="bg-trading-loss/10 border border-trading-loss/20 rounded-lg p-3 text-trading-loss text-xs text-center font-bold">{_e}</div>}
                
                <div className="space-y-1">
                    <label className="text-xs font-medium text-trading-muted ml-1">আপনার নাম</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <_I.User className="h-5 w-5 text-trading-muted group-focus-within:text-trading-accent transition-colors" />
                        </div>
                        <input
                            type="text"
                            value={_n} 
                            onChange={e => _sn(e.target.value)}
                            required
                            className="block w-full pl-10 pr-3 py-3 bg-trading-dark/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-trading-accent/50 focus:border-trading-accent text-white placeholder-trading-muted transition-all outline-none text-base"
                            placeholder="আপনার পুরো নাম"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-medium text-trading-muted ml-1">মোবাইল নাম্বার</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <_I.Phone className="h-5 w-5 text-trading-muted group-focus-within:text-trading-accent transition-colors" />
                        </div>
                        <input
                            type="text"
                            value={_c} 
                            onChange={e => _sc(e.target.value)}
                            required
                            className="block w-full pl-10 pr-3 py-3 bg-trading-dark/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-trading-accent/50 focus:border-trading-accent text-white placeholder-trading-muted transition-all outline-none text-base"
                            placeholder="017XXXXXXXX"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-medium text-trading-muted ml-1">পাসওয়ার্ড</label>
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

                <div className="space-y-1">
                    <label className="text-xs font-medium text-trading-muted ml-1">পাসওয়ার্ড নিশ্চিত করুন</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <_I.Lock className="h-5 w-5 text-trading-muted group-focus-within:text-trading-accent transition-colors" />
                        </div>
                        <input
                            type="password"
                            value={_cp} 
                            onChange={e => _scp(e.target.value)}
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
                            অ্যাকাউন্ট খুলুন
                            <_I.ArrowRight className="ml-2 w-5 h-5" />
                        </>
                    )}
                </button>
            </form>

            <div className="mt-5 pt-5 sm:mt-6 sm:pt-6 border-t border-white/5 text-center">
                <p className="text-sm text-trading-muted">
                    ইতিমধ্যে একাউন্ট আছে?
                    <button onClick={_sw} className="ml-2 font-medium text-trading-accent hover:text-white transition-colors duration-200">
                        লগ ইন করুন
                    </button>
                </p>
            </div>
        </div>
    );
};
export default RegisterPage;
