import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-mesh">
            {/* Background Glow Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-400/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">AI For Hiring</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
                    The only <span className="text-gradient">AI Talent Intelligence</span> platform.
                </h1>

                <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                    The all-in-one AI-native platform designed to help you hire 10x faster, reduce costs, and enhance candidate experience.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        Book a Demo
                    </button>
                    <button className="w-full sm:w-auto bg-white border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Watch Video
                    </button>
                </div>

                {/* Mockup Preview Area */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative">
                        <div className="h-8 bg-gray-50 flex items-center gap-1.5 px-4 border-b border-gray-100">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                        </div>
                        {/* Placeholder for actual image or complex CSS mockup */}
                        <div className="aspect-[16/9] bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-12">
                            <div className="grid grid-cols-12 gap-6 w-full h-full opacity-40">
                                <div className="col-span-3 bg-white rounded-lg shadow-sm"></div>
                                <div className="col-span-9 space-y-4">
                                    <div className="h-1/3 bg-white rounded-lg shadow-sm"></div>
                                    <div className="grid grid-cols-3 gap-4 h-1/2">
                                        <div className="bg-white rounded-lg shadow-sm"></div>
                                        <div className="bg-white rounded-lg shadow-sm"></div>
                                        <div className="bg-white rounded-lg shadow-sm"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur px-8 py-6 rounded-2xl shadow-xl border border-white/50 space-y-4 max-w-xs transition-transform hover:scale-105 duration-500">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                                        <div className="space-y-1">
                                            <div className="h-3 w-24 bg-gray-200 rounded"></div>
                                            <div className="h-2 w-16 bg-gray-100 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-gray-100 rounded"></div>
                                        <div className="h-2 w-full bg-gray-100 rounded"></div>
                                        <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating UI Elements */}
                    <div className="absolute -top-10 -right-10 hidden lg:block bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce duration-[3000ms]">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <span className="text-xs font-bold">Interview Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
