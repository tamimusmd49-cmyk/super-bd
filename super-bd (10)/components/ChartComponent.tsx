
import React, { useRef, useState, useEffect, memo } from 'react';
import { MarketState } from '../types';

// _p = prices, _c = currentPrice, _s = state
const ChartComponent = memo(({ prices: _p, currentPrice: _c, marketState: _s }: { prices: number[], currentPrice: number, marketState: MarketState }) => {
    const _ref = useRef<SVGSVGElement>(null);
    const [_w, _sw] = useState(300);
    const _h = 140; 
    
    useEffect(() => {
        let _t: any;
        const _rs = () => {
            if (_ref.current?.parentElement) {
                _sw(_ref.current.parentElement.getBoundingClientRect().width);
            }
        };
        const _hdl = () => { clearTimeout(_t); _t = setTimeout(_rs, 100); };
        _rs();
        window.addEventListener('resize', _hdl);
        return () => window.removeEventListener('resize', _hdl);
    }, []);

    if (!_p || _p.length === 0) return null;

    // Mathematical Obfuscation
    const _mn = Math.min(..._p) - 0.1;
    const _mx = Math.max(..._p) + 0.1;
    const _rng = _mx - _mn || 1;
    
    // Y-Axis Calculation (Compressed)
    const _gy = (v: number) => (_h - 20) - (((v - _mn) / _rng) * (_h - 40));

    // Points Generation
    const _pts = _p.map((v, i) => `${(i / (_p.length - 1)) * _w},${_gy(v)}`).join(' ');
    const _apt = `0,${_h} ${_pts} ${_w},${_h}`;
    const _cy = _gy(_c);

    // Trend Logic: _u = isUp
    const _u = _p.length >= 2 ? _p[_p.length - 1] >= _p[_p.length - 2] : true;
    const _clr = _u ? '#10b981' : '#ef4444'; // Green or Red Hex

    return (
        <div className="relative w-full h-[140px] overflow-hidden">
            <svg
                ref={_ref}
                width="100%"
                height="100%"
                viewBox={`0 0 ${_w} ${_h}`}
                preserveAspectRatio="none"
                className="w-full h-full"
                style={{ overflow: 'visible' }}
            >
                <defs>
                    <linearGradient id="_g" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={_clr} stopOpacity={0.4} />
                        <stop offset="100%" stopColor={_clr} stopOpacity={0.0} />
                    </linearGradient>
                </defs>
                <polygon 
                    points={_apt} 
                    fill="url(#_g)" 
                    className="transition-all duration-300 ease-linear"
                />
                <polyline 
                    points={_pts} 
                    fill="none" 
                    stroke={_clr} 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="transition-all duration-300 ease-linear"
                />
                <circle 
                    cx={_w} 
                    cy={_cy} 
                    r="4" 
                    fill={_clr} 
                    stroke="#0B1221" 
                    strokeWidth="2" 
                    className="transition-all duration-300 ease-linear"
                />
            </svg>
             <div 
                className="absolute right-0 h-[1px] w-full pointer-events-none" 
                style={{ 
                    top: `${_cy}px`, 
                    background: `linear-gradient(90deg, transparent, ${_clr})`, 
                    transition: 'top 0.3s linear' 
                }} 
            />
        </div>
    );
});

export default ChartComponent;
