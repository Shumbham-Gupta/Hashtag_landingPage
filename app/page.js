'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, BarChart2, Zap, Play, Menu, X, Check } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    return (
        <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-pink-500 selection:text-white font-sans">

            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-pink-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000" />
            </div>

            {/* Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-200 group-hover:shadow-purple-400 transition-all duration-300">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">#Trending Hashtag.in</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors">Features</Link>
                        <Link href="#how-it-works" className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors">How it Works</Link>
                        <Link href="#pricing" className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors">Pricing</Link>
                        <Link
                            href="https://trendinghashtag.in"
                            className="px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg shadow-gray-900/20"
                        >
                            Open App
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-900">
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            <Link href="#features" className="text-lg font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Features</Link>
                            <Link href="#" className="text-lg font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>How it Works</Link>
                            <Link href="#pricing" className="text-lg font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                            <Link href="https://trendinghashtag.in" className="text-lg text-purple-600 font-bold" onClick={() => setMobileMenuOpen(false)}>Open App</Link>
                        </div>
                    </motion.div>
                )}
            </motion.nav>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-md mb-4">
                            <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
                            <span className="text-sm font-bold text-gray-600">v2.0 is now live</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-gray-900">
                            See What's <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 animate-gradient-x">
                                Trending Everywhere
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                            Stop guessing. Start growing. The most powerful hashtag analytics tool to explore real-time trends and skyrocket your social reach with AI-driven insights.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <Link
                                href="https://trendinghashtag.in"
                                className="group relative px-8 py-4 bg-gray-900 text-white font-bold rounded-full text-lg shadow-xl shadow-gray-900/30 hover:shadow-gray-900/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 overflow-hidden"
                            >
                                <span className="relative z-10">Get Started Free</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="https://trendinghashtag.in"
                                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full text-lg border border-gray-200 shadow-lg hover:shadow-xl hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
                            >
                                <Play className="w-5 h-5 fill-current text-gray-400 group-hover:text-purple-600 transition-colors" />
                                Watch Demo
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Dashboard Preview (Visual Placeholder) */}


            {/* Features Section */}
            <section id="features" className="relative z-10 py-24 px-6 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Why creators love us</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">Everything you need to dominate social media algorithms in one powerful dashboard.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Real-Time Tracking",
                                desc: "Monitor hashtags as they go viral. Never miss a trend again with our live updating systems.",
                                icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
                                color: "bg-purple-50 text-purple-600"
                            },
                            {
                                title: "Deep Analytics",
                                desc: "Analyze best times to post and hashtag performance metrics to maximize your engagement.",
                                icon: <BarChart2 className="w-6 h-6 text-pink-600" />,
                                color: "bg-pink-50 text-pink-600"
                            },
                            {
                                title: "Smart Suggestions",
                                desc: "AI-powered suggestions tailored to your specific niche that adapt to your content style.",
                                icon: <Zap className="w-6 h-6 text-orange-600" />,
                                color: "bg-orange-50 text-orange-600"
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-100 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="relative z-10 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Simple, Transparent Pricing</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">Choose the plan that's right for your growth journey.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Starter Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100 flex flex-col hover:-translate-y-1 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                            <div className="text-4xl font-black text-gray-900 mb-6">$9<span className="text-base font-medium text-gray-500">/mo</span></div>
                            <p className="text-gray-600 mb-8">Perfect for individuals just starting out.</p>
                            <ul className="mb-8 space-y-4">
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <Check className="w-5 h-5 text-green-500" /> 100 Hashtag Searches
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <Check className="w-5 h-5 text-green-500" /> Basic Analytics
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <Check className="w-5 h-5 text-green-500" /> 1 Social Profile
                                </li>
                            </ul>
                            <Link href="https://trendinghashtag.in" className="mt-auto w-full py-4 text-center rounded-xl font-bold border-2 border-gray-100 text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all">
                                Start Free Trial
                            </Link>
                        </motion.div>

                        {/* Pro Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-900 rounded-3xl p-8 border border-gray-900 shadow-2xl shadow-purple-500/20 flex flex-col relative scale-105"
                        >
                            <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
                            <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                            <div className="text-4xl font-black text-white mb-6">$29<span className="text-base font-medium text-gray-400">/mo</span></div>
                            <p className="text-gray-400 mb-8">For creators serious about growth.</p>
                            <ul className="mb-8 space-y-4">
                                <li className="flex items-center gap-3 text-white font-medium">
                                    <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-purple-400" /></div> Unlimited Searches
                                </li>
                                <li className="flex items-center gap-3 text-white font-medium">
                                    <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-purple-400" /></div> Advanced Analytics
                                </li>
                                <li className="flex items-center gap-3 text-white font-medium">
                                    <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-purple-400" /></div> 5 Social Profiles
                                </li>
                                <li className="flex items-center gap-3 text-white font-medium">
                                    <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-purple-400" /></div> AI Suggestions
                                </li>
                            </ul>
                            <Link href="https://trendinghashtag.in" className="mt-auto w-full py-4 text-center rounded-xl font-bold bg-white text-gray-900 hover:bg-gray-100 transition-all">
                                Get Started
                            </Link>
                        </motion.div>

                        {/* Business Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100 flex flex-col hover:-translate-y-1 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Business</h3>
                            <div className="text-4xl font-black text-gray-900 mb-6">$99<span className="text-base font-medium text-gray-500">/mo</span></div>
                            <p className="text-gray-600 mb-8">For agencies and large teams.</p>
                            <ul className="mb-8 space-y-4">
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <Check className="w-5 h-5 text-green-500" /> Everything in Pro
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <Check className="w-5 h-5 text-green-500" /> Unlimited Profiles
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <Check className="w-5 h-5 text-green-500" /> API Access
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 font-medium">
                                    <Check className="w-5 h-5 text-green-500" /> Priority Support
                                </li>
                            </ul>
                            <Link href="https://trendinghashtag.in" className="mt-auto w-full py-4 text-center rounded-xl font-bold border-2 border-gray-100 text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all">
                                Contact Sales
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-[3rem] p-12 md:p-24 overflow-hidden text-center bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 shadow-2xl shadow-purple-500/30 text-white"
                    >
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />
                        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-black/10 rounded-full blur-[80px]" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Ready to go Viral?</h2>
                            <p className="text-xl text-purple-50 mb-10 max-w-2xl mx-auto font-medium">Join thousands of creators who are already using Trending Hashtags to grow their audience exponentially.</p>

                            <Link
                                href="https://trendinghashtag.in"
                                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-purple-600 font-bold rounded-full text-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-xl"
                            >
                                Get Started Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-gray-100 bg-white pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <Link href="/" className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <span className="text-xl font-bold text-gray-900">#Trending</span>
                            </Link>
                            <p className="text-gray-500 max-w-md font-medium">
                                The ultimate tool for social media growth. Track, analyze, and discover the trends that matter.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6">Product</h4>
                            <ul className="space-y-4 text-gray-500 font-medium">
                                <li><Link href="#features" className="hover:text-purple-600 transition-colors">Features</Link></li>
                                <li><a href="#" className="hover:text-purple-600 transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-purple-600 transition-colors">API</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
                            <ul className="space-y-4 text-gray-500 font-medium">
                                <li><a href="#" className="hover:text-purple-600 transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-purple-600 transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-medium">
                        <p>&copy; 2024 Trending Hashtags. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}
