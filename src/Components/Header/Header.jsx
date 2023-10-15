import React, { useMemo, useState } from "react";
import styles from "Components/Header/Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Header() {
  const [nav, setNav] = useState(false);

  const links = useMemo(() => {
    return [
      { id: 1, link: "home" },
      { id: 2, link: "about" },
      { id: 3, link: "experience" },
      { id: 4, link: "works" },
      { id: 5, link: "contact" },
    ];
  }, []);

  return (
    <div className="fixed z-10 flex justify-between items-center w-full h-[75px] text-white bg-black">
      <div className="ml-2 w-[25%] text-center">@alekh.karhadkar</div>

      <div className="w-[75%] hidden md:flex flex-col md:flex-row gap-5 text-white text-center items-center justify-end md:mr-10">
        <div className={styles.button_wrapper}><Link to="home" smooth delay={300}>Home</Link></div>

        <div className={styles.button_wrapper}><Link to="about" smooth delay={300}>About me</Link></div>

        <div className={`${styles.button_wrapper} w-10`}><Link to="experience" smooth delay={300}>Experience</Link></div>

        <div className={styles.button_wrapper}><Link to="works" smooth delay={300}>Works</Link></div>

        <div className={styles.button_wrapper}><Link to="contact" smooth delay={300}>Contact</Link></div>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 pr-4 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center md:hidden  items-center absolute md:relative lg:relative top-0 left-0 w-full h-screen bg-black text-white">
          {links.map(({ id, link }) => {
            return (
              <div
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={()=>setNav(false)} to={link} smooth delay={300}>
                  {link}
                </Link>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Header;
