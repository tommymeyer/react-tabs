import React, { useState } from "react";

export default function Tab({ children }) {
  const [highlightStyle, setHighlightStyle] = useState({ top: 0, left: 0, opacity: 0 });


  const moveHighlight = (e) => {
    setHighlightStyle({
      top: e.nativeEvent.layerY - 50,
      left: e.nativeEvent.layerX - 150
    });

    console.log(e.nativeEvent.layerY);
  }

  const hideHighlight = (e) => {
    setHighlightStyle({
      opacity: 0
    });
  }


  return (
    <li className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
      {children}
      <div className="highlight" style={highlightStyle} />
    </li>
  )
}
