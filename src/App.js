import './App.css';
import {useState} from "react";

function App() {
  const [color1, setColor1] = useState('red')
  const [color2, setColor2] = useState('blue')

    function swapColors (){
      setColor1(color2)
        setColor2(color1)
    }

  return (
    <div>
      <div onClick={swapColors} style={{width: '200px', height: '200px', backgroundColor: color1}}></div>
      <div onClick={swapColors} style={{width: '200px', height: '200px', backgroundColor: color2}}></div>
    </div>
  );
}

export default App;
