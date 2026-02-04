import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import * as Icons from './Icons';

interface AIChatBotProps {
    setPage: (p: Page) => void;
}

const AIChatBot = ({ setPage }: AIChatBotProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [messages, setMessages] = useState<{text: string, isUser: boolean, action?: string}[]>([
        { text: "আসসালামু আলাইকুম স্যার! আমি সুপার বিডি (Super BD) এর স্পেশাল এজেন্ট। কিসে সাহায্য করতে পারি?", isUser: false }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isFullScreen]);

    // --- SMART BRAIN LOGIC ---

    const getBotResponse = (input: string): { text: string, action?: string } => {
        const text = input.toLowerCase().trim();

        // 1. PAYMENT PROBLEMS (CRITICAL)
        if (text.match(/(tk|taka|money|dollar|amount|balance) (add|joma|aseni|paini|paini|atke|kete|problem|nai)/) ||
            text.match(/(withdraw|cashout|uttolon) (paini|dicche na|cancel|reject|pending)/)) {
            const responses = [
                "স্যার, সার্ভার জ্যামের কারণে মাঝে মাঝে ৫-১০ মিনিট দেরি হতে পারে। টেনশন করবেন না, আপনার টাকা ১০০% নিরাপদ। সাপোর্টে মেসেজ দিন।",
                "পেমেন্ট নিয়ে চিন্তা করবেন না। আমাদের সিস্টেমে সব রেকর্ড থাকে। আপনি দয়া করে সাপোর্টে যোগাযোগ করুন, এখনই ঠিক করে দিবে।",
                "স্যার, মাঝে মাঝে গেটওয়ে স্লো থাকে। আপনি কি সাপোর্টে কথা বলেছেন? আমি লিংক দিচ্ছি।"
            ];
            return { text: getRandom(responses), action: "SUPPORT" };
        }

        // 2. TRUST ISSUES / SCAM ACCUSATIONS (Handle Anger Smartly)
        if (text.match(/(chor|scam|butpar|batpar|vua|fake|chater|bal|sal|soytan|kharap|cheat|dhoka)/)) {
            const responses = [
                "স্যার, রাগ করবেন না। আমরা যদি চোর হতাম তবে এত বড় সিস্টেম বানাতাম না। মাত্র ৫ ডলার দিয়ে চেক করে দেখুন, তারপর বিশ্বাস করবেন।",
                "না জেনে গালি দিবেন না স্যার। আমরা সততার সাথে ব্যবসা করছি। পেমেন্ট না পেলে তখন বলবেন।",
                "আপনার সন্দেহ হওয়া স্বাভাবিক। কিন্তু সুপার বিডি মানুষের বিশ্বাস নিয়ে খেলে না। ছোট একটা অ্যামাউন্ট ডিপোজিট করে টেস্ট করুন।",
                "স্যার, খারাপ ব্যবহার করবেন না প্লিজ। আমরা এখানে আপনাকে সার্ভিস দিতে এসেছি, ধোকা দিতে নয়।"
            ];
            return { text: getRandom(responses), action: "DEPOSIT_NAV" };
        }

        // 3. LONGEVITY (Kobe jabe/palabe)
        if (text.match(/(kobe|koydin|koto din) (jabe|palabe|thakbe|bondho|of|off|thakben)/) || 
            text.match(/(side|site|app) (chole|ure|bhagbe) (jabe|naki)/)) {
            const responses = [
                "স্যার, সোজা কথা বলি—আমরা ২ দিনের জন্য আসিনি। আমাদের লক্ষ্য দীর্ঘমেয়াদী ব্যবসা। নিশ্চিন্তে কাজ করুন।",
                "আমরা পালাবো কেন স্যার? আমাদের হাজার হাজার ইউজার। যতদিন আপনারা আছেন, আমরাও আছি।",
                "এসব গুজব কানে দেবেন না। সুপার বিডি (Super BD) মার্কেটে রাজত্ব করতে এসেছে। আজই কাজ শুরু করুন।",
                "গ্যারান্টি দিচ্ছি স্যার, আমরা আছি। প্রফিট করার এখনই সময়, সুযোগ হাতছাড়া করবেন না।"
            ];
            return { text: getRandom(responses) };
        }

        // 4. FLIRTING / WEIRD STUFF (Human-like rejection)
        if (text.match(/(biye|sadi|prem|love|kiss|ummah|bf|gf|bou|mey|chele|sex|nude|hot)/)) {
            const responses = [
                "স্যার, আমি তো সফটওয়্যার, আমার সাথে প্রেম করে কি করবেন? তার চেয়ে ডলারের সাথে প্রেম করুন, পকেটে টাকা আসবে! 😂",
                "লজ্জা দিচ্ছেন স্যার! 🙈 আসুন কাজের কথা বলি। আজকে কি ইনকাম করলেন?",
                "আমার কিন্তু বয়ফ্রেন্ড আছে... তার নাম 'USDT'। আপনার কাছে কত USDT আছে? 😉",
                "ওসব বাদ দিন বস। বড়লোক হতে চাইলে সুপার বিডিতে মন দিন।"
            ];
            return { text: getRandom(responses) };
        }

        // 5. DEPOSIT QUERY
        if (text.match(/(deposit|add|vorbo|dhukabo|kinbo|buy) (kivabe|niom|korbo|money|tk|dollar)/)) {
            const responses = [
                "ডিপোজিট করা পানির মতো সহজ! 'Deposit' বাটনে যান, বিকাশ/নগদ নাম্বার পাবেন। টাকা পাঠিয়ে TrxID বসালেই ডলার অ্যাড হয়ে যাবে।",
                "নিচে 'Deposit' অপশনে ক্লিক করুন। মিনিমাম ৪ ডলার ডিপোজিট করতে পারবেন। এখনই শুরু করুন!",
                "বিকাশ বা নগদে সেন্ড মানি করে খুব সহজেই ডলার কিনতে পারবেন। আমি কি আপনাকে ডিপোজিট পেজে নিয়ে যাবো?"
            ];
            return { text: getRandom(responses), action: "DEPOSIT_NAV" };
        }

        // 6. WITHDRAW QUERY
        if (text.match(/(withdraw|tulbo|uthabo|ber|cash|out|kivabe) (korbo|pabo|kobe|tk|taka)/)) {
            const responses = [
                "উইথড্র দিলেই টাকা! আমাদের পেমেন্ট সিস্টেম সুপার ফাস্ট। ৫-১০ মিনিটে পেমেন্ট পাবেন।",
                "আপনার ব্যালেন্স ৫ ডলার হলেই উইথড্র করতে পারবেন। ২৪ ঘণ্টাই পেমেন্ট খোলা থাকে।",
                "টাকা তোলা নিয়ে টেনশন নাই। উইথড্র অপশনে গিয়ে নাম্বার দিন, টাকা চলে যাবে।"
            ];
            return { text: getRandom(responses) };
        }

        // 7. EARNING / HOW IT WORKS
        if (text.match(/(kaj|work|income|lav|profit|kivabe|ki|korbo)/)) {
            const responses = [
                "কাজ সিম্পল—কম দামে ডলার কিনে রেট বাড়লে বিক্রি করবেন। অথবা অফার নিয়ে বোনাস ইনকাম করবেন।",
                "এখানে লস করার সুযোগ কম। শুধু মার্কেটের দিকে নজর রাখুন আর ট্রেড করুন।",
                "আপনি শুধু ডিপোজিট করে হোল্ড করলেও লাভ! ডলারের রেট সবসময় বাড়ে। বিস্তারিত জানতে অফারগুলো দেখুন।"
            ];
            return { text: getRandom(responses), action: "OFFERS_NAV" };
        }

        // 8. IDENTITY (Who are you)
        if (text.match(/(ke|k|tumi|apni|name|identity|robot|manush|human)/)) {
            const responses = [
                "আমি সুপার বিডির স্মার্ট অ্যাসিস্ট্যান্ট। আমি রোবট হলেও মানুষের মতোই সব বুঝি! 😉",
                "আমি আপনার পার্সোনাল ফিন্যান্সিয়াল অ্যাডভাইজার। আপনাকে ধনী বানানোই আমার কাজ।",
                "আমার নাম নেই, কিন্তু কাজ অনেক! আপনার যেকোনো সমস্যায় আমি আছি।"
            ];
            return { text: getRandom(responses) };
        }

        // 9. GREETINGS
        if (text.match(/(hi|hello|salam|hey|oi|sun|shon|kemon|valo|achen|bhai|bro|sir|boss)/)) {
            const responses = [
                "জি স্যার, আমি আছি। বলুন কিভাবে সাহায্য করতে পারি?",
                "আসসালামু আলাইকুম! সুপার বিডিতে আপনাকে স্বাগতম।",
                "আলহামদুলিল্লাহ আমি ভালো আছি। আপনার ট্রেডিং কেমন চলছে?",
                "হ্যালো বস! আজকে কি কোনো ডিপোজিট করেছেন? মার্কেটে কিন্তু আগুন অফার চলছে!"
            ];
            return { text: getRandom(responses) };
        }

        // 10. AFFIRMATION (Yes/No/Ok)
        if (text.match(/(ok|thik|accha|bujsi|humm|hm|hmm|ho|ha|ji|thanks|dhonnobad|good)/)) {
            const responses = [
                "ধন্যবাদ স্যার! আমাদের সাথেই থাকুন।",
                "ঠিক আছে বস। কোনো সমস্যা হলে জানাবেন।",
                "শুভ কামনা আপনার জন্য! বেশি বেশি প্রফিট করুন।",
                "ওকে বস! তাহলে আর দেরি কেন? এখনই একটা ডিপোজিট করে ফেলুন!"
            ];
            return { text: getRandom(responses) };
        }

        // FALLBACK (If nothing matches) - Sales oriented fallback
        const fallbacks = [
            "আপনার কথাটা ঠিক বুঝলাম না স্যার। তবে মনে হচ্ছে আপনি ইনকাম করতে আগ্রহী। আমাদের অফারগুলো দেখেছেন?",
            "স্যার, একটু বুঝিয়ে বলবেন? আমি আপনার সমস্যা সমাধান করতে চাই। অথবা আপনি সরাসরি ডিপোজিট করে কাজ শুরু করতে পারেন।",
            "বিষয়টা ক্লিয়ার না। আপনি কি টাকা জমানো নিয়ে কিছু বলছেন? সুপার বিডি কিন্তু সেরা রেট দিচ্ছে!",
            "আপনার কথাটি ইন্টারেস্টিং! তবে সময়ের চেয়ে টাকার মূল্য বেশি। আসুন ইনভেস্টমেন্ট নিয়ে কথা বলি।",
            "বুঝতে পারলাম না বস। আপনি কি সাপোর্টে কথা বলতে চান?"
        ];
        return { text: getRandom(fallbacks), action: Math.random() > 0.7 ? "OFFERS_NAV" : undefined };
    };

    const getRandom = (arr: string[]) => {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg = inputValue;
        setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
        setInputValue("");
        setIsTyping(true);

        // Random delay for realism (1s to 2s)
        const delay = Math.floor(Math.random() * 1000) + 1000;
        
        setTimeout(() => {
            const response = getBotResponse(userMsg);
            setMessages(prev => [...prev, { text: response.text, isUser: false, action: response.action }]);
            setIsTyping(false);
        }, delay);
    };

    const handleAction = (action: string) => {
        if (action === 'SUPPORT') {
            setPage(Page.SUPPORT);
        } else if (action === 'OFFERS_NAV') {
            setPage(Page.OFFERS);
        } else if (action === 'DEPOSIT_NAV') {
            setPage(Page.DEPOSIT);
        }
        
        if (isFullScreen) setIsFullScreen(false);
        setIsOpen(false);
    };

    return (
        <>
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)} 
                    className="fixed bottom-24 right-4 z-50 group"
                >
                    <div className="absolute inset-0 bg-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 hover:scale-105 transition-transform overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <div className="flex flex-col items-center justify-center gap-1 z-10">
                            <div className="flex gap-1.5">
                                <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-3 bg-white rounded-full animate-bounce delay-100"></div>
                            </div>
                            <div className="w-6 h-0.5 bg-white/80 rounded-full mt-1"></div>
                        </div>
                    </div>
                </button>
            )}

            {isOpen && (
                <div className={`fixed z-[60] bg-[#0F1729] border border-slate-700 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
                    isFullScreen 
                    ? "inset-0 rounded-none w-full h-full" 
                    : "bottom-24 right-4 w-80 h-[500px] rounded-2xl animate-slide-up"
                }`}>
                    {/* Header */}
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-4 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                                <Icons.Bot className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">Super BD Agent</h3>
                                <p className="text-[10px] text-slate-200 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Active Now
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button 
                                onClick={() => setIsFullScreen(!isFullScreen)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                            >
                                {isFullScreen ? <Icons.Minimize className="w-4 h-4" /> : <Icons.Maximize className="w-4 h-4" />}
                            </button>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-red-500/20 hover:text-red-200 rounded-full transition-colors text-white"
                            >
                                <Icons.X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-900/50 scrollbar-hide">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex flex-col ${msg.isUser ? 'items-end' : 'items-start'}`}>
                                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                    msg.isUser 
                                    ? 'bg-blue-600 text-white rounded-br-none' 
                                    : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-none'
                                }`}>
                                    {msg.text}
                                </div>
                                {msg.action && (
                                    <button 
                                        onClick={() => handleAction(msg.action!)}
                                        className="mt-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold py-2.5 px-5 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 animate-pulse-slow"
                                    >
                                        {msg.action === 'SUPPORT' && <><Icons.Headphones className="w-4 h-4" /> সাপোর্ট টিমে যোগাযোগ করুন</>}
                                        {msg.action === 'OFFERS_NAV' && <><Icons.Gift className="w-4 h-4" /> অফার দেখুন</>}
                                        {msg.action === 'DEPOSIT_NAV' && <><Icons.Wallet className="w-4 h-4" /> ডিপোজিট করুন</>}
                                    </button>
                                )}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none flex gap-1.5 border border-slate-700">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-[#0B1221] border-t border-slate-700 flex gap-2 shrink-0">
                        <input 
                            type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="এখানে লিখুন..." 
                            className="flex-1 bg-slate-800 text-white text-sm rounded-full px-5 py-3 outline-none border border-slate-700 focus:border-cyan-500 transition-colors"
                        />
                        <button 
                            onClick={handleSend}
                            className="w-11 h-11 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all"
                        >
                            <Icons.Send className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIChatBot;