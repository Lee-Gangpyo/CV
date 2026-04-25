import React from 'react';
import { motion } from 'framer-motion';
import { Award, Scroll } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Awards = () => {
    const { language } = useLanguage();

    const awards = [
        {
            year: "2021",
            title: language === 'en' ? "Creative Innovation Grand Prize" : "창의 혁신 대상",
            desc: language === 'en' ? "COMWEL QI Contest (Rehab tools using 3D printing)" : "근로복지공단 QI 경진대회 (3D 프린팅 재활 도구)"
        },
        {
            year: "2019",
            title: language === 'en' ? "Best Practice" : "우수 사례",
            desc: language === 'en' ? "Maker Culture Activation Business (Hanson Project 2019)" : "메이커 문화 활성화 사업 (한손 프로젝트 2019)"
        },
        {
            year: "2017",
            title: language === 'en' ? "Commendation" : "표창",
            desc: language === 'en' ? "Minister of Employment and Labor" : "고용노동부 장관"
        },
        {
            year: "2015",
            title: language === 'en' ? "Creative Innovation Grand Prize" : "창의 혁신 대상",
            desc: language === 'en' ? "COMWEL QI Contest" : "근로복지공단 QI 경진대회"
        }
    ];

    return (
        <section id="awards" className="py-32 bg-primary relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main font-serif mb-4">
                        {language === 'en' ? "Honors & Patents" : "수상 및 특허"}
                    </h2>
                    <div className="w-20 h-1 bg-accent rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card rounded-xl p-8 text-center hover:-translate-y-1 transition-transform duration-300"
                        >
                            <Award className="text-accent mx-auto mb-6" size={32} />
                            <div className="text-2xl font-bold text-text-main mb-2 font-serif">{award.year}</div>
                            <h3 className="text-base font-medium text-text-muted mb-4">{award.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{award.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Patents */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8 border border-white/5 bg-gradient-to-r from-white/5 to-transparent"
                >
                    <div className="bg-primary p-4 rounded-full border border-white/10">
                        <Scroll className="text-accent" size={32} />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-text-main mb-2">
                            {language === 'en' ? "Patents" : "특허"}
                        </h3>
                        <h4 className="text-lg text-text-muted mb-1">
                            {language === 'en' ? "Wearable vibratory stimulation device and operational method thereof" : "웨어러블 진동 자극 장치 및 그 작동 방법"}
                        </h4>
                        <p className="text-accent font-mono text-sm">US Patent 2018/0140503 A1</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Awards;
