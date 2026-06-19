"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Aaaaaaa3 !! Are you sure ? ",
      "What if I asked really nicely?",
      "Amourty Please",
      "Gateau glace Cerise Chocolat Noir !!!",
      "Nakhoulik Glace Chocolat Noir o Cerise",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "Walahi la tihcheemm !! ok ur talking to Taher's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getNoButtonImage = () => {
    // We have 10 images (1.jpg to 10.jpg). 
    // We use Math.min to ensure we cap out at 10.jpg even if they keep clicking No.
    const imageNumber = Math.min(noCount + 1, 10);
    return `${import.meta.env.BASE_URL}custom_images/${imageNumber}.jpg`;
  };

  // Generate random floating hearts for the background
  const hearts = Array.from({ length: 40 }).map((_, i) => {
    const left = Math.random() * 100;
    const animationDuration = 5 + Math.random() * 10;
    const animationDelay = Math.random() * 10;
    const fontSize = 1 + Math.random() * 1.5;
    
    return (
      <div
        key={i}
        className="heart-particle"
        style={{
          left: `${left}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
          fontSize: `${fontSize}rem`,
        }}
      >
        {Math.random() > 0.5 ? '❤️' : '💕'}
      </div>
    );
  });

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center text-center">
      <div className="hearts-container">{hearts}</div>
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-5xl font-bold text-pink-600 drop-shadow-md">WOOOOOO!!! I love you pookie!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src={getNoButtonImage()}
          />
          <h1 className="my-4 text-5xl font-bold text-pink-600 drop-shadow-md">Will you be mine forever?</h1>
          <div className="flex items-center z-10">
            <button
              className={`mr-4 rounded-full bg-green-500 px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded-full bg-red-500 px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-110 hover:bg-red-600"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
