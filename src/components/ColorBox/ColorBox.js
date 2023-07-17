import React, { useState } from 'react';

export function ColorBox(props) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
     };

  return (
    <div
        onMouseEnter={()=>handleMouseEnter()} 
        onMouseLeave={()=>handleMouseLeave()} 
        style={{
            "width": "10vw",
            "paddingTop":"10%", 
            "cursor":"pointer",
            "background": isHover ? props.changedColor : props.backColor
            }}
    ></div>
  );
}

export default ColorBox;