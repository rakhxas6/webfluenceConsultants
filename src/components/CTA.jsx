import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <section
        className="py-16 bg-slate-100/70 w-full text-center px-4 scroll-mt-[25vh]"
        id="cta"
      >
        <p className="text-xl font-medium text-slate-600">
          Let’s work together!
        </p>
        <h2 className="font-medium text-slate-800 text-5xl max-w-lg mx-auto my-4">
          Unlock your next big opportunity.
        </h2>

        <a
          href="https://wa.me/9779867925779"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-5 gap-2 bg-[#25d366] text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:text-black"
          style={{
            boxShadow: "0 0 12px 3px rgba(37, 211, 102, 0.6)",
            animation: "whatsappGlow 2s ease-in-out infinite",
          }}
        >
          <FaWhatsapp size={18} />
          Chat with us
        </a>
      </section>
    </>
  );
}
