import React from 'react';
import Navigation from './Componens/Navigation';
import Container from './labs/lab2/Container';
import MyButton from './labs/lab2/MyButton';
import LongMenu from './Menu/Menu';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function PageTemplate() {
  return (
    <div>
      <Header>

      </Header>
      <Navigation />
      <Container>
        <h1>Привет!</h1>
        <MyButton onClick={() => alert('Кнопка была нажата')}>Нажми меня</MyButton>
      </Container>
      <LongMenu></LongMenu>
      <Footer>

      </Footer>
    </div>
  );
}

export default PageTemplate;
