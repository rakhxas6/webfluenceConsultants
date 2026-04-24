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
          {/* <button
            type="button"
            class="group flex items-center gap-2 px-7 py-2.5 active:scale-95 transition"
          >
            Contact support
            <svg
              class="group-hover:translate-x-0.5 mt-1 transition"
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10"
                stroke="#1F2937"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Error;
