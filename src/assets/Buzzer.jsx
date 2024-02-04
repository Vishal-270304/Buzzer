import React, { useState } from 'react';

function Buzzer() {
  const [clickTime, setClickTime] = useState(null);

  function playSound() {
    let audio = new Audio("sounds/buzzerSound.wav");
    audio.play();
  }

  function getTime() {
    let date = new Date();
    let time = date.getSeconds();
    return time;
  }

  return (
    <div>
      <h1>Time: {clickTime}</h1>
      <div className='main'>
        <div className='buzzer-container'>
          <img
            src="images/buzzerImage.jpg"
            onClick={() => {
              playSound();
              const currentTime = getTime();
              setClickTime(currentTime);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Buzzer;
