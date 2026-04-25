import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, TrendingUp, Share2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Philosophy = () => {
    const { language } = useLanguage();

    const dna = [
        {
            id: 'A',
            letter: 'A',
            word: 'utonomy',
            phrase: 'to Integrity',
            desc: language === 'en' ? 'Reliable work promotion through autonomous participation' : '자율적인 참여를 통한 믿음직한 업무추진',
            icon: <UserCheck size={32} />,
            color: 'from-blue-400 to-blue-600'
        },
        {
            id: 'G',
            letter: 'G',
            word: 'rowth',
            phrase: 'to Excellence',
            desc: language === 'en' ? 'Strengthening professionalism through individual and departmental growth' : '개인과 부서의 성장을 통한 전문성 강화',
            icon: <TrendingUp size={32} />,
            color: 'from-green-400 to-green-600'
        },
        {
            id: 'C',
            letter: 'C',
            word: 'onnectivity',
            phrase: 'to Collaboration',
            desc: language === 'en' ? 'Building various cooperative relationships based on smooth communication' : '구성원간 원활한 의사소통을 토대로 다양한 협력관계 구축',
            icon: <Share2 size={32} />,
            color: 'from-purple-400 to-purple-600'
        },
        {
            id: 'T',
            letter: 'T',
            word: 'enacity',
            phrase: 'to Resilience',
            desc: language === 'en' ? 'Acquiring resilience based on steady efforts' : '꾸준한 노력을 토대로 회복탄력성 획득',
            icon: <ShieldCheck size={32} />,
            color: 'from-orange-400 to-orange-600'
        }
    ];

    return (
        <section id="philosophy" className="py-24 bg-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main font-serif mb-4">
                        {language === 'en' ? "Clinical Philosophy (DNA)" : "진료 철학 (DNA)"}
                    </h2>
                    <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
                    <p className="text-text-muted max-w-2xl mx-auto text-lg">
                        {language === 'en'
                            ? "Our core values that drive medical excellence and patient care."
                            : "연구 목표와 더불어, 환자 진료에 임하는 우리의 핵심 가치이자 철학입니다."}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {dna.map((item, index) => (
                        <motion.div
                            key={item.id}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card rounded-2xl p-8 border border-white/5 hover:border-accent/30 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Background Gradient Blob */}
                            <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${item.color} opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity duration-500`}></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-baseline">
                                        <span className={`text-6xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent mr-1`}>
                                            {item.letter}
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-bold text-text-main">{item.word}</span>
                                            <span className="text-sm text-text-muted uppercase tracking-wider">{item.phrase}</span>
                                        </div>
                                    </div>
                                    <div className={`p-3 rounded-xl bg-white/5 text-white/80 group-hover:text-white group-hover:bg-white/10 transition-colors`}>
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
