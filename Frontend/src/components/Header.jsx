import React from "react";
import { styles } from "../styles/styles";

const Header = () => {
  return (
    <div className="container  relative flex  sm:flex-nowrap flex-wrap  gap-[20px]  mt-[70px] sm:mt-[100px] ">
      <section className="mt-[30px]  w-100 h-[80vh]">
        <div className="">
          <h1 className={`${styles.heading}  text-left`}>
            Loveworld, giving your Life a Meaning...
          </h1>
        </div>
        <div className="py-[20px] text-[16px] sm:text-[22px] text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          repudiandae, ducimus aliquid delectus eos quisquam. Eum quisquam in
          sed totam quos asperiores accusamus saepe, placeat cum cupiditate
          molestiae fugiat sunt corrupti. Omnis recusandae ullam aliquam
          laudantium, repellat deserunt voluptatum necessitatibus minima error,
          rem nostrum deleniti neque tempore officiis, iusto perspiciatis!
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
