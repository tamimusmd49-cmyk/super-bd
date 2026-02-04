import React from 'react';
import { Page } from '../types';
import * as Icons from '../components/Icons';

const AboutUsPage = ({ setPage }: { setPage: (p: Page) => void }) => {
    return (
        <div className="pt-8 px-4 min-h-screen pb-24 font-['Hind_Siliguri']">
             <div className="flex items-center gap-4 mb-8 mt-4">
                <button onClick={() => setPage(Page.PROFILE)} className="p-2 bg-slate-800 rounded-full text-slate-300 border border-white/5 hover:bg-slate-700">
                    <Icons.ArrowLeft className="w-5 h-5" />
                </button>
                <h1 className="text-xl font-bold text-white">আমাদের সম্পর্কে</h1>
            </div>
            
            <div className="space-y-8 pb-10">
                {/* Hero Section */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-8 text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6 rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Icons.TrendingUp className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">SUPER BD</h2>
                        <p className="text-slate-400 text-sm max-w-xs mx-auto">আপনার বিশ্বস্ত ডলার এক্সচেঞ্জ এবং বাই-সেল প্ল্যাটফর্ম</p>
                    </div>
                </div>

                {/* Our Story */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                        আমাদের গল্প
                    </h3>
                    <div className="bg-slate-900/50 p-5 rounded-2xl border border-white/5 text-slate-300 leading-relaxed text-sm text-justify">
                        ২০২৩ সালে প্রতিষ্ঠিত, <span className="text-emerald-400 font-bold">সুপার বিডি</span> আজ বাংলাদেশের হাজারো মানুষের আস্থার প্রতীক। আমরা একটি সহজ এবং নিরাপদ ডলার এক্সচেঞ্জ প্ল্যাটফর্ম তৈরি করেছি। এখানে আপনি খুব সহজে কম রেটে ডলার কিনে, রেট বাড়লে বিক্রি করে লাভ করতে পারেন। আমাদের লক্ষ্য হলো সবাইকে আর্থিক স্বাধীনতা অর্জনে সহায়তা করা।
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                            <Icons.Globe className="w-5 h-5 text-blue-400" />
                        </div>
                        <h4 className="font-bold text-white mb-1">গ্লোবাল অ্যাক্সেস</h4>
                        <p className="text-xs text-slate-400">বিশ্বমানের এক্সচেঞ্জ সুবিধা</p>
                    </div>
                     <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                            <Icons.Shield className="w-5 h-5 text-purple-400" />
                        </div>
                        <h4 className="font-bold text-white mb-1">নিরাপত্তা</h4>
                        <p className="text-xs text-slate-400">সর্বোচ্চ নিরাপত্তা নিশ্চিত</p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                        কেন আমরা সেরা?
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                <Icons.Check className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">১০,০০০+ সন্তুষ্ট গ্রাহক</h4>
                                <p className="text-xs text-slate-400">আমাদের বিশাল কমিউনিটির অংশ হোন</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                                <Icons.Zap className="w-5 h-5 text-yellow-500" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">সুপার ফাস্ট পেমেন্ট</h4>
                                <p className="text-xs text-slate-400">উইথড্রল রিকোয়েস্টের ৫ মিনিটের মধ্যে পেমেন্ট</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0">
                                <Icons.Headphones className="w-5 h-5 text-pink-500" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">২৪/৭ কাস্টমার সাপোর্ট</h4>
                                <p className="text-xs text-slate-400">আমরা সর্বদা আপনার পাশে আছি</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer / License */}
                <div className="text-center pt-6 border-t border-white/5">
                    <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Official License</p>
                    <p className="text-slate-300 font-mono text-sm">REG-BD-2024-8892</p>
                    <p className="text-slate-600 text-[10px] mt-4">© 2024 Super BD. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;