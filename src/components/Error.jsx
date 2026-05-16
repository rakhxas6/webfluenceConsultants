import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-4 border-t border-neutral-300">
      <div class="flex flex-col items-center justify-center text-sm h-[800px]">
        <p class="font-medium text-lg text-[#0025cc]">404 Error</p>
        <h2 class="md:text-6xl text-4xl font-semibold text-[#0025cc]">
          Page Not Found
        </h2>
        <p class="text-base mt-4 text-gray-500">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="flex items-center gap-4 mt-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            class="bg-[#0025cc] hover:bg-[#001a8c] px-7 py-2.5 text-white rounded active:scale-95 transition-all"
          >
            Go back home
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default Error;
