
function useRequest(url) {
  fetch(url)
        .then((response) => response.url)
        .then((result) => {
            fotoLoad(result);            
        })
        .catch((reason) => {
            message("Ошибка: " + reason);
        });
  };  


// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.btn');
// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.result');


// Функция обработки полученного результата
  
function fotoLoad(photoUrl) {
  const photoCard =  `<img class="card"
                          src="${photoUrl}"                          
                        />`;
   resultNode.innerHTML = photoCard;
}


function checkingValue(valueWidth, valueHeight) {

const width = Number(valueWidth)
const height = Number(valueHeight)

if ((width >= 100 && width <= 300 && !isNaN(width)) && (height >= 100 && height <= 300 && !isNaN(height))) {
    useRequest(`https://picsum.photos/${width}/${height}`);
    message("Загружаю фото, пожалуйста, подождите...");
  } else {
    message("Одно из чисел вне диапозона от 100 до 300");
  }
 }

function message(text) {
    document.querySelector(".result").innerHTML = text;
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
  const valueWidth = document.querySelector('#input-width').value;
  const valueHeight = document.querySelector('#input-height').value;
  checkingValue(valueWidth,valueHeight)  
})
