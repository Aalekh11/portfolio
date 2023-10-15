import React, { useCallback } from "react";
import Typewriter from "typewriter-effect";
import styles from "../Home/Home.module.css";
import { getIcon, IconProps } from "utils/getIcon";
import { motion } from "framer-motion";
import { downloadFile } from "utils/DownloadFile";
import { BsDownload } from "react-icons/bs";
import { getLinks } from "utils/getLinks";

const Icon = (props: IconProps) => getIcon({ ...props });

function Home() {

  const links=getLinks();
  

  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const handleNavigation = useCallback((value: string) => {
    window.open(value);
  }, []);

  return (
    <div id="home" className={styles?.content_wrapper}>
      <div className={styles?.purple_animator}></div>
      <div className={styles?.yellow_animator}></div>
      <div className={styles?.pink_animator}></div>

      <div className="flex flex-col md:items-center md:text-center md:justify-center">
        <div className="font-bold text-[20px]">Hello, I'm</div>
        <div className="font-bold text-[60px]">
          <p className="">Aalekh Karhadkar</p>
        </div>
        <div className=" flex flex-col md:flex-row font-semibold text-[30px] md:text-[40px] md:gap-4">
          a
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
                  "Open-Source Contributor.",
                ],
              }}
            />
          </div>
        </div>
        <div className={styles?.intro_content}>
          {
            "I'm a frontend developer specializing in building (and occasionally designing) exceptional digital experience. Currently, I'm focused on building responsive full-stack web application."
          }
        </div>
        <motion.div
          className={styles?.icon_wrapper}
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
        >
          <button onClick={() => handleNavigation(links?.linkedin)} className="p-2">
            <Icon icon="linkedin" />
          </button>
          <button onClick={() => handleNavigation(links?.instagram)} className="p-2">
            <Icon icon="instagram" />
          </button>
          <button onClick={() => handleNavigation(links?.github)} className="p-2">
            <Icon icon="github" />
          </button>
        </motion.div>
        <motion.div
          className="flex items-center justify-center my-5"
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <button
            onClick={() => downloadFile(links?.CVlink)}
            className={styles?.button_wrapper}
          >
            <div className="text-white flex items-center gap-2 relative">
              Portfolio <BsDownload />
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
