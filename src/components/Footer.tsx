"use client";

export default function Footer() {
  return (
    <footer className="w-full py-8 flex flex-col items-center justify-center bg-[#181818] border-t border-[#232323] mt-12 animate-slideInUp">
      <div className="text-lg font-semibold mb-2 transition-all duration-300 hover:text-[#ED017F]">Get in touch :–)</div>
      <div className="text-[#bdbdbd] text-center mb-4 max-w-xl transition-colors duration-300 hover:text-[#ededed]">
        I can be easily reached at your convenience via LinkedIn or email.
      </div>
      <a
        href="https://www.linkedin.com/in/ajosedamilare/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#232323] text-white px-6 py-2 rounded-full font-medium hover:bg-[#ED017F] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg hover:shadow-[#ED017F]/30"
      >
        Connect to LinkedIn
      </a>
    </footer>
  );
}

