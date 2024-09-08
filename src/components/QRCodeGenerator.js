import { QRCodeSVG } from 'qrcode.react';
import React, { useState, useEffect, useRef } from 'react';
import '../index.css'; 
import {Link} from 'react-router-dom';


function QRCodeGenerator() {
    const [inputType, setInputType] = useState('url');
    const [inputValue, setInputValue] = useState('');
    const [qrValue, setQRValue] = useState('');
    const [darkMode, setDarkMode] = useState(true);
    
    const qrRef = useRef(null);
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleTypeChange = (value) => {
      setInputType(value);
      setInputValue('');
      setQRValue('');
    };
  
    const generateQRCode = () => {
      let finalValue = inputValue.trim();
      switch (inputType) {
        case 'email':
          finalValue = `mailto:${finalValue}`;
          break;
        case 'phone':
          finalValue = `tel:${finalValue}`;
          break;
        case 'sms':
          finalValue = `sms:${finalValue}`;
          break;
        case 'maps':
          finalValue = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(finalValue)}`;
          break;
        default:
          break;
      }
      setQRValue(finalValue);
    };
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    // Apply or remove dark mode class on the root element
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);
  
    const downloadQRCode = () => {
      const svg = qrRef.current.querySelector('svg');
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
  
      // Define the sizes
      const qrSize = 180; // QR code size
      const padding = 10; // Padding between QR code and signature
      const signatureHeight = 30; // Space for signature text
      const margin = 40; // Margin around the QR code
      const totalSize = qrSize + padding + signatureHeight + margin * 2; // Total size including margin
  
      // Set canvas size to include the margin
      canvas.width = totalSize;
      canvas.height = totalSize;
  
      img.onload = function () {
        // Draw background and margin
        ctx.fillStyle = 'white'; // Set background to white
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        // Center the QR code on the canvas
        const qrX = (canvas.width - qrSize) / 2; // X-coordinate to center the QR code
        const qrY = (canvas.height - qrSize - padding - signatureHeight) / 2; // Y-coordinate to center the QR code and leave space for the signature
  
        // Draw QR code in the center with margins
        ctx.drawImage(img, qrX, qrY, qrSize, qrSize);
  
        // Draw signature text below the QR code
        ctx.font = '16px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText('www.free-qr-code.pt', canvas.width / 2, qrY + qrSize + padding + signatureHeight / 2);
  
        // Convert canvas to PNG and trigger download
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngFile;
        downloadLink.download = 'qr-code-with-signature.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    };
  
    return (
      <div className="min-h-screen flex flex-col justify-between bg-gray-50 dark:bg-gray-900 p-6 transition-colors">
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 dark:text-gray-200 rounded-xl shadow-lg p-8 max-w-lg w-full">
            {/* Logo Section */}
            <div className="flex justify-center mb-6">
              <img src={`${process.env.PUBLIC_URL}/QR.png`} alt="QR Code Generator Logo" className="h-80 w-80" />
            </div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">QR Code Generator</h2>
              <button
                onClick={toggleDarkMode}
                className="text-sm px-3 py-1 border rounded-lg shadow-sm bg-gray-100 dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="input-type" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  Select Input Type
                </label>
                <select
                  id="input-type"
                  value={inputType}
                  onChange={(e) => handleTypeChange(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
                >
                  <option value="url">URL</option>
                  <option value="text">Text</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="sms">SMS</option>
                  <option value="maps">Google Maps</option>
                </select>
              </div>
              <div>
                <label htmlFor="input-value" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  Enter {inputType.charAt(0).toUpperCase() + inputType.slice(1)}
                </label>
                <input
                  id="input-value"
                  type={inputType === 'email' ? 'email' : 'text'}
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder={`Enter ${inputType}...`}
                  className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
                />
              </div>
              <button
                onClick={generateQRCode}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Generate QR Code
              </button>
              {qrValue && (
                <div ref={qrRef} className="mt-6 flex justify-center">
                  <QRCodeSVG value={qrValue} size={180} className="border p-2 bg-gray-50 dark:bg-gray-700 rounded" />
                </div>
              )}
              {qrValue && (
                <button
                  onClick={downloadQRCode}
                  className="w-full flex justify-center py-2 px-4 mt-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                  Download QR Code
                </button>
              )}
            </div>
            {/* Senseads Advertising Placeholder */}
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-inner text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Free, Fast and No Account or Info Required</p>
            </div>
          </div>
        </div>
        {/* Footer with Privacy Policy Link */}
        <footer className="text-center py-4 flex flex-col items-center">
          <Link to="/privacy-policy" className="text-blue-500 hover:underline mb-2">
            Privacy Policy
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Created by</span>
            <a href="https://www.dss-pro.pt" className="flex items-center">
              {/* Logo Section */}
                <div className="flex justify-center mb-6">
                <img
                    src="https://www.dss-pro.pt/assets/logo.cfd85e73.svg" // Use the SVG URL
                    alt="DSPRO Logo"
                    className="h-10"
                    style={{
                    filter: darkMode ? 'invert(30%) brightness(100%)' : 'invert(0%) brightness(0%)',
                    }}
                />
                </div>


            </a>
          </div>
        </footer>
      </div>
    );
  }

  export default QRCodeGenerator;