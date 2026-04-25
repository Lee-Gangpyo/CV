import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Activity, Move, Brain, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { language } = useLanguage();

    const projects = [
        {
            title: language === 'en' ? "Electronic Hydraulic Transfemoral Prosthesis" : "전자 유압식 대퇴 의족",
            period: "2024.06 ~ 2028.12",
            agency: language === 'en' ? "Ministry of Health and Welfare" : "보건복지부",
            desc: language === 'en' ? "Development of One-stop Integrated Solution" : "원스톱 통합 솔루션 개발",
            icon: <Zap size={28} />
        },
        {
            title: language === 'en' ? "Intelligent Wheelchair for Upper Limb Disabled" : "상지 장애인을 위한 지능형 휠체어",
            period: "2020.09 ~ 2024.12",
            agency: language === 'en' ? "Ministry of Science and ICT" : "과학기술정보통신부",
            desc: language === 'en' ? "Manipulation Convenience Enhancement" : "조작 편의성 향상 기술 개발",
            icon: <Move size={28} />
        },
        {
            title: language === 'en' ? "Hybrid Drive Module for Transfemoral Amputees" : "대퇴 절단 장애인을 위한 하이브리드 구동 모듈",
            period: "2020.11 ~ 2022.12",
            agency: "",
            desc: language === 'en' ? "Development of advanced drive mechanisms" : "첨단 구동 메커니즘 개발",
            icon: <Cpu size={28} />
        },
        {
            title: language === 'en' ? "Self-directed Smart Healthcare System" : "자기 주도형 스마트 헬스케어 시스템",
            period: "2019.03 ~ 2020.12",
            agency: language === 'en' ? "Ministry of Science and ICT" : "과학기술정보통신부",
            desc: language === 'en' ? "For Amputees/Paralyzed Patients" : "절단 및 마비 환자를 위한 시스템",
            icon: <Activity size={28} />
        },
        {
            title: language === 'en' ? "AI-based Gait Analysis Solution" : "AI 기반 보행 분석 솔루션",
            period: "2021 ~ 2025",
            agency: language === 'en' ? "Collaboration (UNIST)" : "협력 연구 (UNIST)",
            desc: language === 'en' ? "Wearable Soft Sensor Functional Assessment" : "웨어러블 소프트 센서 기능 평가",
            icon: <Brain size={28} />
        }
    ];

    return (
        <section id="projects" className="py-32 bg-primary relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main font-serif mb-4">
                        {language === 'en' ? "Key Research Projects" : "주요 연구 과제"}
                    </h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
                    <p className="text-text-muted max-w-2xl text-lg">
                        {language === 'en' ? "Pioneering research in rehabilitation robotics, AI, and assistive technology." : "재활 로봇, AI, 보조 공학 분야의 선도적인 연구를 수행합니다."}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card rounded-xl p-8 group relative overflow-hidden flex flex-col h-full"
                        >
                            <div className="mb-6 text-accent bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                {project.icon}
                            </div>

                            <div className="flex-grow">
                                <div className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">{project.period}</div>
                                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-text-muted text-sm leading-relaxed mb-6">{project.desc}</p>
                            </div>

                            {project.agency && (
                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <span className="text-xs font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                                        {project.agency}
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
