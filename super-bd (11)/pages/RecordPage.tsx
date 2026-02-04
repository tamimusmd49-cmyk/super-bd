
import React, { useState, useEffect } from 'react';
import { Page, User, Transaction } from '../types';
import * as Icons from '../components/Icons';
import { db } from '../firebaseConfig';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

const RecordPage = ({ setPage, userData }: { setPage: (p: Page) => void, userData: User | null }) => {
    const [filter, setFilter] = useState<'ALL' | 'DEPOSIT' | 'WITHDRAW'>('ALL');
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userData) return;

        const q = query(
            collection(db, "transactions"),
            where("userId", "==", userData.uid)
        );

        // Fix: Cast snapshot to any to allow access to .docs (TS incorrectly infers DocumentSnapshot)
        const unsubscribe = onSnapshot(q, (snapshot: any) => {
            const txData = snapshot.docs.map((doc: any) => {
                const data = doc.data();
                
                // Handle Timestamp safely
                const dateObj = data.date && typeof data.date.toDate === 'function' 
                    ? data.date.toDate() 
                    : new Date();

                // --- AUTO REJECT LOGIC ---
                // If status is 'Pending', type is 'DEPOSIT', and time is > 5 minutes
                let displayStatus = data.status;
                const now = new Date();
                const diffInMinutes = (now.getTime() - dateObj.getTime()) / (1000 * 60);

                if (data.type === 'DEPOSIT' && data.status === 'Pending' && diffInMinutes > 5) {
                    displayStatus = 'Rejected';
                }

                return {
                    id: doc.id,
                    ...data,
                    status: displayStatus, // Use the calculated status
                    rawDate: dateObj,
                    date: dateObj.toLocaleString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        hour: 'numeric', 
                        minute: 'numeric', 
                        hour12: true 
                    })
                };
            });

            // SORTING: Newest first
            txData.sort((a: any, b: any) => b.rawDate - a.rawDate);

            setTransactions(txData as any[]);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [userData]);

    const filteredData = transactions.filter(item => {
        if (filter === 'ALL') return true;
        return item.type === filter;
    });

    return (
        <div className="pt-8 px-4 min-h-screen pb-24 font-['Hind_Siliguri'] bg-[#0B1221]">
            <div className="flex items-center gap-4 mb-6 mt-4">
                <button onClick={() => setPage(Page.PROFILE)} className="p-2 bg-slate-800 rounded-full text-slate-300 border border-white/5 hover:bg-slate-700 transition-colors">
                    <Icons.ArrowLeft className="w-5 h-5" />
                </button>
                <h1 className="text-xl font-bold text-white">লেনদেন ইতিহাস</h1>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6 p-1 bg-slate-900 rounded-xl border border-white/5">
                {['ALL', 'DEPOSIT', 'WITHDRAW'].map(f => (
                    <button 
                        key={f} 
                        onClick={() => setFilter(f as any)} 
                        className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                            filter === f 
                            ? 'bg-emerald-600 text-white shadow-lg' 
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                    >
                        {f === 'ALL' ? 'সব' : f === 'DEPOSIT' ? 'ডিপোজিট' : 'উত্তোলন'}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                    <Icons.Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
                    <p className="text-slate-500 text-xs mt-2 animate-pulse">লোড হচ্ছে...</p>
                </div>
            ) : filteredData.length > 0 ? (
                <div className="space-y-3 animate-slide-up">
                    {filteredData.map((item) => (
                        <div key={item.id} className="bg-slate-900/80 border border-white/5 p-4 rounded-xl flex items-center justify-between shadow-sm hover:border-emerald-500/20 transition-all">
                            <div className="flex items-center gap-3">
                                {/* ICON LOGIC */}
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-inner ${
                                    item.type === 'DEPOSIT' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
                                }`}>
                                    {item.type === 'DEPOSIT' ? <Icons.TrendingDown className="w-5 h-5" /> : <Icons.TrendingUp className="w-5 h-5" />}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">
                                        {item.type === 'DEPOSIT' ? 'ডিপোজিট' : 'উত্তোলন'} ({item.method})
                                    </p>
                                    <p className="text-slate-500 text-[10px] font-mono mt-0.5">{item.date}</p>
                                    {item.trxID && (
                                        <p className="text-slate-600 text-[10px] mt-0.5 bg-slate-800 px-1.5 py-0.5 rounded w-max border border-white/5">
                                            Trx: <span className="font-mono">{item.trxID}</span>
                                        </p>
                                    )}
                                    {item.number && (
                                         <p className="text-slate-600 text-[10px] mt-0.5">
                                            To: {item.number}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="text-right flex flex-col items-end gap-1">
                                <p className={`font-black text-lg ${item.type === 'DEPOSIT' ? 'text-emerald-400' : 'text-white'}`}>
                                    {item.type === 'DEPOSIT' ? '+' : '-'}${item.amount.toFixed(2)}
                                </p>
                                <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold border ${
                                    item.status === 'Success' 
                                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                        : item.status === 'Pending' 
                                            ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20 animate-pulse' 
                                            : 'bg-red-500/10 text-red-400 border-red-500/20'
                                }`}>
                                    {item.status === 'Success' ? 'সফল' : item.status === 'Pending' ? 'পেন্ডিং' : 'বাতিল'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-slate-500 space-y-3 opacity-60">
                    <Icons.History className="w-12 h-12 stroke-1" />
                    <p className="font-medium text-sm">কোন লেনদেন রেকর্ড নেই</p>
                </div>
            )}
        </div>
    );
};

export default RecordPage;
