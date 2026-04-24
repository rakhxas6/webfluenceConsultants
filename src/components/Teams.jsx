import React from 'react'

const Teams = () => {
    const [startIndex, setStartIndex] = React.useState(0);
    const [visibleCount, setVisibleCount] = React.useState(3);

    const members = [
        { name: 'Cristofer Levin', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600' },
        { name: 'Emily Karter', role: 'Growth Marketing', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600' },
        { name: 'Daniel Wong', role: 'Content Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop' },
        { name: 'Cristofer Levin', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600' },
        { name: 'Sagar Neupane', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600' },
    ]

   
    React.useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth < 640) {
            setVisibleCount(1);
        } else if (window.innerWidth < 1024) {
            setVisibleCount(2);
        } else {
            setVisibleCount(3);
        }
        setStartIndex(0);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = members.length - visibleCount;
    const visibleMembers = members.slice(startIndex, startIndex + visibleCount);

    return (
        <section className="py-16 px-4 border-t border-neutral-300 bg-slate-50">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
            </style>

            <section className="">
                <div className="text-center mb-11">
                    <p className="text-lg text-[#0025cc] font-medium pb-2">Our Lifeline</p>
                    <h1 className="text-[42px] font-medium text-slate-900 tracking-tighter">Meet Our Team</h1>
                    <p className="text-base/6 text-slate-500 max-w-md mx-auto mt-1">A group of designers and engineers working together to build reliable and thoughtful digital experiences.</p>
                </div>

                <div className="flex items-center justify-center gap-4 md:gap-8">
                    <button onClick={() => setStartIndex(prev => prev - 1)} disabled={startIndex === 0} className={`size-10 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-opacity ${startIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6" stroke="#90A1B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>

                    <div className="flex gap-5">
                        {visibleMembers.map((member, i) => (
                            <div key={startIndex + i} className="bg-white border border-slate-100 hover:border-slate-300 transition-colors rounded-xl p-5">
                                <img src={member.image} alt={member.name} className="h-[clamp(180px,50vw,245px)] w-full object-cover object-top rounded-lg" />
                                <h3 className="text-base font-medium text-slate-800 mt-4">{member.name}</h3>
                                <p className="text-sm text-slate-500 mt-0.5">{member.role}</p>
                                <div className="flex gap-3 mt-4">
                                    <a href="#" className="size-10 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-lg flex items-center justify-center">
                                        <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.203 1.875h2.757l-6.023 6.883 7.086 9.367h-5.548l-4.345-5.68-4.972 5.68H1.4l6.442-7.363-6.797-8.887h5.688l3.928 5.193zm-.967 14.6h1.527L5.903 3.438H4.264z" fill="#1d293d"/></svg>
                                    </a>
                                    <a href="#" className="size-10 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-lg flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.333 6.617c1.326 0 2.598.523 3.536 1.455a4.95 4.95 0 0 1 1.464 3.51v5.794H15v-5.793c0-.44-.176-.86-.488-1.17a1.673 1.673 0 0 0-2.357 0 1.65 1.65 0 0 0-.488 1.17v5.793H8.333v-5.793c0-1.317.527-2.58 1.465-3.511a5.02 5.02 0 0 1 3.535-1.455M5 7.445H1.667v9.932H5zM3.333 4.967C4.253 4.967 5 4.226 5 3.31s-.746-1.655-1.667-1.655A1.66 1.66 0 0 0 1.667 3.31a1.66 1.66 0 0 0 1.666 1.656" stroke="#1d293d" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </a>
                                    <a href="#" className="size-10 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-lg flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.167 1.656H5.833c-2.3 0-4.166 1.853-4.166 4.138v8.276c0 2.286 1.865 4.138 4.166 4.138h8.334c2.3 0 4.166-1.852 4.166-4.138V5.794c0-2.285-1.865-4.138-4.166-4.138" stroke="#1d293d" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.333 9.41a3.3 3.3 0 0 1-.338 2.011 3.32 3.32 0 0 1-1.46 1.432 3.35 3.35 0 0 1-3.856-.616 3.29 3.29 0 0 1-.62-3.83c.315-.62.82-1.128 1.442-1.449a3.35 3.35 0 0 1 3.892.598c.506.502.835 1.152.94 1.855" stroke="#1d293d" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.583 5.383h.01" stroke="#1d293d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={() => setStartIndex(prev => prev + 1)} disabled={startIndex === maxIndex} className={`size-10 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-opacity ${startIndex === maxIndex ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6" stroke="#90A1B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                </div>
            </section>
        </section>
    )
}

export default Teams;