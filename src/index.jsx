import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './ThemeProvider'; 

ReactDOM.render(
<React.StrictMode>
<ThemeProvider>
<div id="root" className="light-theme"> {}
<App />
</div>
</ThemeProvider>
</React.StrictMode>,
document.getElementById('root')
);