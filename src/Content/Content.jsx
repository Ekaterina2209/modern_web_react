import * as React from 'react';
import './index.css'
import './App.css'

export default function Types() {
    return (
        <Box sx={{ width: '100%', maxWidth: 750 }}>
            <Typography variant="h3" gutterBottom id="LAB1">
            Лабораторная работа №1
            </Typography>
            <Typography variant="body1" gutterBottom>
                Задание:
                <ul>
                <li>Реализовать скрипт, который уведомит о полной загрузке страницы</li>
                <li>Реализовать кнопку счетчик, которая будет увеличивать счетчик на "1" и вывести его значение на страницу (button onclick)</li>
                <li>Реализовать кнопку счетчик, которая будет уменьшать счетчик на "1" реализовать с помощью listener click</li>
                <li>Реализовать форму аутентификации пользователя</li>
                <li>Реализовать скрипт очистки данных формы</li>
                <li>Реализовать скрипт отправки данных формы с помощью listener submit.</li>
                <li>Без отправки на сервер провести валидацию введенных данных, если login=="admin" & pass=="admin" вывести сообщение об успехе, иначе сообщение о неуспехе</li>
                <li>Реализовать скрипт сохранения учетных данных и автоподстановку оных с помощью localStorage</li>
                </ul>
            </Typography>
        
            <Typography variant="h3" gutterBottom id="LAB2">
            Лабораторная работа №2
            </Typography>
            <Typography variant="body1" gutterBottom>
            Задание:
            <ul>
            <li>Создать "Hello World" приложение на основе React.</li>
            <li>Для создания можно использовать create-react-app или vite</li>
            <li>Реализовать компонент кнопку, контейнер и использовать их на странице</li>
            <li>Реализовать шаблон страницы и разместить на нем компоненты навигации </li>
            <li>Разместить проект в репозиторий в github</li>
            <li>Прикрепить текстовый файл с сылкой на проект</li>
            </ul>
            </Typography>

            <Typography variant="h3" gutterBottom id="LAB3">
            Лабораторная работа №3
            </Typography>
            <Typography variant="body1" gutterBottom>
            Задание:
            <ul>
            <li>Продолжаем задание "Реализовать шаблон страницы и разместить на нем компоненты навигации" (Можно использовать готовые библиотеки Mui/Bootstrap и тд)</li>
            </ul>
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                    <ul>
                    <li>Реализуем компоненты Header, Footer, Menu и Content</li>
                    <li>В меню выводим список лабораторных работ</li>
                    <li>В Content  выводим содержимое лабораторной работы </li>
                    </ul>
            </Typography>
            <Typography variant="body1" gutterBottom>
            <ul>
            <li>Разместить проект в репозиторий в github</li>
            <li>Прикрепить текстовый файл с сылкой на проект</li>
            </ul>
            </Typography>

            <Typography variant="h3" gutterBottom id="LAB4">
            Лабораторная работа №4
            </Typography>
            <Typography variant="body1" gutterBottom>
            Задание:
            <ul>
            <li>Реализовать изменение темы (день/ночь) используя Context</li>
            <li>useState и useEffect - простые примеры</li>
            <li>Внедрить в проект react-router</li>
            </ul>
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
            <ul>
            <li>В меню проекта реализовать ссылки переходы </li>
            <li>В Content реализовать обработчик роутов</li>
            </ul>
            </Typography>
            <Typography variant="body1" gutterBottom>
            <ul>
            <li>Внедрить в проект redux</li>
            </ul>
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
            <ul>
            <li>Реализовать несколько action и reducer</li>
            </ul>
            </Typography>
            

            <Typography variant="h3" gutterBottom id="LAB5">
            Лабораторная работа №5
            </Typography>
            <Typography variant="body1" gutterBottom>
            Задание:
            <ul>
            <li>Реализовать форму регистрации или форму обратной связи с помощью Formik</li>
            <li>Обработать submit через useCallback функции по примеру Лабораторной работы 1</li>
            <li>Разместить лабораторную работу в репозиторий в github отдельным коммитом</li>
            <li>Прикрепить текстовый файл с сылкой на проект</li>
            </ul>
            </Typography>
        </Box>
    );
  }