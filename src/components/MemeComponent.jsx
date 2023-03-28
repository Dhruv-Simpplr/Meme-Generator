import '../style.css';
import { useState } from 'react';
function MemeComp() {
  const [count, setCount] = useState(() => {
    console.log('Run USE STATE');
    return 0;
  });
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <main className="form">
      <input type="text" placeholder="Top Text" className="form--input" />
      <input type="text" placeholder="Bottom Text" className="form--input" />
      <button className="form--button" onClick={handleClick}>
        Get A New Meme 😂 {count}
      </button>
    </main>
  );
}
export default MemeComp;
