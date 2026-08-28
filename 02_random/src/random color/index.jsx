import {useState} from 'react';    

export default function RandomColor() {
    const [typeofcolor , setTypeofcolor] = useState("HEX");
    const[color, setColor] = useState("#000000");

    function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
    }
        
    function handleCreateRandomHexColor() {
        const hex = [ 1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
      setColor(hexColor);       
    }

    function handleCreateRandomRGBColor() {

    }

    return (

        <div style={{width : '100vw',
            height : '100vh'    ,
            backgroundColor : color,
        }}>
            <button onClick= {()=> setTypeofcolor("HEX")}>Create HEX Color</button>
            <button onClick= {()=> setTypeofcolor("RGB")}>Generate RGB Color</button>
            <button onClick= {typeofcolor === "RANDOM" ? handleCreateRandomHexColor : handleCreateRandomRGBColor}>Generate Random Color</button>
        </div >
    )
}