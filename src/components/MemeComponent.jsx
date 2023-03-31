import React, { useState } from 'react';
import memesData from '../assets/memeData';
import '../style.css'

export default function Meme() {
  // console.log(randMeme.url);

  const [img, setImg] = useState('');


  function getImg() {
    const meme = memesData.data.memes;
    const randMeme = meme[Math.floor(Math.random() * meme.length)].url;
    setImg(randMeme)
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getImg}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="memeImage">
        <img src={img} alt="" className="meme--image" />
      </div>
    </main>
  );
}
