export default function CTA() {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <section className="py-16 bg-slate-100/70 w-full text-center px-2">
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
            className="inline-flex mt-8 justify-center items-center uppercase gap-2 bg-[#0025cc] text-white px-8 py-3 rounded-full hover:bg-[#0020b0] transition-colors duration-300"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 3C8.82 3 3 8.82 3 16c0 2.38.65 4.6 1.78 6.52L3 29l6.7-1.75A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3z"
                fill="white"
              />
              <path
                d="M21.5 18.9c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17 0-.37-.02-.57-.02s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
                fill="#25D366"
              />
            </svg>
            Chat with us
          </a>
      
      </section>
    </>
  );
}
