import React, { useState } from "react";
import styles from "Components/Header/Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [nav, setNav] = useState(false);
  //   useEffect(() => {
  //     window.addEventListener('scroll', isSticky);
  //     return () => {
  //         window.removeEventListener('scroll', isSticky);
  //     };
  // });

  // const isSticky = (e) => {
  //   const header = document.querySelector('.header-section');
  //   const scrollTop = window.scrollY;
  //   scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  // };

  return (
    <div className="fixed z-10 flex justify-between items-center w-full h-[75px] text-white bg-black">
      <div className="ml-2 w-[25%] text-center">@alekh.karhadkar</div>

      <div className="w-[75%] hidden md:flex flex-col md:flex-row gap-5 text-white text-center items-center justify-end md:mr-10">
        <div className={styles.button_wrapper}>Home</div>

        <div className={styles.button_wrapper}>Skills</div>

        <div className={`${styles.button_wrapper} w-10`}>Experience</div>

        <div className={styles.button_wrapper}>Works</div>

        <div className={styles.button_wrapper}>Hire me</div>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 pr-4 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center md:hidden  items-center absolute md:relative lg:relative top-0 left-0 w-full h-screen bg-black text-white">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">Home</li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            Skills
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            Experience
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            Works
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            Hire me
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
