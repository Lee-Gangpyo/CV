import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
    const { language } = useLanguage();

    const experiences = [
        {
            title: language === 'en' ? "Chief Research Officer" : "센터장",
            org: language === 'en' ? "Rehabilitation Medicine Research Center, COMWEL Incheon Hospital" : "근로복지공단 인천병원 재활의학연구센터",
            period: "2020.03 ~ Present",
            desc: language === 'en' ? "Leading the Rehabilitation Medicine Research Center and providing specialized care." : "재활의학연구센터를 이끌며 전문적인 진료와 연구를 수행하고 있습니다."
        },
        {
            title: language === 'en' ? "Physical medicine and rehabilitation clinician" : "센터장",
            org: language === 'en' ? "Rehabilitation Specialty Center, COMWEL Incheon Hospital" : "근로복지공단 인천병원 재활전문센터",
            period: "2024.09 ~ Present",
            desc: ""
        },
        {
            title: language === 'en' ? "Adjunct Professor" : "겸임교수",
            org: language === 'en' ? "Seoul National University College of Medicine" : "서울대학교 의과대학",
            period: "2025.09 ~ Present",
            desc: language === 'en' ? "Teaching and research in rehabilitation medicine." : "재활의학 분야의 교육 및 연구 수행."
        },
        {
            title: language === 'en' ? "Physical medicine and rehabilitation clinician" : "센터장",
            org: language === 'en' ? "Rehabilitation Specialty Center, COMWEL Incheon Hospital" : "근로복지공단 인천병원 재활전문센터",
            period: "2015.03 ~ 2023.03",
            desc: ""
        },
        {
            title: language === 'en' ? "Education Committee Member" : "교육위원",
            org: language === 'en' ? "Korean Academy of Rehabilitation Medicine" : "대한재활의학회",
            period: "2020.11 ~ 2022.12",
            desc: ""
        }
    ];

    return (
        <section id="experience" className="py-32 bg-primary relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main font-serif mb-4">
                        {language === 'en' ? "Professional Experience" : "경력"}
                    </h2>
                    <div className="w-20 h-1 bg-accent rounded-full"></div>
                </motion.div>

                <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

                            <div className="glass-card rounded-xl p-6 md:p-8 hover:bg-white/5 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                                    <h3 className="text-xl font-bold text-text-main">{exp.title}</h3>
                                    <span className="text-sm font-mono text-accent">{exp.period}</span>
                                </div>
                                <h4 className="text-lg text-text-muted mb-4">{exp.org}</h4>
                                {exp.desc && <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
