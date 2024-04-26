import React from 'react';
import Navigation from './Componens/Navigation';
import Container from './labs/lab2/Container';
import MyButton from './labs/lab2/MyButton';

function PageTemplate() {
  return (
    <div>
      <Navigation />
      <Container>
        <h1>Привет!</h1>
        <MyButton onClick={() => alert('Кнопка была нажата')}>Нажми меня</MyButton>
      </Container>
    </div>
  );
}

export default PageTemplate;
