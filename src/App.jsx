import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import DrumPad from './components/DrumPad';

function App() {
  const [displayText, setDisplayText] = useState('');
  const drumpads = [
    {
      name:"Heater 1",
      src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      drumKey:"Q"
    },
    {
      name:"Heater 2",
      src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      drumKey:"W",
    },
    {
      name:"Heater 3",
      src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      drumKey:"E"
    },
    {
      name:"Heater 4",
      src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      drumKey:"A"
    },
    {
      name:"Clap",
      src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      drumKey:"S"
    },
    {
      name:"Open-HH",
      src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      drumKey:"D"
    },
    {
      name:"Kick-n'-Hat",
      src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      drumKey:"Z"
    },
    {
      name:"Kick",
      src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      drumKey:"X"
    },
    {
      name:"Closed-HH",
      src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      drumKey:"C"
    },
  ]
  useEffect(() => {
    const handleKey = (event) => {
      const drumpad = drumpads.find(pad => pad.drumKey === event.key.toUpperCase());
      if (drumpad) {
        setDisplayText(drumpad.name);
        const audio = new Audio(drumpad.src);
        audio.play();
      }
    };

    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  
  const handleClick = (drumKey) => {
    const drumpad = drumpads.find(pad => pad.drumKey === drumKey);
    if (drumpad) {
      setDisplayText(drumpad.name);
      const audio = new Audio(drumpad.src);
      audio.play();
    }
  };

  
  return (
    <div className="App flex justify-center my-10 ">
    <div id="drum-machine" className='flex justify-center flex-wrap w-1/4 my-10 '>
      {drumpads.map(drumpad => (
        <DrumPad
          key={drumpad.drumKey}
          drumKey={drumpad.drumKey}
          src={drumpad.src}
          onClick={() => handleClick(drumpad.drumKey)}
        />
      ))}
    </div>
    
    <div id="display" className="text-3xl font-bold underline flex w-1/3 h-96 justify-center items-center">
      {displayText}
    </div>
  </div>
  );
}

export default App;
