import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { language } = useLanguage();

    return (
        <footer id="contact" className="py-20 bg-primary border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-text-main font-serif mb-12">
                    {language === 'en' ? "Contact" : "연락처"}
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-16 mb-16">
                    <a href="mailto:khagoyool@gmail.com" className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                            <Mail size={20} />
                        </div>
                        <span className="text-lg">khagoyool@gmail.com</span>
                    </a>

                    <div className="flex items-center gap-3 text-text-muted group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                            <Phone size={20} />
                        </div>
                        <span className="text-lg">032-500-0185</span>
                    </div>

                    <div className="w-full md:w-auto flex justify-center">
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Rehabilitation+Medicine+Research+Center+COMWEL+Incheon+Hospital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-text-muted group hover:text-accent transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                                <MapPin size={20} />
                            </div>
                            <span className="text-lg text-left">
                                {language === 'en' ? "Rehabilitation Medicine Research Center, COMWEL Incheon Hospital" : "근로복지공단 인천병원 재활의학연구센터"}
                            </span>
                        </a>
                    </div>
                </div>

                <div className="text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Lee Gangpyo. {language === 'en' ? "All rights reserved." : "판권 소유."}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
