import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Publications = () => {
    const [showAll, setShowAll] = useState(false);
    const { language } = useLanguage();

    const selectedPubs = [
        {
            year: "2024",
            title: "Formative usability testing for modular powered wheelchair",
            journal: "Disabil Rehabil Assist Technol"
        },
        {
            year: "2024",
            title: "Customised joystick-making and training service...",
            journal: "Disabil Rehabil Assist Technol"
        },
        {
            year: "2023",
            title: "Frequency and Cost of Claims by Injury Type...",
            journal: "J Occup Environ Med"
        },
        {
            year: "2022",
            title: "Digital Healthcare Management System for Lower-Extremity Amputees",
            journal: "Healthcare"
        },
        {
            year: "2022",
            title: "Functional improvement by body-powered 3D-printed prosthesis...",
            journal: "Medicine"
        }
    ];

    const morePubs = [
        { year: "2024", title: "Strategies for Strengthening Expertise in Industrial Accident Rehabilitation", journal: "Seminar" },
        { year: "2023", title: "Vocational Rehab Program for Return to Work", journal: "KOTA Education" },
        { year: "2022", title: "Prescription and Inspection of Upper Limb Prostheses", journal: "KARM Conference" },
        { year: "2021", title: "Digital Rehabilitation in WCI hospital", journal: "UNIST Presentation" },
        { year: "2019", title: "Assistive technology in Workplace", journal: "KARM Fall Conference" }
    ];

    return (
        <section id="publications" className="py-32 bg-primary relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main font-serif mb-4">
                        {language === 'en' ? "Selected Publications" : "주요 논문"}
                    </h2>
                    <div className="w-20 h-1 bg-accent rounded-full"></div>
                </motion.div>

                <div className="space-y-4">
                    {selectedPubs.map((pub, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group flex gap-6 items-baseline p-6 rounded-xl hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                        >
                            <div className="flex-shrink-0 w-12 text-sm font-mono text-accent pt-1">{pub.year}</div>
                            <div>
                                <h3 className="text-lg font-medium text-text-main mb-1 group-hover:text-accent transition-colors">{pub.title}</h3>
                                <p className="text-text-muted text-sm italic">{pub.journal}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {showAll && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-4 mt-4 overflow-hidden"
                        >
                            {morePubs.map((pub, index) => (
                                <div
                                    key={`more-${index}`}
                                    className="flex gap-6 items-baseline p-6 rounded-xl hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 opacity-70"
                                >
                                    <div className="flex-shrink-0 w-12 text-sm font-mono text-gray-500 pt-1">{pub.year}</div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-300 mb-1">{pub.title}</h3>
                                        <p className="text-gray-500 text-sm italic">{pub.journal}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="text-center mt-12">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full text-text-main font-medium hover:bg-white/5 hover:text-accent transition-all duration-300 text-sm"
                    >
                        {showAll ? (
                            <>
                                {language === 'en' ? "Show Less" : "접기"} <ChevronUp size={16} />
                            </>
                        ) : (
                            <>
                                {language === 'en' ? "Load More" : "더 보기"} <ChevronDown size={16} />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Publications;
