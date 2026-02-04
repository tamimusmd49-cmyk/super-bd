import React from 'react';
import { Page } from '../types';
import * as Icons from '../components/Icons';

const SupportPage = ({ setPage }: { setPage: (p: Page) => void }) => {
    return (
        <div className="pt-8 px-4 min-h-screen pb-24 font-['Hind_Siliguri']">
            <div className="flex items-center gap-4 mb-8 mt-4">
                <button onClick={() => setPage(Page.PROFILE)} className="p-2 bg-slate-800 rounded-full text-slate-300 border border-white/5 hover:bg-slate-700">
                    <Icons.ArrowLeft className="w-5 h-5" />
                </button>
                <h1 className="text-xl font-bold text-white">সাপোর্ট সেন্টার</h1>
            </div>

            <div className="space-y-6">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                    <div className="relative z-10 text-center">
                        <h2 className="text-2xl font-bold text-white mb-2">কিভাবে সাহায্য করতে পারি?</h2>
                        <p className="text-indigo-100 text-sm mb-6">আমাদের সাপোর্ট টিম ২৪/৭ আপনার সেবায় নিয়োজিত। যে কোনো সমস্যায় যোগাযোগ করুন।</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="bg-slate-900 border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-emerald-500/30 transition-colors cursor-pointer" onClick={() => window.open('https://wa.me/8801324647939', '_blank')}>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Icons.WhatsApp className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold">হোয়াটসঅ্যাপ</h3>
                                <p className="text-slate-400 text-xs">অফিসিয়াল হোয়াটসঅ্যাপ সাপোর্ট</p>
                            </div>
                        </div>
                        <Icons.ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                    </div>

                    <div className="bg-slate-900 border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-emerald-500/30 transition-colors cursor-pointer" onClick={() => window.open('https://t.me/superbdtrading', '_blank')}>
                        <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <Icons.MessageCircle className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold">টেলিগ্রাম</h3>
                                <p className="text-slate-400 text-xs">আমাদের চ্যানেলে যুক্ত হোন</p>
                            </div>
                        </div>
                        <Icons.ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                    </div>

                    <div className="bg-slate-900 border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-emerald-500/30 transition-colors cursor-pointer" onClick={() => window.location.href = 'mailto:aviatorsuper021@gmail.com'}>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                                <Icons.Mail className="w-6 h-6 text-pink-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold">ইমেইল সাপোর্ট</h3>
                                <p className="text-slate-400 text-xs">অফিসিয়াল ইমেইল পাঠান</p>
                            </div>
                        </div>
                        <Icons.ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                    </div>
                </div>

                <div className="mt-8">
                     <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Icons.Info className="w-5 h-5 text-slate-400" />
                        সচরাচর জিজ্ঞাসা (FAQ)
                    </h3>
                    <div className="space-y-3">
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                            <p className="text-white text-sm font-semibold mb-1">ডিপোজিট এড হতে কতক্ষণ লাগে?</p>
                            <p className="text-slate-400 text-xs">সাধারণত ৫-১০ মিনিটের মধ্যে ডিপোজিট ব্যালেন্সে যুক্ত হয়ে যায়।</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                            <p className="text-white text-sm font-semibold mb-1">মিনিমাম উইথড্র কত?</p>
                            <p className="text-slate-400 text-xs">সর্বনিম্ন ৫ ডলার হলে আপনি উইথড্র করতে পারবেন।</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupportPage;