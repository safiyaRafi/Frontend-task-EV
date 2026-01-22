"use client";

import { useState } from "react";

const StepSection = () => {
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        {
            id: 1,
            title: "Define Your Needs",
            description: "Quickly set up job requirements and evaluation criteria using our intuitive AI assistant.",
            detail: "Our AI analyzes market trends and your role requirements to suggest the best screening criteria."
        },
        {
            id: 2,
            title: "Find Candidates",
            description: "Seamlessly import candidates from your ATS or other sources into the pipeline.",
            detail: "Integration with Lever, Greenhouse, and Workday ensures a smooth data flow."
        },
        {
            id: 3,
            title: "AI Voice & Link",
            description: "Candidates receive a personalized link to an AI-powered voice interview.",
            detail: "24/7 availability allows candidates to interview at their own convenience."
        },
        {
            id: 4,
            title: "Intelligent Analysis",
            description: "Exterview's AI evaluates responses based on your specific criteria.",
            detail: "Get detailed transcripts and competency-based scoring automatically."
        }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/2 sticky top-32">
                        <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">
                            How it <span className="text-accent">works.</span>
                        </h2>
                        <div className="space-y-6">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    onClick={() => setActiveStep(step.id)}
                                    className={`p-6 rounded-2xl cursor-pointer transition-all border ${activeStep === step.id
                                            ? "bg-blue-50/50 border-blue-200 shadow-sm"
                                            : "bg-transparent border-transparent hover:bg-gray-50"
                                        }`}
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${activeStep === step.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                                            }`}>
                                            {step.id}
                                        </span>
                                        <h3 className={`text-xl font-bold ${activeStep === step.id ? "text-blue-900" : "text-gray-900"}`}>
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className={`text-sm leading-relaxed ${activeStep === step.id ? "text-blue-700/80" : "text-gray-500"}`}>
                                        {step.description}
                                    </p>
                                    {activeStep === step.id && (
                                        <p className="mt-4 text-xs font-medium text-blue-600/60 uppercase tracking-widest animate-in fade-in slide-in-from-top-2">
                                            {step.detail}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full aspect-square bg-gray-50 rounded-[3rem] border border-gray-100 p-8 flex items-center justify-center relative overflow-hidden shadow-inner">
                        <div className="absolute inset-0 bg-mesh opacity-30"></div>

                        {/* Visual representation change based on active step */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-500">
                            {activeStep === 1 && (
                                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 w-3/4 space-y-4 animate-in zoom-in-95 duration-500">
                                    <div className="h-4 w-3/4 bg-blue-100 rounded"></div>
                                    <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
                                    <div className="pt-4 space-y-2">
                                        <div className="h-2 w-full bg-gray-50 rounded"></div>
                                        <div className="h-2 w-full bg-gray-50 rounded"></div>
                                    </div>
                                </div>
                            )}
                            {activeStep === 2 && (
                                <div className="grid grid-cols-2 gap-4 w-3/4 animate-in slide-in-from-right-8 duration-500">
                                    <div className="h-24 bg-white rounded-xl shadow border border-gray-100"></div>
                                    <div className="h-24 bg-white rounded-xl shadow border border-gray-100"></div>
                                    <div className="h-24 bg-white rounded-xl shadow border border-gray-100"></div>
                                    <div className="h-24 bg-white rounded-xl shadow border border-gray-100"></div>
                                </div>
                            )}
                            {activeStep === 3 && (
                                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-3xl animate-bounce shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                                    📞
                                </div>
                            )}
                            {activeStep === 4 && (
                                <div className="w-3/4 space-y-4 animate-in fade-in duration-700">
                                    <div className="flex justify-between items-end">
                                        <div className="h-32 w-12 bg-blue-600 rounded-lg"></div>
                                        <div className="h-48 w-12 bg-blue-400 rounded-lg"></div>
                                        <div className="h-24 w-12 bg-blue-200 rounded-lg"></div>
                                        <div className="h-40 w-12 bg-blue-500 rounded-lg"></div>
                                    </div>
                                    <div className="text-center pt-4 font-bold text-blue-900">Analysis Complete</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StepSection;
