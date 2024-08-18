import React, { useState } from "react";
import { styles } from "../styles/styles";
import { useEffect } from "react";

const cards = [
  {
    id: 1,
    title: "Our Programme1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos.",
    image:
      "/worship.jpg", // Image of a valley
    color: "#FFD700", // Example color for the background
  },
  {
    id: 2,
    title: "Our Programme1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=60", // Image of misty woodlands
    color: "#4CAF50",
  },
  {
    id: 3,
    title: "Our Programme1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=60", // Image of beautiful slopes
    color: "#FF5722",
  },
  {
    id: 4,
    title: "Our Programme1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos.",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60", // Image matching the theme
    color: "#9C27B0",
  },
];

const CardCarousel = () => {
  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const [animationKey, setAnimationKey] = useState(0);
  const [cardWidth, setCardWidth] = useState("200");
  const [translateX, setTranslateX] = useState(`translate-x-[${cardWidth}px]`);

  const handleCardClick = (card) => {
    setAnimationKey((prevKey) => prevKey + 1);
    setSelectedCard(card);
  };

  const handleNextClick = () => {
    const currentIndex = cards.indexOf(selectedCard);
    setAnimationKey((prevKey) => prevKey + 1);
    if (currentIndex === cards.length - 1) {
      setTranslateX(`translate-x-[${cardWidth  * currentIndex}px]`);
      return setSelectedCard(cards[0]); // Go to the first card if on the last one
    }
    setSelectedCard(cards[currentIndex + 1]);
    setTranslateX(`translate-x-[${cardWidth  * currentIndex}px]`); // Move to the next card
  };

  const handlePrevClick = () => {
    const currentIndex = cards.indexOf(selectedCard);
    setAnimationKey((prevKey) => prevKey + 1);
    if (currentIndex === 0) {
        setTranslateX(`-translate-x-[${cardWidth  * currentIndex}px]`);
      return setSelectedCard(cards[cards.length - 1]); // Go to the last card if on the first one
    }
    setSelectedCard(cards[currentIndex - 1]); // Move to the previous card
    setTranslateX(`-translate-x-[${cardWidth  * currentIndex}px]`);
  };

//   useEffect(() => {
  
//   }, [selectedCard])
  

  return (
    <div
    key={animationKey}
      className={`${styles.container}  relative  h-screen w-full flex flex-col justify-between items-center bg-cover bg-center animate-slide-in-right transition-transform`}
      style={{ backgroundImage: `url(${selectedCard.image})` }}
    >
      <h2 className="absolute top-0 left-5 text-3xl md:text-5xl font-bold rounded-sm p-4 brder border-blue-600 text-white">
        {cards.indexOf(selectedCard) + 1}
      </h2>
      <div>

      <p className="text-lg md:text-xl mt-2 text-white">{selectedCard.description}</p>
      </div>

      <div className="w-ful flex justify-between gap-10  space-x-4 pb-4 px-4 md:px-8 ">
        <div className=" flex flex-col justify-end items-center text-center text-white mb-8 px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold">
            {selectedCard.title}
          </h1>
          <p className="text-lg md:text-xl mt-2">{selectedCard.description}</p>

          <div className="flex gap-5 ">
            <span
              className="p-8 rounded-full bg-rightArrow bg-no-repeat bg-center rotate-180 border-2 border-r-blue-600 cursor-pointer"
              onClick={handlePrevClick}
            ></span>
            <span
              className="p-8 rounded-full bg-rightArrow bg-no-repeat bg-center border-2 border-r-blue-600 cursor-pointer"
              onClick={handleNextClick}
            ></span>
          </div>
        </div>
        <div
          className={`translate "${translateX}" flex items-end flex-nowrap gap-10  `}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`min-w-[200px] md:min-w-[200px] h-[240px] md:h-[300px] border border-t-blue-600 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-center bg-cover cursor-pointer `}
              onClick={() => handleCardClick(card)}
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            >
              <div className="bg-black bg-opacity-50 p-4 rounded-lg h-full flex flex-col justify-end">
                <h2 className="text-md md:text-lg font-bold text-white">
                  {card.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
