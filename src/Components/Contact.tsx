import React, { useCallback } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

function Contact() {
  const handleNavigator = useCallback((value: string) => {
    window.open(value);
  }, []);
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
    <div id="contact" className="mt-20 bg-white h-screen w-screen flex flex-col gap-5 items-center justify-center p-3">
      <motion.div
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        className="flex flex-col h-3/4 md:h-1/2 md:w-1/2 justify-center items-center p-3 border rounded-2xl border-black gap-5"
      >
        <div className="text-black text-[3rem] font-bold">Get In Touch</div>
        <motion.div
          onClick={() => handleNavigator("https://github.com/Aalekh11")}
          className="px-5 py-3 flex items-center gap-4 text-3xl rounded bg-black text-white"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <AiFillGithub /> Github
        </motion.div>
        <motion.div
          onClick={() =>
            handleNavigator("https://www.linkedin.com/in/aalekh-karhadkar/")
          }
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="px-5 py-3 flex items-center gap-4 text-3xl rounded bg-[#0077B5] text-white"
        >
          <AiFillLinkedin /> LinkedIn
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={() => handleNavigator("mailto:karhadkaraalekh@gmail.com")}
          className="px-5 cursor-pointer py-3 flex items-center gap-4 text-2xl  border border-black rounded  text-black"
        >
          <span className="text-[#ff4343]">
            <BiLogoGmail />
          </span>{" "}
          karhadkaraalekh@gmail.com
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
