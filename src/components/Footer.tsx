"use client";

export default function Footer() {
  return (
    <footer className="w-full py-8 flex flex-col items-center justify-center bg-[#181818] border-t border-[#232323] mt-12 animate-slideInUp">
      <div className="text-lg font-semibold mb-2 transition-all duration-300 hover:text-[#ED017F]">Get in touch :–)</div>
      <div className="text-[#bdbdbd] text-center mb-4 max-w-xl transition-colors duration-300 hover:text-[#ededed]">
        I can be easily reached at your convenience via LinkedIn or email.
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/ajose-damilare-643189169/?skipRedirect=true"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#232323] text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-[#ED017F] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
        >
          Connect on LinkedIn ↗
        </a>
        <a
          href="mailto:ajosedare4u@gmail.com"
          className="bg-[#1f1f1f] text-[#ccc] border border-[#333] px-5 py-2 rounded-full text-xs font-medium hover:bg-[#2a2a2a] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Send Email ✉️
        </a>
      </div>
    </footer>
  );
}
