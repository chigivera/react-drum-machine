import React from 'react';

function DrumPad({ drumKey, src, onClick }) {
  const handleClick = () => {
    onClick(drumKey); // Call the onClick event handler with the drumKey as argument
  };

  return (
    <div className="drum-pad" id={drumKey} onClick={handleClick}>
      {drumKey}
      <audio className="clip" id={`${drumKey}-sound`} src={src}></audio>
    </div>
  );
}

export default DrumPad;
