import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './index.css'; // Ensure you are importing your CSS file here 

function QRCodeGenerator() {
  const [inputType, setInputType] = useState('url');
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQRValue] = useState('');
  const [darkMode, setDarkMode] = useState(true);

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 transition-colors">
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
            <div className="mt-6 flex justify-center">
              <QRCodeSVG value={qrValue} size={180} className="border p-2 bg-gray-50 dark:bg-gray-700 rounded" />
            </div>
          )}
        </div>
        {/* Senseads Advertising Placeholder */}
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-inner text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Free, Fast and Any Account or Info not requied</p>
        </div>
      </div>
    </div>
  );
}

export default QRCodeGenerator;
