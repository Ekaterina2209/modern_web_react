import Container from "./Container";
import MyButton from "./MyButton";

function Lab2() {
    return (
        <Container>
            <h1>Лабораторная 2</h1>
            <h2>Привет!</h2>
            <MyButton onClick={() => alert('Кнопка была нажата')}>Нажми меня</MyButton>
        </Container>
    )
}

export default Lab2