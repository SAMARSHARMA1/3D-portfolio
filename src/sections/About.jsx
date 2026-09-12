// src/sections/About.jsx
import Card from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Framework";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space pt-20 md:pt-28 pb-16">
      {/* Section Header with accent line */}
      <div className="flex items-center gap-4 mb-4">
        <div className="h-[2px] w-12 bg-gradient-to-r from-lavender to-transparent" />
        <h2 className="text-heading">About Me</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 — Bio */}
        <div className="flex items-end grid-default-color grid-1 md:col-span-4">
          <img
            src="assets/coding-pov.png"
            alt="Coding"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Samar Sharma</p>
            <p className="subtext">
              A Software Developer focused on building AI-powered
              applications, developer tools, and ML pipelines. Currently in my
              4th year of B.Tech CSE at DAV College, Jalandhar.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 pointer-events-none h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 — Code is Craft */}
        <div className="grid-default-color grid-2 md:col-span-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 — Location */}
        <div className="grid-black-color grid-3 md:col-span-2">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location</p>
            <p className="subtext">
              Based in Jalandhar, Punjab, India — open to remote opportunities
              worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 — CTA */}
        <div className="grid-special-color grid-4 md:col-span-2">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 — Tech Stack */}
        <div className="grid-default-color grid-5 md:col-span-2">
          <div className="z-10 w-[50%]"></div>
          <p className="headText">Tech Stack</p>
          <p className="subtext">
            I specialize in a variety of languages, frameworks, and tools that
            allow me to build robust and scalable applications.
          </p>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
