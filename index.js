
document.querySelector('.js-btn').addEventListener('click', function() {
    // Добавляем обработчик события на кнопку с классом .js-btn

    fetch("https://api.adviceslip.com/advice")
        // Получаем ответ от API
        .then(function (response) {
            // Преобразуем ответ в JSON
            return response.json();
        })
        .then(function (data) {
            // Записываем совет в элемент с классом .js-text
            document.querySelector('.js-text').innerHTML = data.slip.advice;
            // Добавляем класс change-bg к элементу body
            document.body.classList.add('change-bg');
        });
});



// Комментарии к действиям функции:

// 1. **Добавление обработчика события:**
//    ```javascript
//    document.querySelector('.js-btn').addEventListener('click', function() {
//    ```
//    - Мы вешаем обработчик события `click` на элемент с классом `.js-btn`.

// 2. **Выполнение запроса к API:**
//    ```javascript
//    fetch("https://api.adviceslip.com/advice")
//    ```
//    - Выполняется асинхронный запрос к указанному URL с помощью метода `fetch`.

// 3. **Преобразование ответа в JSON:**
//    ```javascript
//    .then(function (response) {
//        return response.json();
//    })
//    ```
//    - Полученный ответ преобразуется в формат JSON.

// 4. **Обработка данных:**
//    ```javascript
//    .then(function (data) {
//        document.querySelector('.js-text').innerHTML = data.slip.advice;
//        document.body.classList.add('change-bg');
//    });
//    ```
//    - Извлеченные данные (совет) записываются в элемент с классом `.js-text`.
//    - К элементу `body` добавляется класс `change-bg`, что может изменить фон страницы или применить другие стили.

// Теперь код должен корректно выполнять все указанные действия при нажатии на кнопку с классом `.js-btn`.