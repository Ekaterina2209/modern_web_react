import React from 'react';
import Navigation from './Componens/Navigation';
import Container from './labs/lab2/Container';
import MyButton from './labs/lab2/MyButton';
import LongMenu from './Menu/Menu';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Outlet } from 'react-router';

function PageTemplate() {
  return (
    <div>
      <Header>

      </Header>
      <Navigation />

      <LongMenu></LongMenu>
      
      <Outlet>

      </Outlet>

      <Footer>

      </Footer>
    </div>
  );
}

export default PageTemplate;
