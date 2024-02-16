import React from "react";
import { styles } from "../styles/styles";

const Header = () => {
  return (
    <div className="container  relative flex sm:flex-nowrap flex-wrap  gap-[20px]  mt-[70px] sm:mt-[100px] ">
      <section className="mt-[30px]  w-100">
        <div className="headerTextContainer ">
          <h1 className={`${styles.heading} px-[10px] text-left`}>
            Loveworld, giving your Life a Meaning...
          </h1>
        </div>
        <div className="flex  flex-col sm:flex-row justify-end text-[right] my-[10px]">
          <button
            className={`${styles.buttonPadding}  bg-Purple-60 text-[white] `}
          >
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Header;
