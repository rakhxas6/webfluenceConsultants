import React from "react";

export default function About() {
  return (
    <section
      className="py-16 px-4 border-t border-neutral-300 scroll-mt-[30vh]"
      id="about"
    >
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 ">
        <div className="relative shadow-2xl shadow-[#0025cc]/40 rounded-2xl overflow-hidden shrink-0">
          <img
            className="max-w-md w-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
            alt=""
          />
          {/* <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
            <div className="flex -space-x-4 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
              />
              <div className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-[#0025cc] hover:-translate-y-1 transition z-[4]">
                50+
              </div>
            </div>
            <p className="text-sm font-medium text-slate-800">
              Join our developer community
            </p>
          </div> */}
        </div>
        <div className="text-sm text-slate-600 max-w-lg">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            What we do?
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-[#0025cc] to-[#DDD9FF]"></div>
          <p className="mt-8">
            We don't just build websites — we build{" "}
            <span className="text-[#0025cc] font-semibold">
              digital experiences that convert.
            </span>{" "}
            Webfluence Consultants turns your boldest ideas into strategies that
            dominate search, social, and beyond.
          </p>
          <p className="mt-4">
            Whether you're a startup ready to make noise or an established brand
            hungry for more — we craft campaigns that{" "}
            <span className="text-[#0025cc] font-semibold">
              stop the scroll, spark curiosity, and drive real revenue.
            </span>
          </p>
          <p className="mt-4">
            From brand identity to paid ads, SEO to social media — we're the
            growth partner your business has been waiting for.{" "}
            <span className="text-[#0025cc] font-semibold">
              Let's make your brand impossible to ignore.
            </span>
          </p>
          <a
            href="#contact"
            className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-[#0025cc] to-[#8A7DFF] py-3 px-8 rounded-full text-white"
          >
            <span>Read more</span>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </section>
    </section>
  );
}
