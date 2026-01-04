import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Side: Image Composition */}
            <div className="w-full lg:w-1/2 relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?q=80&w=1000&auto=format&fit=crop" alt="Happy pet with owner" className="w-full h-[450px] object-cover" />
              </div>

              {/* Decorative Element: Orange Box behind image */}
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-linear-to-tr from-[#ff6a00] to-[#ffb03a] rounded-2xl -z-0 opacity-20 hidden md:block"></div>

              {/* Floating Badge */}
              <div className="absolute top-10 -right-8 z-20 bg-white p-6 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-gray-800">500+</p>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">Pets Adopted</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#ff6a00] text-xs font-bold uppercase tracking-widest">Our Mission</div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Finding Forever Homes For Every <span className="text-[#ff6a00]">Little Soul</span>.
              </h2>

              <p className="text-gray-600 text-base leading-relaxed">
                At <span className="font-bold  text-gray-800">PawMart</span>, we believe that every pet deserves a warm bed and a loving family. Since our founding in Dhaka, we have worked tirelessly
                to connect compassionate people with animals in need.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#ff6a00]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">Verified Healthy Pets</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#ff6a00]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">Expert Veterinary Care</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#ff6a00]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">Free Initial Consultation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#ff6a00]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">Easy Adoption Process</p>
                </div>
              </div>

              <button className="btn bg-linear-to-tr from-[#ff6a00] to-[#ffb03a] text-white border-none px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-all h-auto font-bold uppercase tracking-wide">
                Read Our Full Story
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
