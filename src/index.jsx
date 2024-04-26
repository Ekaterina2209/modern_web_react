import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css'; 

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