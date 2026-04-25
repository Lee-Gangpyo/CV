import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Stethoscope, HeartPulse, Clock, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Network = () => {
    const { language } = useLanguage();
    const [activeRegion, setActiveRegion] = useState(null);

    // Hospital data with map coordinates (percentages)
    // Names simplified to City/Location only
    const hospitals = [
        // Metropolitan (Incheon, Seoul, Gyeonggi)
        { id: 'incheon', name: language === 'en' ? 'Incheon' : '인천', type: 'hospital', x: 28, y: 22, region: 'metro' },
        { id: 'seoul', name: language === 'en' ? 'Seoul' : '서울', type: 'clinic', x: 32, y: 18, region: 'metro' },
        { id: 'ansan', name: language === 'en' ? 'Ansan' : '안산', type: 'hospital', x: 30, y: 26, region: 'metro' },
        { id: 'gyeonggi_care', name: language === 'en' ? 'Gyeonggi' : '경기', type: 'care', x: 34, y: 24, region: 'metro' },
        { id: 'gyeonggi_nursing', name: language === 'en' ? 'Gyeonggi' : '경기', type: 'nursing', x: 36, y: 28, region: 'metro' },

        // Gangwon
        { id: 'taebaek', name: language === 'en' ? 'Taebaek' : '태백', type: 'hospital', x: 72, y: 32, region: 'gangwon' },
        { id: 'donghae', name: language === 'en' ? 'Donghae' : '동해', type: 'hospital', x: 78, y: 28, region: 'gangwon' },
        { id: 'jeongseon', name: language === 'en' ? 'Jeongseon' : '정선', type: 'hospital', x: 68, y: 25, region: 'gangwon' },
        { id: 'taebaek_care', name: language === 'en' ? 'Taebaek' : '태백', type: 'care', x: 74, y: 36, region: 'gangwon' },
        { id: 'taebaek_nursing', name: language === 'en' ? 'Taebaek' : '태백', type: 'nursing', x: 72, y: 38, region: 'gangwon' },

        // Chungcheong
        { id: 'daejeon', name: language === 'en' ? 'Daejeon' : '대전', type: 'hospital', x: 40, y: 45, region: 'chungcheong' },

        // Jeolla
        { id: 'gwangju', name: language === 'en' ? 'Gwangju' : '광주', type: 'clinic', x: 30, y: 65, region: 'jeolla' },
        { id: 'suncheon', name: language === 'en' ? 'Suncheon' : '순천', type: 'hospital', x: 35, y: 75, region: 'jeolla' },

        // Gyeongsang
        { id: 'daegu', name: language === 'en' ? 'Daegu' : '대구', type: 'hospital', x: 65, y: 55, region: 'gyeongsang' },
        { id: 'gumi', name: language === 'en' ? 'Gumi' : '구미', type: 'clinic', x: 62, y: 50, region: 'gyeongsang' },
        { id: 'ulsan', name: language === 'en' ? 'Ulsan' : '울산', type: 'future', x: 78, y: 65, region: 'gyeongsang' },
        { id: 'changwon', name: language === 'en' ? 'Changwon' : '창원', type: 'hospital', x: 62, y: 70, region: 'gyeongsang' },
        { id: 'busan', name: language === 'en' ? 'Busan' : '부산', type: 'clinic', x: 72, y: 74, region: 'gyeongsang' },
    ];

    const regionsLeft = [
        { id: 'metro', name: language === 'en' ? 'Metropolitan' : '수도권' },
        { id: 'chungcheong', name: language === 'en' ? 'Chungcheong' : '충청권' },
        { id: 'jeolla', name: language === 'en' ? 'Jeolla' : '호남권' },
    ];

    const regionsRight = [
        { id: 'gangwon', name: language === 'en' ? 'Gangwon' : '강원권' },
        { id: 'gyeongsang', name: language === 'en' ? 'Gyeongsang' : '영남권' },
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'hospital': return <Building2 size={16} />;
            case 'clinic': return <Stethoscope size={16} />;
            case 'care': return <Activity size={16} />;
            case 'nursing': return <HeartPulse size={16} />;
            case 'future': return <Clock size={16} />;
            default: return <MapPin size={16} />;
        }
    };

    const getTypeStyle = (type) => {
        switch (type) {
            case 'hospital': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50';
            case 'clinic': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
            case 'care': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
            case 'nursing': return 'bg-pink-500/20 text-pink-400 border-pink-500/50';
            case 'future': return 'bg-gray-500/20 text-gray-400 border-gray-500/50 border-dashed';
            default: return 'bg-white/10 text-white border-white/20';
        }
    };

    const getTypeLabel = (type) => {
        if (language === 'en') {
            switch (type) {
                case 'hospital': return 'Hospital';
                case 'clinic': return 'Clinic';
                case 'care': return 'Care Center';
                case 'nursing': return 'Nursing Hospital';
                case 'future': return 'Planned';
                default: return '';
            }
        } else {
            switch (type) {
                case 'hospital': return '병원';
                case 'clinic': return '의원';
                case 'care': return '케어센터';
                case 'nursing': return '요양병원';
                case 'future': return '개원예정';
                default: return '';
            }
        }
    };

    const RegionList = ({ regions }) => (
        <div className="space-y-8">
            {regions.map((region) => (
                <motion.div
                    key={region.id}
                    className={`glass-card rounded-xl p-5 border transition-all duration-300 ${activeRegion === region.id ? 'border-accent bg-white/5' : 'border-white/5 hover:border-white/10'}`}
                    onMouseEnter={() => setActiveRegion(region.id)}
                    onMouseLeave={() => setActiveRegion(null)}
                >
                    <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                        <div className={`w-2 h-2 rounded-full ${activeRegion === region.id ? 'bg-accent' : 'bg-gray-500'}`}></div>
                        {region.name}
                    </h3>
                    <div className="flex flex-col gap-2">
                        {hospitals.filter(h => h.region === region.id).map((hospital, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center justify-between p-2 rounded-lg border ${getTypeStyle(hospital.type)} transition-colors relative z-10 w-full`}
                                onMouseEnter={() => setActiveRegion(hospital.region)}
                            >
                                <div className="flex items-center gap-2 flex-shrink-0">
                                    {getIcon(hospital.type)}
                                    <span className="text-sm font-medium">{hospital.name}</span>
                                </div>
                                <span className="text-[10px] opacity-70 uppercase tracking-wider ml-auto text-right pl-2">
                                    {getTypeLabel(hospital.type)}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );

    return (
        <section id="network" className="py-20 bg-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main font-serif mb-4">
                        {language === 'en' ? 'COMWEL Medical Institution Network' : '근로복지공단 의료기관 네트워크'}
                    </h2>
                    <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
                </motion.div>

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Metro, Chungcheong, Jeolla */}
                    <div className="lg:col-span-3 order-2 lg:order-1 relative z-30">
                        <RegionList regions={regionsLeft} />
                    </div>

                    {/* Center Column: Map */}
                    <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[4/5] md:aspect-video lg:aspect-[3/4] bg-[#0F172A] rounded-3xl border border-white/5 overflow-hidden shadow-2xl group/map z-10">
                        {/* Map Background Image */}
                        <img
                            src="/assets/korea_map_geo_v2.png"
                            alt="Map of South Korea"
                            className="absolute inset-0 w-full h-full object-contain opacity-90"
                        />

                        {/* Map Markers */}
                        {hospitals.filter(h => h.x && h.y).map((hospital, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
                                style={{ left: `${hospital.x}%`, top: `${hospital.y}%` }}
                                onMouseEnter={() => setActiveRegion(hospital.region)}
                                onMouseLeave={() => setActiveRegion(null)}
                            >
                                {/* Bright Glowing Dot */}
                                <div className="relative group cursor-pointer">
                                    <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse`}></div>
                                    <div className={`absolute inset-0 rounded-full bg-white opacity-50 animate-ping`}></div>

                                    {/* Tooltip on Hover */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                        <div className="bg-black/90 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg text-xs text-white font-medium flex items-center gap-2 shadow-xl">
                                            {getIcon(hospital.type)}
                                            {hospital.name}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Gangwon, Gyeongsang */}
                    <div className="lg:col-span-3 order-3 lg:order-3 relative z-30">
                        <RegionList regions={regionsRight} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Network;
