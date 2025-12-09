// src/components/About/About.jsx
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/tithi.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-6 px-[6vw] md:px-[7vw] lg:px-[20vw] font-sans mt-20 md:mt-24 lg:mt-28"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-16">
        {/* ========= LEFT SIDE ========= */}
        <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0 group transition-transform duration-500 ease-out md:hover:-translate-y-1">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            Naima Ashraf Tithi
          </h2>

          {/* Typing Effect Line */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#8245ec] leading-tight flex justify-center md:justify-start">
            <span className="text-white mr-2">I am a</span>
            <ReactTypingEffect
              text={[
                "MERN Stack Developer",
                "JavaScript Enthusiast",
                "Crafting Scalable Web Applications",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec] text-lg sm:text-xl md:text-2xl">
                  {cursor}
                </span>
              )}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 mt-4 leading-relaxed">
            Motivated Junior Frontend Developer with strong skills in JavaScript,
            React, and modern UI technologies. Dedicated to building responsive,
            user-friendly web interfaces and continuously improving through
            learning. Seeking an opportunity to grow within a dynamic engineering
            team and contribute to impactful web applications.
          </p>

          {/* Resume Button */}
          <a
            href="https://docs.google.com/document/d/1LnZQWytsOv2r_Wc5QKkazA5lxyiZMvr2vu8MWyf5Uuc/export?format=pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="
    inline-block text-white 
    py-2.5 px-6 sm:py-3 sm:px-8 
    rounded-full mt-3 sm:mt-5 
    text-sm sm:text-base md:text-lg 
    font-bold 
    transition-all duration-300 ease-out
    hover:scale-105 hover:-translate-y-0.5
    hover:shadow-[0_0_30px_rgba(130,69,236,0.9)]
  "
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 30px rgba(130,69,236,0.7)",
            }}
          >
            DOWNLOAD CV
          </a>

        </div>

        {/* ========= RIGHT SIDE (IMAGE) ========= */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="
              w-40 h-40 
              sm:w-56 sm:h-56 
              md:w-[22rem] md:h-[22rem] 
              lg:w-[26rem] lg:h-[26rem]
              border-2 sm:border-3 md:border-4 border-purple-700 
              rounded-full
              transition-transform duration-500 ease-out
            "
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Naima Ashraf Tithi"
              className="
                w-full h-full rounded-full object-cover 
                drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]
                transition-transform duration-500 ease-out
                hover:scale-[1.03]
              "
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
