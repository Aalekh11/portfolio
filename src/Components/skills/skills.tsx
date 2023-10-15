import React, { useEffect, useMemo, useState } from "react";
import styles from "Components/skills/skills.module.css";
import { getIcon, IconProps } from "utils/getIcon";
import { motion } from "framer-motion";
import Redux from "../../assets/redux.png";
import HTML from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import css from "../../assets/css.png";
import node from "../../assets/node.png";
import jest from "../../assets/jest-logo.png";
import tailwind from "../../assets/tailwind.png";
import typescript from "../../assets/typescript.png";
import reactjs from "../../assets/reactjs.png";
import github from "../../assets/github.png";
import figma from "../../assets/figma.png"

const Icon = (props: IconProps) => getIcon({ ...props });

const Skill = ({ src, x, y }: any) => {
  return (
    <motion.div
      className="md:flex md:absolute items-center justify-center rounded-full font-semibold bg-dark py-3 px-6 shadow-dark text-black"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <img className="w-20 mx-auto" alt="" src={src} />
    </motion.div>
  );
};

function Skills() {
  const [toggle, handleToggle] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1023) {
        handleToggle(false);
      } else {
        handleToggle(true);
      }
    };
    window.addEventListener("resize", handleResize);
  });

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

  const frontendskills = useMemo(() => {
    return [
      "ReactJs",
      "Javascript",
      "Typescript",
      "Redux",
      "NextJs",
      "Tailwind Css",
      "HTML",
      "CSS",
      "UI/UX",
      "NodeJs",
      "SQL",
      "MongoDb",
      "CI/CD",
      "Git",
      "Express",
      "Jest",
      "React Testing Library",
      "Ant Design",
      "Canva",
    ];
  }, []);

  return (
    <div id="experience" className={styles?.content_wrapper}>
      <div className={styles?.image_wrapper}>
        <Icon icon="user" />
        {toggle && (
          <>
            <motion.div
              className="md:flex md:absolute items-center justify-center rounded-full font-semibold bg-dark py-3 px-6 shadow-dark text-black"
              whileHover={{ scale: 1.05 }}
              initial={{ x: 0, y: "5vw" }}
            >
              <img className="w-28" src={figma} alt="" />
            </motion.div>
            <Skill src={css} x="-8vw" y="12vw" />
            <Skill src={HTML} x="5vw" y="-14vw" />
            <Skill src={github} x="15vw" y="-16vw" />
            <Skill src={javascript} x="5vw" y="16vw" />
            <Skill src={tailwind} x="-11vw" y="21vw" />
            <Skill src={reactjs} x="-14vw" y="-5vw" />
            <Skill src={typescript} x="-8vw" y="-15vw" />
            <Skill src={Redux} x="13vw" y="-3vw" />
            <Skill src={jest} x="14vw" y="9vw" />
            <Skill src={node} x="-16vw" y="5vw" />
          </>
        )}
      </div>

      <div className="absolute md:relative flex flex-col md:w-[50%] md:gap-14">
        <div className="flex items-center justify-center text-gray-500 mb-[1rem] mt-5 md:mb-2 text-[3rem]">
          SKILLS
        </div>
        <div className="flex items-center text-center justify-center text-gray-50 mb-[4rem] md:mb-0 text-xl tracking-widest">
          Technologies I've worked with...
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:w-2/7 lg:mx-4 md:p-4">
            <div className="flex flex-wrap items-center justify-center flex-row h-full gap-8 md:gap-6">
              {frontendskills.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={index}
                    viewport={{ once: true }}
                    className="text-black bg-white rounded-2xl text-2xl p-2 md:p-4"
                  >
                    {item}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
