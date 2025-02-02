fetch("https://dog.ceo/api/breeds/image/random")
    .then(data => data.json())
    .then((res) => {
        if (res.status !== 'success') {
            return;
        }

        // const imgUrl = res.message;

        document.querySelector('.js-img').innerHTML = `
            <img
                src='${res.message}'
                width='500'>
        `;
    });




// ```javascript
// fetch("https://dog.ceo/api/breeds/image/random")
// .then(data => data.json())
// .then((res) => {
//     // Проверка статуса ответа
//     if (res.status !== 'success') {
//         console.error('Ошибка:', res.message);
//         return;
//     }

//     // Извлечение URL изображения
//     const imgUrl = res.message;
//     if (!imgUrl) {
//         console.error('URL изображения не предоставлен в ответе.');
//         return;
//     }

//     // Вставка изображения в DOM
//     document.querySelector('.js-img').innerHTML = `
//         <img
//             src='${imgUrl}'
//             width='500'>
//     `;
// })
// .catch(err => {
//     console.error('Произошла ошибка при выполнении fetch:', err);
// });
// ```

// **Пояснения:**
// 1. **Обработка ошибок**: Добавлена запись ошибок в консоль и проверка наличия `res.message` перед установкой `innerHTML`.
// 2. **Исправление синтаксиса**: Сравнение строк должно быть с `'success'`, а не `'sucess'`.
// 3. **Дополнительная обработка ошибок**: Добавлен блок `catch` для обработки возможных ошибок `fetch`.

// Убедитесь, что в вашем HTML-документе есть элемент с классом `.js-img`, чтобы этот код работал корректно.