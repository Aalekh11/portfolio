import React from "react";
import styles from "Components/skills/skills.module.css";

type Techtype = {
  id: number;
  src: string;
  title: string;
  style: string;
};

function Skills() {
  const techs: Techtype[] = [
    {
      id: 1,
      src: "html.png",
      title: "HTML",
      style: "shadow-orange-400",
    },
    {
      id: 2,
      src: "javascript.png",
      title: "Javascript",
      style: "shadow-yellow-400",
    },
    {
      id: 3,
      src: "reactjs.png",
      title: "ReactJs",
      style: "shadow-blue-400",
    },
    {
      id: 4,
      src: "typescript.png",
      title: "Typescript",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: "nextJs.png",
      title: "NextJs",
      style: "shadow-white",
    },
    {
      id: 6,
      src: "tailwind.png",
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: "css.png",
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 8,
      src: "github.png",
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: "redux.png",
      title: "Redux",
      style: "shadow-purple-400",
    },
    {
        id: 10,
        src: "redux.png",
        title: "Nodejs",
        style: "shadow-green-400",
      },
  ];

  return (
    <div className={styles?.content_wrapper}>
      <div className={styles?.image_wrapper}>
        <img alt="" src="skills.jpg" />
      </div>
      <div className="flex flex-col md:w-[50%] gap-5">
      <div className="flex items-center justify-center text-gray-500">
        SKILLS
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-6 px-10 sm:px-0">
        {techs.map(({ id, src, title, style }: Techtype) => {
          return (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className="w-20 mx-auto mix-blend-normal"/>
              <p className="mt-4">{title}</p>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default Skills;
