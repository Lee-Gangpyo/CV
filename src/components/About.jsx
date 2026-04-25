import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, ChevronDown, ChevronUp, User, Activity, Database, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { language } = useLanguage();
    const [showAllCareers, setShowAllCareers] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');

    const content = {
        en: {
            title: 'About Me',
            tabs: [
                { id: 'profile', label: 'Profile', icon: <User size={18} /> },
                { id: 'specialties', label: 'Specialties', icon: <Activity size={18} /> },
                { id: 'research', label: 'Research & Data', icon: <Database size={18} /> },
                { id: 'vision', label: 'Vision', icon: <Lightbulb size={18} /> }
            ],
            profile: {
                role: 'Rehabilitation Medicine Specialist',
                affiliation: 'COMWEL Incheon Hospital (Public)',
                position: 'Director, Rehabilitation Medicine Research Center',
                summary: 'I bridge the gap between academic research and clinical practice, focusing on industrial accident rehabilitation, assistive technology, and amputation care.',
                roles: [
                    'Clinical Care for Injured Workers',
                    'Research Planning & Execution (Rehab, Insurance, Assistive Tech)',
                    'Regional Care Pathway Design',
                    'Policy & System Improvement Advisory'
                ]
            },
            specialties: [
                {
                    title: 'Clinical Expertise',
                    items: [
                        'Musculoskeletal Rehab: Industrial injuries (Back, Shoulder, Knee)',
                        'Amputation Rehab: Prosthetics, Gait Analysis, Return to Work',
                        'Neuro-Rehab: TBI, SCI, Spasticity Management (Botox, Orthosis)'
                    ]
                },
                {
                    title: 'Public Insurance & Systems',
                    items: [
                        'COMWEL Rehab System Design',
                        'Care Pathway Optimization (Acute-Rehab-Vocational)',
                        'Disability Evaluation Reform (Diagnosis-Function-Management Axis)'
                    ]
                }
            ],
            research: [
                {
                    title: 'Research Interests',
                    items: [
                        'Medical Informatics & Big Data (EHR, Claims Data)',
                        'Return to Work (RTW) Metrics & Productivity',
                        'SROI (Social Return on Investment) Analysis'
                    ]
                },
                {
                    title: 'Data Science Perspective',
                    items: [
                        'System Design via Data (Not just clinical analysis)',
                        'Modeling Therapy-Device-RTW Relationships',
                        'Knowledge Hub for Law, Policy, and Clinical Practice'
                    ]
                }
            ],
            vision: [
                {
                    title: 'System Designer',
                    desc: 'Designing an organic system where patients, providers, policy, and technology work together.'
                },
                {
                    title: 'Evidence & Value',
                    desc: 'Balancing clinical evidence (RCTs, Big Data) with social value (SROI).'
                },
                {
                    title: 'Educator & Mentor',
                    desc: 'Empowering patients with knowledge and mentoring the next generation of rehab specialists.'
                }
            ],
            careerTitle: 'Career History',
            loadMore: 'Load More',
            showLess: 'Show Less',
            careers: [
                { period: '2025.9 ~ Present', role: 'Adjunct Professor, Seoul National University College of Medicine' },
                { period: '2025.3 ~ Present', role: 'Director, Korean Society of Prosthetics and Orthotics' },
                { period: '2025.3 ~ Present', role: 'Member, COSD Expert Committee (Assistive Tech), KATS' },
                { period: '2024.9 ~ Present', role: 'Physical medicine and rehabilitation clinician, Rehabilitation Specialty Center, COMWEL Incheon Hospital' },
                { period: '2020.3 ~ Present', role: 'Chief Research Officer, Rehabilitation Medicine Research Center, COMWEL' },
                { period: '2023.4 ~ 2024.08', role: 'Director, Rehabilitation Specialty Center, COMWEL Incheon Hospital' },
                { period: '2022.9 ~ 2025.8', role: 'Adjunct Associate Professor, Seoul National University College of Medicine' },
                { period: '2020.11 ~ 2022.12', role: 'Education Committee Member, Korean Academy of Rehabilitation Medicine' },
                { period: '2015.3 ~ 2023.3', role: 'Physical medicine and rehabilitation clinician, Rehabilitation Specialty Center, COMWEL Incheon Hospital' },
                { period: '2008.3 ~ 2011.4', role: 'Army Medical Officer' }
            ]
        },
        ko: {
            title: '소개',
            tabs: [
                { id: 'profile', label: '프로필', icon: <User size={18} /> },
                { id: 'specialties', label: '전문 영역', icon: <Activity size={18} /> },
                { id: 'research', label: '연구 및 데이터', icon: <Database size={18} /> },
                { id: 'vision', label: '비전', icon: <Lightbulb size={18} /> }
            ],
            profile: {
                role: '재활의학과 전문의',
                affiliation: '산재보험 직영(공공) 재활전문병원',
                position: '재활의학 연구센터장',
                summary: '임상과 연구, 정책을 연결하여 산재 환자에게 최적의 재활 솔루션을 제공하고, 사회 복귀를 돕는 시스템을 설계합니다.',
                roles: [
                    '근로자 산재 재활 진료',
                    '재활의학·산재보험·보조기기 관련 연구 기획 및 수행',
                    '지역 산재의료 전달체계 및 재활 연계 모델 설계',
                    '정책·수가·제도 개선을 위한 제안 및 자문'
                ]
            },
            specialties: [
                {
                    title: '임상 전문성',
                    items: [
                        '근골격계 재활: 산재 손상(요통, 어깨, 무릎), 수술 후 재활',
                        '절단 재활: 의지(Prosthetics) 처방, 보행 분석, 직업 복귀 지원',
                        '신경계 재활: 뇌손상, 척수손상, 경직 관리(보톡스, 보조기)'
                    ]
                },
                {
                    title: '공적보험·산재 시스템',
                    items: [
                        '산재 의료 전달체계 및 연계 구조 설계',
                        '특수·전문·직업재활 프로그램 경로 최적화',
                        '장해평가 체계 재구성 (진단-기능-관리 축)'
                    ]
                }
            ],
            research: [
                {
                    title: '연구 관심사',
                    items: [
                        '의료정보학 및 재활 빅데이터 (EHR, 공단 데이터)',
                        '근로자 복귀율(RTW) 및 생산성 지표 개발',
                        'SROI(사회적 투자수익률) 기반 가치 평가'
                    ]
                },
                {
                    title: '데이터 사이언스 관점',
                    items: [
                        '데이터 기반 시스템 디자인 (System Designer)',
                        '재활치료-보조기기-직업복귀 연관성 모델링',
                        '법·제도·임상지식 구조화 (Knowledge Hub)'
                    ]
                }
            ],
            vision: [
                {
                    title: '시스템 설계자',
                    desc: '환자, 의료인, 제도, 기술이 유기적으로 작동하는 산재 재활 시스템을 설계합니다.'
                },
                {
                    title: '근거와 가치의 균형',
                    desc: '임상적 효과(Evidence)와 사회적 가치(Social Value)를 동시에 추구합니다.'
                },
                {
                    title: '교육자이자 연결자',
                    desc: '환자와 동료에게 지식을 나누고, 후배들을 위한 성장 생태계를 만듭니다.'
                }
            ],
            careerTitle: '경력',
            loadMore: '더 보기',
            showLess: '접기',
            careers: [
                { period: '2025.9 ~ 현재', role: '서울대학교 의과대학 비전임 겸임교수' },
                { period: '2025.3 ~ 현재', role: '한국의지보조기학회 이사' },
                { period: '2025.3 ~ 현재', role: '국가기술표준원 COSD 전문위원회 위원 (장애인 보조기구/고령친화용품 분과)' },
                { period: '2024.9 ~ 현재', role: '근로복지공단 인천병원 재활전문센터 진료과장' },
                { period: '2020.3 ~ 현재', role: '근로복지공단 재활의학연구센터장' },
                { period: '2023.4 ~ 2024.08', role: '근로복지공단 인천병원 재활전문센터장' },
                { period: '2022.9 ~ 2025.8', role: '서울대학교 의과대학 비전임 겸임부교수' },
                { period: '2020.11 ~ 2022.12', role: '대한재활의학회 교육위원' },
                { period: '2015.3 ~ 2023.3', role: '근로복지공단 인천병원 재활전문센터 진료과장' },
                { period: '2008.3 ~ 2011.4', role: '육군 군의관' }
            ]
        }
    };

    const t = content[language];
    const visibleCareers = showAllCareers ? t.careers : t.careers.slice(0, 5);

    return (
        <section id="about" className="py-32 bg-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-8 font-serif leading-tight">
                        {t.title}
                    </h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-12"></div>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-4">
                        {t.tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-accent text-primary shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                                    : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-text-main'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content Area (2 cols) */}
                        <div className="lg:col-span-2 min-h-[400px]">
                            <div className="transition-all duration-300">
                                {activeTab === 'profile' && (
                                    <div className="space-y-8">
                                        <div className="glass-card p-8 rounded-2xl border border-white/10">
                                            <h3 className="text-2xl font-bold text-text-main mb-2">{t.profile.position}</h3>
                                            <p className="text-accent mb-6">{t.profile.affiliation}</p>
                                            <p className="text-lg text-text-muted leading-relaxed mb-8">
                                                {t.profile.summary}
                                            </p>
                                            <ul className="space-y-3">
                                                {t.profile.roles.map((role, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-text-main">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                                        {role}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'specialties' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {t.specialties.map((section, idx) => (
                                            <div key={idx} className="glass-card p-6 rounded-xl border border-white/10">
                                                <h3 className="text-xl font-bold text-accent mb-4">{section.title}</h3>
                                                <ul className="space-y-3">
                                                    {section.items.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'research' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {t.research.map((section, idx) => (
                                            <div key={idx} className="glass-card p-6 rounded-xl border border-white/10">
                                                <h3 className="text-xl font-bold text-purple-400 mb-4">{section.title}</h3>
                                                <ul className="space-y-3">
                                                    {section.items.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'vision' && (
                                    <div className="space-y-6">
                                        {t.vision.map((item, idx) => (
                                            <div key={idx} className="glass-card p-6 rounded-xl border border-white/10 flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                                                    {idx === 0 ? <Activity size={20} /> : idx === 1 ? <Database size={20} /> : <User size={20} />}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-text-main mb-2">{item.title}</h3>
                                                    <p className="text-text-muted">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Career History (1 col) */}
                        <div className="lg:col-span-1">
                            <div className="glass-card rounded-xl p-6 border border-white/10 sticky top-24">
                                <h3 className="text-xl font-bold text-text-main mb-6 font-serif flex items-center gap-2">
                                    <Briefcase className="text-accent" size={20} /> {t.careerTitle}
                                </h3>
                                <div className="space-y-6 relative">
                                    {/* Vertical Line */}
                                    <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-white/10"></div>

                                    {visibleCareers.map((career, index) => (
                                        <div
                                            key={index}
                                            className="relative pl-6 animate-in fade-in slide-in-from-left-2 duration-500"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="absolute left-0 top-2 w-[7px] h-[7px] bg-accent rounded-full ring-4 ring-primary"></div>
                                            <div className="text-accent/70 font-mono text-[10px] mb-1">{career.period}</div>
                                            <h4 className="text-text-main font-medium text-sm leading-snug">{career.role}</h4>
                                        </div>
                                    ))}
                                </div>

                                {t.careers.length > 5 && (
                                    <button
                                        onClick={() => setShowAllCareers(!showAllCareers)}
                                        className="mt-6 w-full py-2 flex items-center justify-center gap-2 text-xs font-medium text-accent hover:bg-accent/10 rounded-lg transition-colors border border-accent/20"
                                    >
                                        {showAllCareers ? (
                                            <>
                                                {t.showLess} <ChevronUp size={14} />
                                            </>
                                        ) : (
                                            <>
                                                {t.loadMore} <ChevronDown size={14} />
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
