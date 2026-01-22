const Workflow = () => {
    const steps = [
        { label: "IT", active: true },
        { label: "HR", active: true },
        { label: "Sales", active: false },
        { label: "Legal", active: false },
    ];

    return (
        <section className="section-padding relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-primary text-white p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Hiring workflows <br />
                                <span className="text-blue-400">without limits.</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-lg">
                                Connect your existing tools and automate manual tasks. Our platform integrates seamlessly with your ATS to keep everything in sync.
                            </p>
                            <button className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-all">
                                Learn More
                            </button>
                        </div>

                        <div className="relative">
                            {/* Central Node Visual */}
                            <div className="relative aspect-square max-w-md mx-auto">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-blue-600 rounded-2xl flex items-center justify-center text-4xl shadow-[0_0_50px_rgba(37,99,235,0.4)] animate-pulse">
                                        🚀
                                    </div>
                                </div>

                                {/* Connecting Nodes (Manual representation) */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                                    <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20 text-sm font-medium">IT Department</div>
                                </div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
                                    <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20 text-sm font-medium">HR Support</div>
                                </div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
                                    <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20 text-sm font-medium">Sales Ops</div>
                                </div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
                                    <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20 text-sm font-medium">Legal Review</div>
                                </div>

                                {/* Visual Connector Lines (SVG) */}
                                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                                    <line x1="50" y1="20" x2="50" y2="35" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="50" y1="80" x2="50" y2="65" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="20" y1="50" x2="35" y2="50" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="80" y1="50" x2="65" y2="50" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
