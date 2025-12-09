// src/components/Skills/Skills.jsx
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-20 sm:py-24 px-4 sm:px-6 md:px-10 font-sans bg-skills-gradient clip-path-custom"
  >
    <div className="max-w-6xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          SKILLS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3" />
        <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through
          projects and experience
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-[#050818]/90 backdrop-blur-md px-5 py-6 sm:px-7 sm:py-7
                       rounded-2xl border border-white/10
                       shadow-[0_0_20px_1px_rgba(130,69,236,0.25)]
                       flex flex-col items-stretch"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-5 text-center">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={900}
              scale={1.02}
              transitionSpeed={900}
              gyroscope
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-start sm:justify-center gap-2
                               border border-gray-700/70 rounded-3xl
                               py-1.5 px-2.5 sm:py-2 sm:px-3
                               bg-black/10 hover:bg-white/5
                               transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="text-[11px] sm:text-xs md:text-sm text-gray-200 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
