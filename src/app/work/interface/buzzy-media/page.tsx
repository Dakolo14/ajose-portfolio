import Image from "next/image";
import Link from "next/link";

export default function BuzzyMedia() {
  return (
    <div className="text-white w-full mx-auto">
      <div className="w-full relative aspect-[16/7] min-h-[200px] bg-[#232323]">
        <Image
          src="/"
          alt="Buzzy Media"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>
      <div className="w-full py-8 px-4 sm:px-8 md:px-12">
        <h2 className="text-2xl lg:text-4xl py-4 font-bold mb-4">BuzzyNG</h2>

        <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-8">
          <div className="flex-1 flex flex-col">
            <h5 className="font-medium text-sm lg:text-lg mb-1">
              Timeline / Location
            </h5>
            <p className="mb-0 font-light text-[#cbcbcb] text-xs lg:text-sm">
              October 2024 - January 2025 / Palo Alto, California
            </p>
          </div>
          <div className="flex-1 flex flex-col">
            <h5 className="font-medium text-sm lg:text-lg mb-1">Role</h5>
            <p className="mb-0 font-light text-[#cbcbcb] text-xs lg:text-sm">
              Lead Product Designer
            </p>
          </div>
          <div className="flex-1 flex flex-row items-center gap-4 justify-start lg:justify-end mt-2 lg:mt-0">
            {/* Social links: replace href values as needed */}
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="rounded-full bg-[#232323] hover:bg-[#333] p-2 transition"
            >
              <Image src="/globe.png" alt="Website" width={22} height={22} />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Figma"
              className="rounded-full bg-[#232323] hover:bg-[#333] p-2 transition flex items-center justify-center"
            >
              {/* Figma SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 50 50"
                fill="currentColor"
              >
                <path d="M 18.5 2 C 13.81752 2 10 5.8175204 10 10.5 C 10 13.800292 11.949927 16.592855 14.708984 18 C 11.949927 19.407145 10 22.199708 10 25.5 C 10 28.800292 11.949927 31.592855 14.708984 33 C 11.949927 34.407145 10 37.199708 10 40.5 C 10 45.18248 13.81752 49 18.5 49 C 23.18248 49 27 45.18248 27 40.5 L 27 33 L 27 29.65625 C 28.341367 32.201717 30.932066 34 34 34 C 38.406436 34 42 30.406432 42 26 C 42 22.378246 39.526173 19.428685 36.214844 18.449219 C 39.553558 17.301707 42 14.220224 42 10.5 C 42 5.8175204 38.18248 2 33.5 2 L 26 2 L 18.5 2 z M 18.5 4 L 25 4 L 25 17 L 18.5 17 C 14.89848 17 12 14.10152 12 10.5 C 12 6.8984796 14.89848 4 18.5 4 z M 27 4 L 33.5 4 C 37.10152 4 40 6.8984796 40 10.5 C 40 14.10152 37.10152 17 33.5 17 L 27 17 L 27 4 z M 18.5 19 L 25 19 L 25 32 L 18.5 32 C 14.89848 32 12 29.10152 12 25.5 C 12 21.89848 14.89848 19 18.5 19 z M 27 19 L 30.34375 19 C 28.908839 19.756146 27.756146 20.908838 27 22.34375 L 27 19 z M 34 20 C 37.325556 20 40 22.674446 40 26 C 40 29.325554 37.325556 32 34 32 C 30.674444 32 28 29.325554 28 26 C 28 22.674446 30.674444 20 34 20 z M 18.5 34 L 25 34 L 25 40.5 C 25 44.10152 22.10152 47 18.5 47 C 14.89848 47 12 44.10152 12 40.5 C 12 36.89848 14.89848 34 18.5 34 z"></path>
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full bg-[#232323] hover:bg-[#333] p-2 transition flex items-center justify-center"
            >
              {/* LinkedIn SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 50 50"
                fill="currentColor"
              >
                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
              </svg>
            </Link>
          </div>
        </div>

        <hr className="border-[#232323] w-full flex items-center flex-col" />

        <div className="mb-6 py-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-12">
          <div className="flex-1 flex flex-col">
            <div className="w-full lg:pt-6 lg:py-4 pt-4 py-2">
              <h5 className="font-medium text-md lg:text-2xl mb-2">
                Project Overview
              </h5>
              <p className="mb-0 font-light text-[#cbcbcb] text-sm lg:text-lg">
                Buzzy.ng is a Nigerian digital platform designed to unify
                multiple essential services including event registration, online
                voting, e-commerce (marketplace), logistics, bill payments, and
                task-based earning.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="w-full lg:pt-6 lg:py-4 pt-4 py-2">
              <h5 className="font-medium text-md lg:text-2xl mb-2">
                Problem Statement
              </h5>
              <p className="mb-0 font-light text-[#cbcbcb] text-sm lg:text-lg">
                Many Nigerians, especially those in underserved areas, rely on
                multiple apps to manage basic needs like shopping, events,
                payments, and earnings. This leads to a fragmented and
                inefficient digital experience.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-medium text-md lg:text-2xl mb-4 lg:mb-12">
            Project Timeline
          </h5>
          <div className="w-full lg:w-[70vw] mx-auto aspect-[649/269] min-h-[200px] relative">
            <Image
              src="/timeline.png"
              alt="Buzzy Media"
              layout="responsive"
              width={649}
              height={269}
              className="rounded"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
