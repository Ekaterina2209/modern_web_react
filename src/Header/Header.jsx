import * as React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageTemplate from './PageTemplate'
import MyButton from './labs/lab2/MyButton'
import Menu from './Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Menu/>
          <Typography variant="h6" component="div" sx={{ flexGrow:1}}>React and MUI</Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow:0}}>Гончаров Никита 4.106-1</Typography> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
/**/