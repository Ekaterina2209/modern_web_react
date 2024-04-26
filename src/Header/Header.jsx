import { useColor } from '/src/labs/lab4/ColorContext';
function Header() {
  const { toggleColor } = useColor(); // Получаем toggleColor из контекста

  const handleClick = () => {
    toggleColor(); // Вызываем функцию toggleColor для изменения цвета
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'white' ? 'black' : 'white'; // Применяем измененный цвет к элементу body
  };

  return (
    <header>
      <h1>ШАПКА</h1>
      <div>
        <button onClick={handleClick}>Изменить цвет</button>
      </div>
    </header>
  );
}

export default Header;