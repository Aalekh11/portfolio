import React, { useMemo } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { getLinks } from "utils/getLinks";
import Portfolio from "../../assets/Portfolio.png";
import Todo from "../../assets/todo.png"
import Dashboard from "../../assets/dashboard.png"
import Node from "../../assets/node.png"

function Works() {
  const links = getLinks();

  const portfoliodata = useMemo(() => {
    return [
      {
        title: "Personal Portfolio",
        src: Portfolio,
        techUsed: [
          "ReactJs",
          "Typescript",
          "TailwindCSS",
          "Framer Motion",
          "Canva",
          "React Hooks",
        ],
        links: links?.portfolio,
      },
      {
        title: "To Do List",
        src: Todo,
        techUsed: ["HTML", "CSS", "Vanilla Javascript"],
        links: links?.todolist,
      },
      {
        title: "Generic Dashboard",
        src: Dashboard,
        techUsed: [
          "ReactJs",
          "Ant Design",
          "Typescript",
          "Context API",
          "Axios",
          "React Hooks",
        ],
        links: links?.dashboard,
      },
      {
        src: Node,
        title: "REST API Server",
        techUsed: ["Javascript", "Express JS", "File System", "SQL"],
        links: links?.RestServer,
      },
    ];
  }, [links]);

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
    <div id="works" className="bg-black">
      <div className="flex items-center justify-center w-screen text-white text-3xl font-bold p-4 my-10">
        Some things I've built
      </div>
      <div className="flex flex-col  items-start justify-center rounded-2xl shadow-2xl bg-black mx-6 md:mx-[5rem] gap-5 p-3">
        {portfoliodata?.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={index}
              className="md:w-full md:h-full items-center justify-center flex flex-col md:flex-row gap-3 rounded-2xl p-4 border-white/[0.2] border-2"
            >
              <div className="md:w-1/4 border-slate-600 rounded-3xl border-2">
                <img className="rounded-3xl " alt="" src={item.src} />
              </div>
              <div className="md:w-3/4 flex gap-8 items-center justify-center md:items-start md:justify-start md:text-center flex-col">
                <div className="flex flex-col justify-center gap-2 items-center md:items-start md:justify-start">
                  <div className="text-[2rem] text-white">{item.title}</div>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {item?.techUsed?.map((skill, index) => {
                      return (
                        <div
                          key={index}
                          className="px-5 py-3 rounded-xl border hover:bg-white hover:text-black border-white/[0.4] text-white"
                        >
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 ">
                  <button
                    onClick={() => window.open(item?.links?.demolink)}
                    className="px-4 py-1 rounded-xl flex items-center hover:bg-white hover:text-black justify-center gap-1 border border-white text-white"
                  >
                    Demo <BsArrowUpRightCircleFill />
                  </button>
                  <button
                    onClick={() => window.open(item?.links?.sourcelink)}
                    className="px-4 py-1 rounded-xl border border-cyan/[0.1] text-cyan-500"
                  >
                    Source
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Works;
