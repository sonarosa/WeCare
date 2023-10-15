import React, { useState } from 'react';
import { useColor } from './ColorContext';
import './SettingsPage.css'; // Import the CSS file

function SettingsPage() {
  const { setColor } = useColor();
  const { backgroundColor } = useColor();
  const [darkMode, setDarkMode] = useState(false);
  const [colorPalette, setColorPalette] = useState('normal'); // Added state for color palette
  const [fontColor, setFontColor] = useState('#000000'); // Added state for font color
  const [fontSize, setFontSize] = useState('16px'); // Added state for font size

  const handleColorChange = (color) => {
    setColor(color);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    const newColor = darkMode ? '#ffffff' : '#000000';
    setColor(newColor);
  };

  const handleColorPaletteChange = (palette) => {
    setColorPalette(palette);
    // Adjust the color based on the selected palette
    switch (palette) {
      case 'monochromatism':
        setColor('#808080');
        break;
      case 'dichromatism':
        setColor('#3366CC');
        break;
      case 'anomalous-trichromatism':
        setColor('#FF6600');
        break;
      default:
        setColor(darkMode ? '#000000' : '#ffffff');
        break;
    }
  };

  const handleFontColorChange = (color) => {
    setFontColor(color);
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  return (
    <div style={{ backgroundColor }}>
      <h1>Settings Page</h1>
      <div>
        <label htmlFor="darkModeToggle">Dark Mode:</label>
        <input
          type="checkbox"
          id="darkModeToggle"
          checked={darkMode}
          onChange={handleDarkModeToggle}
        />
      </div>
      <div>
        <label htmlFor="colorPaletteSelect">Color Palette:</label>
        <select
          id="colorPaletteSelect"
          value={colorPalette}
          onChange={(e) => handleColorPaletteChange(e.target.value)}
        >
          <option value="normal">Normal Vision</option>
          <option value="monochromatism">Monochromatism</option>
          <option value="dichromatism">Dichromatism</option>
          <option value="anomalous-trichromatism">Anomalous Trichromatism</option>
        </select>
      </div>
      <div>
        <label htmlFor="backgroundColorPicker">Background Color:</label>
        <input
          type="color"
          id="backgroundColorPicker"
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fontColorPicker">Font Color:</label>
        <input
          type="color"
          id="fontColorPicker"
          value={fontColor}
          onChange={(e) => handleFontColorChange(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fontSizeSelect">Font Size:</label>
        <select
          id="fontSizeSelect"
          value={fontSize}
          onChange={(e) => handleFontSizeChange(e.target.value)}
        >
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
        </select>
      </div>
      <p style={{ color: fontColor, fontSize }}>Sample Text to Preview Font</p>
    </div>
  );
}

export default SettingsPage;
