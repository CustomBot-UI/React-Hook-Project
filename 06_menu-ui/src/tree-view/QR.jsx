import { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode() {
        setQrCode(input);
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    placeholder="Enter Your Value Here!"
                />
                <button disabled={!input.trim()} onClick={handleGenerateQrCode}>
                    Generate
                </button>
            </div>
            <div>
                {qrCode ? (
                    <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
                ) : null}
            </div>
        </div>
    );
}