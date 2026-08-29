import { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode() {
        setQrCode(input.trim());
    }

    return (
        <div className="qr-card">
            <h1>QR Code Generator</h1>

            <div className="qr-input-row">
                <input
                    className="qr-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    placeholder="Enter text here"
                />
                <button className="qr-button" disabled={!input.trim()} onClick={handleGenerateQrCode}>
                    Generate
                </button>
            </div>

            <div className="qr-box">
                {qrCode ? (
                    <QRCode id="qr-code-value" value={qrCode} size={220} bgColor="#ffffff" />
                ) : (
                    <div className="qr-placeholder">Your QR code will appear here</div>
                )}
            </div>
        </div>
    );
}