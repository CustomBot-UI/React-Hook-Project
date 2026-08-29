import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator(){
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')
    function handleGenerateQrCode(){
        setQrCode(input);
    }
    return (
    <div>
            <h1>QR Code Generator</h1>
    <div>
        <input disabled = {input && input.length.trim() !== '' ? false : true } onChnage={(e)=> setInput(e.target.value)} type = "text" name = "qr-code" placeholder='Enter Your Value Here!'/>
        <button onClick={handleGenerateQrCode}>Generate</button>
    </div>
    <div>
        <QRCode id = "qr-code-value"
        value = {qrCode}
        size ={400}
        bgColor = '#fff'
        />
    </div>

    </div>
    )
    
}