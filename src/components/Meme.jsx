import { useState } from "react";
import memesData from "../memesData";

// console.log(memesData.data.memes);

export default function Meme() {
  const [meme, setMemeImage] = useState("https://i.imgflip.com/1g8my4.jpg");

  const getImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  };
  return (
    <main>
      <form action="#">
        <input type="text" placeholder="Top Section" />
        <input type="text" placeholder="Buttom Section" />
        <input
          type="submit"
          onClick={getImage}
          className="submit"
          value="Get a new meme image 🌁"
        />
      </form>

      <div className="image">
        <img src={meme} alt="" />
      </div>
    </main>
  );
}
