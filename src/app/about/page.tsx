// import Image from "next/image";

export default function About() {
  return (
    <div className="w-full">
      {/* Full-width image placeholder */}
      <div className="w-full bg-[#232323] pt-16 sm:!mt-24 md:!mt-0 md:pt-0" style={{ aspectRatio: '16 / 5' }} />
      {/* Text content below */}
      <div className="w-full py-12 md:px-12 sm:px-8">
        <div className="flex flex-col sm:flex-row gap-8 items-start mb-12">
          {/* Optionally keep the round avatar here or remove */}
          {/* <div className="w-32 h-32 rounded-full bg-[#232323] flex-shrink-0 mb-4 sm:mb-0" /> */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">Background</h1>
            <p className="text-[#ededed] mb-3">
              Ever since I can remember, I've always been drawn to creating and sharing my creations with others. While I can't say for certain if I had a natural talent for it, I found immense joy in seeing people appreciate the things I made.
            </p>
            <p className="text-[#ededed] mb-3">
              When I first discovered UX design in 2017, it felt like a perfect blend of two worlds I was deeply interested in and naturally inclined towards: technology and art. The moment I realized the potential of this field, I dove in headfirst, never looking back.
            </p>
            <p className="text-[#ededed]">
              Now, I'm designing products, hoping they can bring impact and value to the people around the world.
            </p>
          </div>
        </div>
        <div className="mb-12">
          <div className="text-[#bdbdbd] text-sm mb-8">Some extra facts</div>
          <div className="mb-2 text-[#ededed]">Recently, I've been:</div>
          <ul className="space-y-1">
            <li className="flex items-center gap-2"><span>🦄</span> <span className="font-semibold text-[#ededed]">Drinking 6+ espresso shots a day on average</span></li>
            <li className="flex items-center gap-2"><span>🥁</span> <span className="font-semibold text-[#ededed]">Drumming bossa nova beats</span></li>
            <li className="flex items-center gap-2"><span>⌚</span> <span className="font-semibold text-[#ededed]">Appreciating Swiss and German watches & typography</span></li>
            <li className="flex items-center gap-2"><span>🏋️‍♂️</span> <span className="font-semibold text-[#ededed]">Trying to hit the gym more often</span></li>
          </ul>
        </div>
        <div className="mb-12">
          <div className="text-[#bdbdbd] text-sm mb-8">Experience</div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#232323] pb-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#FF37A2] text-white font-medium px-2 py-1 rounded text-xs">Konga Group</span>
                <span className="text-sm">Product Design</span>
              </div>
              <span className="text-xs text-[#bdbdbd]">2023 - Present</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#232323] pb-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#232323] text-white font-bold px-2 py-1 rounded text-xs">Buzzy Media</span>
                <span className="text-sm">Lead Product Designer</span>
              </div>
              <span className="text-xs text-[#bdbdbd]">2024 - 2025</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#232323] pb-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#232323] text-white font-bold px-2 py-1 rounded text-xs">McKinley Rice</span>
                <span className="text-sm">Product Designer & Developer</span>
              </div>
              <span className="text-xs text-[#bdbdbd]">2020–2021</span>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[#bdbdbd] text-sm mb-8">Education</div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#232323] pb-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#ff4d00] text-white font-bold px-2 py-1 rounded text-xs">ArtCenter College of Design</span>
                <span className="text-[#ededed]">B.S. Interaction Design</span>
              </div>
              <span className="text-xs text-[#bdbdbd]">2019 – 2025</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#232323] pb-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#232323] text-white font-bold px-2 py-1 rounded text-xs">WeCode</span>
                <span className="text-[#ededed]">Coding Bootcamp, Front-end Development</span>
              </div>
              <span className="text-xs text-[#bdbdbd]">2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 