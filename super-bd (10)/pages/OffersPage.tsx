import React, { useState } from 'react';
import { Page } from '../types';
import * as Icons from '../components/Icons';

const OffersPage = ({ setPage }: { setPage: (p: Page) => void }) => {
    const [selectedOffer, setSelectedOffer] = useState<any>(null);

    const specialOffer = {
        id: 'special',
        title: "সুপার ধামাকা অফার",
        amount: "$5",
        minDeposit: "$20",
        color: "from-[#F4D03F] to-[#E67E22]", // Golden/Orange
        icon: Icons.Zap,
        description: "এই অফারটি মিস করবেন না! মাত্র ২০ ডলার ডিপোজিট করলেই পাচ্ছেন ৫ ডলার বোনাস। সীমিত সময়ের জন্য!",
        rules: [
            "সর্বনিম্ন ডিপোজিট ২০ ডলার।",
            "বোনাস সাথে সাথে ব্যালেন্সে যুক্ত হবে।",
            "একজন ইউজার একবারই নিতে পারবেন।"
        ],
        isSpecial: true
    };

    const offers = [
        {
            id: 1,
            title: "বিগিনার লাক",
            amount: "$3",
            minDeposit: "$30",
            color: "from-blue-600 to-cyan-500",
            description: "নতুন ট্রেডারদের জন্য। ৩০ ডলার ডিপোজিটে ৩ ডলার বোনাস।",
            rules: ["ডিপোজিট ৩০ ডলার।", "নতুন একাউন্ট হতে হবে।"]
        },
        {
            id: 2,
            title: "উইকলি বোনাস",
            amount: "$8",
            minDeposit: "$50",
            color: "from-emerald-500 to-teal-600",
            description: "সাপ্তাহিক ধামাকা! ৫০ ডলার ডিপোজিটে ৮ ডলার ফ্রি।",
            rules: ["ডিপোজিট ৫০ ডলার।", "সপ্তাহে একবার।"]
        },
        {
            id: 3,
            title: "ট্রেডার্স চয়েস",
            amount: "$15",
            minDeposit: "$100",
            color: "from-violet-600 to-purple-600",
            description: "স্মার্ট ট্রেডারদের পছন্দ। ১০০ ডলার ডিপোজিটে ১৫ ডলার ক্যাশব্যাক।",
            rules: ["ডিপোজিট ১০০ ডলার।", "ভেরিফাইড একাউন্ট।"]
        },
        {
            id: 4,
            title: "প্রো অফার",
            amount: "$40",
            minDeposit: "$200",
            color: "from-rose-500 to-pink-600",
            description: "প্রো লেভেলের অফার। ২০০ ডলারে ৪০ ডলার বোনাস।",
            rules: ["ডিপোজিট ২০০ ডলার।", "ট্রেডিং ভলিউম ১০০০ হতে হবে।"]
        }
    ];

    return (
        <div className="pt-8 px-4 min-h-screen pb-24 font-['Hind_Siliguri']">
             <div className="flex items-center gap-4 mb-6 mt-4">
                <button onClick={() => selectedOffer ? setSelectedOffer(null) : setPage(Page.PROFILE)} className="p-2 bg-slate-800 rounded-full text-slate-300 border border-white/5 hover:bg-slate-700">
                    <Icons.ArrowLeft className="w-5 h-5" />
                </button>
                <h1 className="text-xl font-bold text-white">
                    {selectedOffer ? 'অফারের বিবরণ' : 'অফার এবং উপহার'}
                </h1>
            </div>
            
            {!selectedOffer ? (
                <div className="space-y-6">
                    {/* Special Offer - Flying Animation */}
                    <div 
                        onClick={() => setSelectedOffer(specialOffer)}
                        className="transform animate-float cursor-pointer"
                    >
                        <div className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF4500] p-[2px] rounded-3xl shadow-[0_0_30px_rgba(255,165,0,0.6)]">
                             <div className="bg-[#1a0b00] rounded-[22px] p-6 relative overflow-hidden">
                                 {/* Shine effect */}
                                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] animate-[shimmer_2s_infinite]"></div>
                                 
                                 {/* Background decorative */}
                                 <div className="absolute -right-6 -top-6">
                                     <Icons.Star className="w-32 h-32 text-yellow-500/20 rotate-12" />
                                 </div>
                                 <div className="absolute -left-6 -bottom-6">
                                     <Icons.Zap className="w-24 h-24 text-red-500/20 -rotate-12" />
                                 </div>

                                 <div className="relative z-10 text-center">
                                     <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 animate-pulse">
                                         HOT DEAL 🔥
                                     </div>
                                     <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mb-1">
                                         {specialOffer.title}
                                     </h2>
                                     <div className="flex items-center justify-center gap-2 my-2">
                                         <span className="text-5xl font-black text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">{specialOffer.amount}</span>
                                         <div className="text-left leading-tight">
                                             <span className="block text-sm text-yellow-200 font-bold">ক্যাশব্যাক</span>
                                             <span className="block text-xs text-orange-200">বোনাস</span>
                                         </div>
                                     </div>
                                     <p className="text-white/90 text-sm font-medium bg-white/10 rounded-lg py-1 px-3 inline-block">
                                         মাত্র {specialOffer.minDeposit} ডিপোজিট করলেই!
                                     </p>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Regular Offers List */}
                    <div className="grid grid-cols-1 gap-4">
                        {offers.map((offer) => (
                            <div 
                                key={offer.id}
                                onClick={() => setSelectedOffer(offer)}
                                className={`bg-gradient-to-r ${offer.color} p-0.5 rounded-2xl cursor-pointer transform transition-all hover:scale-[1.02] active:scale-95 shadow-lg relative overflow-hidden group`}
                            >
                                <div className="bg-slate-900/95 h-full rounded-[14px] p-5 relative overflow-hidden backdrop-blur-sm">
                                    {/* The requested Gift Icon Background */}
                                    <Icons.Gift className={`absolute -right-4 -bottom-6 w-32 h-32 text-white/10 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`} />
                                    
                                    <div className="relative z-10 flex justify-between items-center">
                                        <div>
                                            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1 block">{offer.title}</span>
                                            <div className="flex items-baseline gap-2">
                                                <h3 className="text-3xl font-black text-white">
                                                    {offer.amount}
                                                </h3>
                                                <span className="text-sm font-medium text-slate-400">ক্যাশব্যাক</span>
                                            </div>
                                            <p className="text-slate-300 text-xs mt-1 bg-slate-800/50 inline-block px-2 py-1 rounded border border-white/5">
                                                ডিপোজিট: <span className="text-white font-bold">{offer.minDeposit}</span>
                                            </p>
                                        </div>
                                        <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${offer.color} flex items-center justify-center shadow-lg border border-white/20`}>
                                            <Icons.ChevronRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                // Detail View (keep roughly same but styled nicely)
                <div className="animate-slide-up">
                    <div className={`w-full h-56 rounded-3xl bg-gradient-to-br ${selectedOffer.color} flex flex-col items-center justify-center mb-6 shadow-2xl relative overflow-hidden`}>
                         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                         {/* Shine effect */}
                         <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-[shimmer_3s_infinite]"></div>

                         <div className="text-center relative z-10 p-6">
                            <h2 className="text-6xl font-black text-white drop-shadow-lg tracking-tighter mb-1">{selectedOffer.amount}</h2>
                            <div className="bg-black/20 backdrop-blur-sm px-6 py-1.5 rounded-full border border-white/10">
                                <p className="text-white font-bold text-lg">ক্যাশব্যাক বোনাস</p>
                            </div>
                            <p className="text-white/80 text-sm mt-3 font-medium">ডিপোজিট প্রয়োজন: {selectedOffer.minDeposit}</p>
                         </div>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6 border border-white/10 space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                <Icons.Info className="w-5 h-5 text-indigo-400" />
                                বিবরণ
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-sm">
                                {selectedOffer.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                <Icons.CheckCircle className="w-5 h-5 text-emerald-400" />
                                শর্তাবলী
                            </h3>
                             <ul className="space-y-3">
                                {selectedOffer.rules.map((rule: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 bg-slate-800/40 p-3 rounded-lg border border-white/5">
                                        <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-emerald-400"></div>
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button 
                            onClick={() => {
                                alert('বোনাস পেতে ডিপোজিট করুন!');
                                setPage(Page.DEPOSIT);
                            }}
                            className={`w-full py-4 rounded-xl bg-gradient-to-r ${selectedOffer.color} font-bold text-white text-lg shadow-lg hover:opacity-90 active:scale-95 transition-all`}
                        >
                            ডিপোজিট করুন
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OffersPage;