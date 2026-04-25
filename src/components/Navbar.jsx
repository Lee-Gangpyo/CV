import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, QrCode } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showQR, setShowQR] = useState(false);
    const { language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: language === 'en' ? 'Home' : '홈', href: '#home' },
        { name: language === 'en' ? 'About' : '소개', href: '#about' },
        { name: language === 'en' ? 'Network' : '네트워크', href: '#network' },
        { name: language === 'en' ? 'Interests' : '관심분야', href: '#interests' },
        { name: language === 'en' ? 'Experience' : '경력', href: '#experience' },
        { name: language === 'en' ? 'Projects' : '연구', href: '#projects' },
        { name: language === 'en' ? 'Publications' : '논문', href: '#publications' },
        { name: language === 'en' ? 'Awards' : '수상', href: '#awards' },
        { name: language === 'en' ? 'Contact' : '연락처', href: '#contact' },
    ];

    const currentUrl = window.location.href;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;

    return (
        <>
            <nav
                className={`fixed w-full z-[2000] transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold font-serif text-text-main relative z-[2002]">
                        {language === 'en' ? 'Lee Gangpyo' : '이강표'}
                    </a>

                    <div className="flex items-center gap-4">
                        {/* Desktop Menu Links */}
                        <div className="hidden xl:flex items-center gap-8 mr-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-text-muted hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Always Visible Utilities */}
                        <div className="flex items-center gap-3 pl-4 border-l border-white/10 relative z-[2002]">
                            <button
                                onClick={() => setShowQR(!showQR)}
                                className="p-2 rounded-full hover:bg-white/5 text-text-muted hover:text-accent transition-colors"
                                title="Mobile QR Code"
                            >
                                <QrCode size={20} />
                            </button>

                            {/* Clearer Language Toggle */}
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 hover:border-accent/50 text-xs font-medium transition-all bg-white/5"
                            >
                                <Globe size={14} className="text-text-muted mr-1" />
                                <span className={`${language === 'en' ? 'text-accent font-bold' : 'text-text-muted'}`}>EN</span>
                                <span className="text-white/20">|</span>
                                <span className={`${language === 'ko' ? 'text-accent font-bold' : 'text-text-muted'}`}>KO</span>
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="xl:hidden p-2 text-text-main hover:text-accent transition-colors"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Full Screen Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1999] bg-primary/98 backdrop-blur-xl flex flex-col items-center justify-center xl:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-medium !text-white !opacity-100 hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* QR Code Modal */}
            <AnimatePresence>
                {showQR && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                        onClick={() => setShowQR(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-primary border border-white/10 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowQR(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white"
                            >
                                <X size={20} />
                            </button>

                            <h3 className="text-xl font-bold text-text-main mb-2">
                                {language === 'en' ? 'View on Mobile' : '모바일에서 보기'}
                            </h3>
                            <p className="text-sm text-text-muted mb-6">
                                {language === 'en' ? 'Scan to view on your device' : '휴대폰으로 스캔하여 확인하세요'}
                            </p>

                            <div className="bg-white p-4 rounded-xl inline-block mb-4">
                                <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48" />
                            </div>

                            <div className="text-xs text-gray-500 break-all bg-white/5 p-2 rounded">
                                {currentUrl}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
