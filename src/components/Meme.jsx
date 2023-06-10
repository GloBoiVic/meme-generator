import { useState } from "react";
import memesData from "../memesData";

// console.log(memesData.data.memes);

export default function Meme() {
  //Initialize state and pass it the object format we want
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // Init another state variable to hold the memesData coming from our data
  const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes);

  /*
  Function that manipulates state. We create a random number function that 
  gets a new random url everytime
  */
  const getImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url }; // we return a new object from preMeme
    });
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
        <img src={meme.randomImage} alt="" />
      </div>
    </main>
  );
}
