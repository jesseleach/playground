/* 
import { useState } from "react";



const ColorChange = () => {
  const [isFontLarge, setIsFontLarge] = useState(false);
  const divStyle = { fontSize: isFontLarge ? "25px" : "12px" };

  const onFontChangeHandler = () => {
    setIsFontLarge((isLarge) => !isLarge);
  };

  return (
    <div>
      <div style={divStyle}>test</div>
      <p>The data is{isFontLarge ? "large" : "small"} </p>
      <button onClick={onFontChangeHandler}>Change Font size</button>
    </div>
  );
}; 

const ColorChange = () => {
  const [font, setFont] = useState('false');
  const divStyle = { fontSize: font };

  return (
<div>
<p>The data is{font? ' small' : 'big'} </p>
<button onClick={() => setFont(true)}>
  make small
</button>
<button onClick={() => setFont(false)}>
  make big
</button>
</div>
  );
}

export default ColorChange;
*/