import React, { useState } from 'react';

const ColorDisplay = (currentColor) => {
  const [shownColor, setShownColor] = useState(currentColor);
  
  return ( 
    <div>
    <h1 style={{color: currentColor.currentColor.value}}>The Current Color is {currentColor.currentColor.value}</h1>
    </div>
  )

}

export default ColorDisplay;