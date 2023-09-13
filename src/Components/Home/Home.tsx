import React from "react";
import Typewriter from "typewriter-effect";
import styles from "../Home/Home.module.css";
import { getIcon, IconProps } from "utils/getIcon";

const Icon = (props: IconProps) => getIcon({ ...props });

function Home() {
  return (
    <div className={styles?.content_wrapper}>
      <div className={styles?.purple_animator}></div>
      <div className={styles?.yellow_animator}></div>
      <div className={styles?.pink_animator}></div>

      <div className="flex flex-col md:items-center md:text-center md:justify-center">
        <div className="font-bold text-[60px]">
          <p className="">Aalekh Karhadkar</p>
        </div>
        <div className=" flex flex-col md:flex-row font-semibold text-[30px] md:text-[40px] md:gap-4">
          I'm a
          <div className="font-semibold md:text-[40px] text-[30px]">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [
                  "Frontend Developer.",
                  "Designer.",
                  "MERN-stack Developer.",
                  "Prototyper.",
                  "Tech Enthusiast.",
                  "Open-Source Contributor"
                ],
              }}
            />
          </div>
        </div>
        <div className={styles?.intro_content}>
          Seasoned frontend developer with two years of immersive experience in
          turning code into captivating user experiences. Translating designs
          into dynamic web experiences. Proficient in crafting clean,
          user-friendly interfaces that merge design with functionality. <br />
          Let's collaborate and bring your digital visions to reality.
        </div>
        <div className={styles?.icon_wrapper}>
          <button className="p-2">
            <Icon icon="linkedin" />
          </button>
          <button className="p-2">
            <Icon icon="instagram" />
          </button>
          <button className="p-2">
            <Icon icon="github" />
          </button>
        </div>
        <div className="flex items-center justify-center my-5">
          <button className={styles?.button_wrapper}>
            <div className="text-white relative">Portfolio</div>
            <img className="h-4 relative" alt="" src="./download.png" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
