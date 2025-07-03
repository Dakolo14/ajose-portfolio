"use client";

export default function Footer() {
  return (
    <footer className="w-full py-8 flex flex-col items-center justify-center bg-[#181818] border-t border-[#232323] mt-12">
      <div className="text-lg font-semibold mb-2">Get in touch :–)</div>
      <div className="text-[#bdbdbd] text-center mb-4 max-w-xl">
        I can be easily reached at your convenience via LinkedIn or email.
      </div>
      <button className="bg-[#232323] text-white px-6 py-2 rounded-full font-medium hover:bg-[#333] transition">Connect</button>
    </footer>
  );
} 