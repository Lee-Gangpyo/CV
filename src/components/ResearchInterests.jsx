import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Database, FileText, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ResearchInterests = () => {
    const { language } = useLanguage();

    const mission = {
        en: "To improve the health and quality of life of injured workers through industrial medical rehabilitation research.",
        ko: "산재 의료재활 연구를 통해 산재환자들의 건강 및 삶의 질을 향상시킨다."
    };

    const interests = [
        {
            id: 'medicine',
            title: language === 'en' ? "Medicine" : "의학",
            icon: <Stethoscope size={32} />,
            items: language === 'en'
                ? ["Clinical Research", "Medical Rehabilitation Specialization", "Care Guidelines", "Clinical Research Competition"]
                : ["임상연구", "의료재활전문성강화(교육)", "요양가이드", "임상연구공모"],
            color: "text-purple-400"
        },
        {
            id: 'device',
            title: language === 'en' ? "Device" : "기구",
            icon: <Cpu size={32} />,
            items: language === 'en'
                ? ["Assistive Device Development", "Medical Device Clinical Trials", "Usability Evaluation", "Hospital Treatment Specialization"]
                : ["보조기구 개발지원", "의료기기 임상시험", "사용적합성 평가", "소속병원 진료 특성화"],
            color: "text-cyan-400"
        },
        {
            id: 'policy',
            title: language === 'en' ? "Policy" : "정책",
            icon: <FileText size={32} />,
            items: language === 'en'
                ? ["Hospital-centered Delivery System", "Rehabilitation System Improvement", "Care Benefit Support", "Operation Support"]
                : ["소속병원중심 산재의료", "재활 전달체계 개선", "소속병원 요양급여/요양", "급여 운영지원"],
            color: "text-blue-400"
        },
        {
            id: 'info',
            title: language === 'en' ? "Information" : "정보",
            icon: <Database size={32} />,
            items: language === 'en'
                ? ["Medical Rehabilitation Database", "Digital Healthcare TF", "Data-driven Analysis", "Smart Healthcare"]
                : ["의료재활 데이터베이스", "디지털헬스케어 TF", "데이터 기반 분석", "스마트 헬스케어"],
            color: "text-emerald-400"
        }
    ];

    return (
        <section id="interests" className="py-32 bg-primary relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Research Areas */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h3 className="text-3xl font-bold text-text-main font-serif mb-12 text-center">
                        {language === 'en' ? "Research Areas" : "연구 분야"}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {interests.map((item, index) => (
                            <motion.div
                                key={index}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                            >
                                <div className={`mb-6 ${item.color} bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>

                                <h4 className="text-xl font-bold text-text-main mb-6 border-b border-white/10 pb-4">
                                    {item.title}
                                </h4>

                                <ul className="space-y-3">
                                    {item.items.map((subItem, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-text-muted group-hover:text-gray-300 transition-colors">
                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${item.color.replace('text-', 'bg-')}`}></span>
                                            <span className="flex-1">{subItem}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                        MISSION
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold text-text-main font-serif leading-tight max-w-4xl mx-auto">
                        "{mission[language]}"
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default ResearchInterests;
