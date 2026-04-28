import React from "react";
import logo from "../../assets/logo/17.png";

export default function Register() {
  return (
    <main className="flex items-center justify-center w-full h-[100vh] px-4 z-10">
      <form className="flex w-full flex-col max-w-96">
        

        <div className="">
            <a href="/" className="mb-2 " title="Go to Webfluence Homepage">
          <img src={logo} alt="WFC Logo" className="w-16 h-16" />
        </a>
          <h2 className=" text-4xl font-medium text-gray-900">Sign up</h2>

          <p className="mt-2 text-base text-gray-500/90">
            Please register with us to get more details.
          </p>
        </div>

        <div className="mt-10">
          <label className="font-medium">Full Name</label>
          <input
            placeholder="Please enter your full name"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-[#0025cc] outline-none px-3 py-3 w-full"
            required
            type="email"
            name="email"
          />
        </div>

        <div className="mt-6">
          <label className="font-medium">Email</label>
          <input
            placeholder="Please enter your email"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-[#0025cc] outline-none px-3 py-3 w-full"
            required
            type="email"
            name="email"
          />
        </div>

        <div className="mt-6">
          <label className="font-medium">Password</label>
          <input
            placeholder="Please enter your password"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-[#0025cc] outline-none px-3 py-3 w-full"
            required
            type="password"
            name="password"
          />
        </div>

        <button
          type="submit"
          className="mt-8 py-3 w-full cursor-pointer rounded-md bg-[#0025cc] text-white transition hover:bg-[#0025cc]/90"
        >
          Sign up
        </button>
        <p className="text-center py-8">
          Already have an account?{" "}
          <a href="/login" className="text-[#0025cc] hover:underline">
            Sign in
          </a>
        </p>
      </form>
    </main>
  );
}
