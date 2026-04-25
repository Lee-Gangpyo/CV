import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            role: 'Rehabilitation Medicine Specialist',
            name: 'Lee Gangpyo',
            title1: 'Director, Rehabilitation Medicine Research Center',
            title2: 'COMWEL Incheon Hospital',
            ctaResearch: 'View Research',
            ctaContact: 'Contact Me',
            quote: '"Strong body and mind, high concept and high touch with resilient integrity, forever"'
        },
        ko: {
            role: '재활의학과 전문의',
            name: '이강표',
            title1: '근로복지공단 인천병원',
            title2: '재활의학연구센터장',
            ctaResearch: '연구 활동 보기',
            ctaContact: '연락하기',
            quote: '"강인한 신체와 정신, 높은 이상과 감성, 그리고 굳건한 성실함으로 영원히"'
        }
    };

    const t = content[language];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
            {/* Ambient Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "out" }}
                >
                    <h2 className="text-accent text-sm md:text-base font-bold tracking-[0.2em] mb-6 uppercase">
                        {t.role}
                    </h2>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-main mb-8 font-serif tracking-tight leading-tight">
                        {t.name}
                    </h1>

                    <p className="text-xl md:text-2xl text-text-muted mb-10 font-light max-w-3xl mx-auto leading-relaxed">
                        {t.title1} <br />
                        <span className="text-lg text-gray-500 mt-2 block">{t.title2}</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
                        <a
                            href="#network"
                            className="px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-accent-dark transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1 flex items-center gap-2"
                        >
                            {language === 'en' ? 'COMWEL Medical Institution Network' : '근로복지공단 의료기관 네트워크'} <ArrowRight size={20} />
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/5 text-text-main font-medium rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
                        >
                            {t.ctaContact} <Mail size={20} />
                        </a>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <p className="text-lg text-gray-400 italic font-serif border-l-2 border-accent/30 pl-6 text-left">
                            {t.quote}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
