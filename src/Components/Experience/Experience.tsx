import React from "react";
import styles from "Components/Experience/Experience.module.css";
import { HiArrowSmRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import User from "../../assets/unnamed.png"

export default function Experience() {
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

  return (
    <>
      <div id="about" className={styles?.container}>
        <motion.div
          className="md:hidden flex text-center items-center justify-center lg:ml-20 lg:w-[60%] p-5"
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
        >
          <img
            className="md:w-[140vh] md:h-[47vh] rounded-2xl"
            src={User}
            alt=""
          />
        </motion.div>
        <div className="flex md:w-full flex-col justify-center text-center items-center md:mx-[8rem] text-white text-lg sm:text-2xl md:text-3xl p-8 gap-[1px]">
          <div>
            Seasoned frontend developer with 2+ years of immersive experience
            in turning code into captivating user experiences. Translating
            designsinto dynamic web experiences. Proficient in crafting
            clean,user-friendly interfaces that merge design with functionality.
          </div>
          <br />
          <div>
            {" "}
            Let's collaborate and bring your digital visions to reality.
          </div>
        </div>
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="contact" smooth delay={300} className="bg-blue-600 p-3 cursor-pointer text-white flex items-center justify-center rounded-3xl mb-4 gap-1">
            Let's Connect
            <HiArrowSmRight />
          </Link>
        </motion.div>
      </div>
    </>
  );
}
