import { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  let heroData = [
    {
      text1: "Dive into",
      text2: "what you love!",
    },
    {
      text1: "Indulge",
      text2: "your passions!",
    },
    {
      text1: "Give in to",
      text2: "your passions!",
    },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);

  return (
    <>
      <div>
        <Background play={play} heroCount={heroCount} />
        <Navbar />
        <Hero
          setPlay={setPlay}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          play={play}
        />
      </div>
    </>
  );
}

export default App;
