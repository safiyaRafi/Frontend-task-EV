const Stats = () => {
    const stats = [
        { label: "Client Satisfaction", value: "90%" },
        { label: "Faster Hiring", value: "10x" },
        { label: "Scheduling Time", value: "38 min" },
    ];

    return (
        <section className="py-12 border-y border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
                            <span className="text-4xl font-bold tracking-tight text-primary">{stat.value}</span>
                            <span className="text-sm font-medium text-secondary uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
