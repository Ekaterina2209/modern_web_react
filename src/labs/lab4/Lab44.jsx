import React from 'react';
import { useColor } from './ColorContext';

function ColorChangingButton() {
  const { toggleColor } = useColor();

  return (
    <div>
      <button onClick={toggleColor}>Изменить цвет</button>
    </div>
  );
}

export default ColorChangingButton;
