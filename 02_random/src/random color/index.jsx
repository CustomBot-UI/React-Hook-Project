import { useEffect, useState } from 'react';

export default function RandomColor() {
    const [typeofcolor, setTypeofcolor] = useState("HEX");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    function handleCreateRandomRGBColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }
    useEffect (() => {
        if (typeofcolor === "RGB") {
            handleCreateRandomRGBColor();
        }
        else
            {
            handleCreateRandomHexColor();
        }
        }, [typeofcolor]);
    return (
 
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: color,
        }}>
            <button onClick={() => setTypeofcolor("HEX")}>Create HEX Color</button>
            <button onClick={() => setTypeofcolor("RGB")}>Create RGB Color</button>
            <button onClick={typeofcolor === "HEX" ?
                handleCreateRandomHexColor
                : handleCreateRandomRGBColor}>
                Generate Random Color
            </button>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '60px',
                color: '#fff',
                marginTop: '50px',
                flexDirection : 'column',
            }}>
                <h3>{typeofcolor === 'RGB' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>

            </div>
        </div >
    )
}