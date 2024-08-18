import React from "react";
import { styles } from "../styles/styles";
import programFlier from "../assets/melodyofthespiritBig.jpg";

const Header = () => {
  //bg-heroGradient fullb
  return (
      <section className={`${styles.container} relative flex sm:flex-nowrap flex-wrap justify-between items-center h-[100vh] mt-24 bg-heroGradient fullbg text-[white] w-full `}> 
        <div className=" flex flex-col items-center  gap-4 w-[100vw] md:w-[100vw] ">
          <h1 className={`${styles.h1}  text-[white] text-left`}>
           Melody Of The Spirit
          </h1>
          <h2 className={`${styles.h2}`}>A Carnival of Music and Arts</h2>
          <p> Loveworld, giving your Life a Meaning...</p>
          <div className="flex gap-4">
          <button
            className={`${styles.buttonPadding}  bg-blue-600 text-[white] `}
          >
            Learn More
          </button>
          <a href="#voteform"><button
            className={`${styles.buttonPadding}  bg-blue-600 text-[white] `}
          >
            Vote Now
          </button></a>
          </div>
        </div>
        {/* <div className=" hidden md:block">
        <img src={programFlier} alt="" />
        </div> */}
        
      </section>
  );
};

export default Header;
