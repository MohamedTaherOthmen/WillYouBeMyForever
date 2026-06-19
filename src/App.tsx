"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    const randomX = Math.floor(Math.random() * 80) + 10; // Between 10% and 90%
    const randomY = Math.floor(Math.random() * 80) + 10; // Between 10% and 90%
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Aaaaaaa3 !! Are you sure ? ",
      "What if I asked really nicely?",
      "Amourty Please",
      "Gateau glacé Cerise Chocolat Noir !!!",
      "Bahy nzidd Nakhoulik maah Glace Chocolat Noir o Cerise",
      "Bahyy Ameel Tala lfouk ala tssawrna ma7leennaa !!",
      "Tssawer li rytehom Hathom el kol ma hanouch alikk ???",
      "I am going to die",
      "Yep im dead",
      "Walahi la tihcheemm !! ok ur talking to Taher's ghost",
      "Makhyeebb Rasssekkk",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getNoButtonImage = () => {
    if (noCount === 0) {
      return "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";
    }

    // When she clicks "No" (noCount > 0), use the custom images.
    // noCount = 1 -> 1.jpeg, noCount = 2 -> 2.jpeg, etc. up to 10 -> last.jpeg
    const imageNumber = Math.min(noCount, 10);
    const fileName = imageNumber === 10 ? 'last.jpeg' : `${imageNumber}.jpeg`;
    return `${import.meta.env.BASE_URL}custom_images/${fileName}`;
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
          <div className="my-4 text-5xl font-bold text-pink-600 drop-shadow-md">Ghoneyaa li kaneet sbab bch hkit maaak khaliha tkoun sbab bch narj3ou li b3adhna ! Nhebek Barchaaaaaaaaa Amourtyy !</div>
          <audio autoPlay loop src={`${import.meta.env.BASE_URL}song.mp3`} />
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
              className={`rounded-full bg-red-500 px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-110 hover:bg-red-600 ${noCount > 0 ? 'fixed' : ''}`}
              style={noCount > 0 ? { left: `${noButtonPosition.x}%`, top: `${noButtonPosition.y}%` } : {}}
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
