
import React from 'react';
import { Page, User } from '../types';
import * as Icons from '../components/Icons';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

const ProfilePage = ({ setPage, userData }: { setPage: (p: Page) => void, userData: User | null }) => {
    const _DL = "https://www.dropbox.com/scl/fi/e0s2b4x1tzxsznhj7u77d/superbd.apk?rlkey=rhy0ptxss5bir60kytub7e1qe&st=fcotry02&dl=1";

    const handleLogout = async () => {
        await signOut(auth);
        window.location.reload();
    };

    const handleDownload = () => {
        window.location.href = _DL;
    };

    const menuItems = [
        { icon: Icons.History, label: "Transaction History", action: () => setPage(Page.RECORD) },
        { icon: Icons.Headphones, label: "Support", action: () => setPage(Page.SUPPORT) },
        { icon: Icons.Gift, label: "Gift / Offers", action: () => setPage(Page.OFFERS) },
        { icon: Icons.Info, label: "About Us", action: () => setPage(Page.ABOUT_US) },
        { icon: Icons.LogOut, label: "Log Out", action: handleLogout, color: "text-red-400" },
    ];

    return (
        <div className="pt-24 pb-24 px-4 space-y-6 min-h-screen">
             <div className="fixed top-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-white/10 px-4 py-4 shadow-lg">
                <h1 className="text-xl font-bold text-white text-center">Profile</h1>
            </div>

            {/* ATM Card Design - Golden Theme (User Provided Design) */}
            <div className="w-full relative">
                <div className="relative w-full aspect-[1.586/1] rounded-2xl p-6 overflow-hidden shadow-2xl transition-transform transform hover:scale-[1.01] duration-500 bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] border border-[#FBF5B7]/30">
                    
                    {/* Texture overlay */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>
                    
                    {/* Sheen Effects */}
                    <div className="absolute -top-[50%] -left-[50%] w-[100%] h-[100%] bg-white/30 rounded-full blur-[80px]"></div>

                    <div className="relative z-10 flex flex-col justify-between h-full text-slate-900">
                        {/* Header: Bank Name & Wifi */}
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                                <Icons.TrendingUp className="w-6 h-6 text-slate-900" />
                                <span className="font-black italic tracking-widest text-lg">SUPER BD</span>
                            </div>
                             <Icons.Wifi className="w-6 h-6 text-slate-800/60 rotate-90" />
                        </div>

                        {/* Chip & Balance */}
                        <div className="flex flex-row justify-between items-center mt-2">
                             {/* Chip */}
                            <div className="w-12 h-9 rounded bg-gradient-to-br from-[#e2e2e2] to-[#9ca3af] border border-slate-400/50 shadow-inner relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 border-[0.5px] border-black/10 rounded-[2px] m-[2px]"></div>
                                <div className="w-full h-[1px] bg-black/10 absolute top-1/2"></div>
                                <div className="h-full w-[1px] bg-black/10 absolute left-1/3"></div>
                                <div className="h-full w-[1px] bg-black/10 absolute right-1/3"></div>
                            </div>
                            
                            <div className="text-right">
                                <p className="text-[10px] text-slate-800 font-bold uppercase tracking-widest">Balance</p>
                                <p className="text-3xl font-mono font-black text-slate-900 tracking-tighter drop-shadow-sm">$ {userData?.balance.toFixed(2) || '0.00'}</p>
                            </div>
                        </div>

                        {/* Card Number & Info */}
                        <div className="space-y-1 mt-auto">
                             <div className="flex justify-between items-end mb-2">
                                {/* NAME */}
                                <div className="font-mono text-xl font-bold tracking-widest text-slate-900/90 uppercase truncate max-w-[80%]">
                                    {userData?.name || 'USER NAME'}
                                </div>
                            </div>

                            <div className="flex justify-between items-end">
                                <div>
                                    {/* PHONE */}
                                    <p className="font-bold text-sm tracking-wider text-slate-900 font-mono">
                                        {userData?.phone || '017XXXXXXXX'}
                                    </p>
                                </div>
                                {/* Simple Logo placeholder */}
                                <div className="font-bold italic text-slate-900/50 text-xs">
                                    PREMIUM MEMBER
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setPage(Page.DEPOSIT)} className="flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-900 border border-white/10 active:scale-95 transition-transform hover:bg-slate-800 hover:border-emerald-500/30 group">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                        <Icons.Wallet className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="font-semibold text-sm text-slate-200">Deposit</span>
                </button>
                <button onClick={() => setPage(Page.WITHDRAW)} className="flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-900 border border-white/10 active:scale-95 transition-transform hover:bg-slate-800 hover:border-red-500/30 group">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                        <Icons.Wallet className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="font-semibold text-sm text-slate-200">Withdraw</span>
                </button>
            </div>

            {/* Menu */}
            <div className="bg-[#131C31] rounded-2xl border border-white/10 overflow-hidden">
                {menuItems.map((item, index) => (
                    <button 
                        key={index}
                        onClick={item.action}
                        className={`w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors ${index !== menuItems.length - 1 ? 'border-b border-white/5' : ''}`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.color ? 'bg-red-500/10' : 'bg-slate-800'}`}>
                                <item.icon className={`w-4 h-4 ${item.color || 'text-slate-400'}`} />
                            </div>
                            <span className={`font-medium ${item.color || 'text-slate-200'}`}>{item.label}</span>
                        </div>
                        <Icons.ChevronRight className="w-4 h-4 text-slate-600" />
                    </button>
                ))}
            </div>

            {/* Permanent App Download Button */}
            <button 
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 p-4 rounded-2xl flex items-center justify-between shadow-lg active:scale-95 transition-transform border border-emerald-500/30 group"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Icons.Download className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-white font-bold text-sm">Download Android App</h3>
                        <p className="text-emerald-200 text-xs">For faster access</p>
                    </div>
                </div>
                <Icons.ChevronRight className="w-5 h-5 text-emerald-200" />
            </button>
        </div>
    );
};

export default ProfilePage;
