


function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};

// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.btn');
// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.result');


// Функция обработки полученного результата
  
function fotoLoad(apiData) {
  let cards = '';  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  resultNode.innerHTML = cards;
}

function checkingValue(value) {

const number = Number(value)

if (number >= 1 && number <= 10 && !isNaN(number)) {
    useRequest("https://picsum.photos/v2/list?limit=" + value, fotoLoad);
    message("Загружаю фото, пожалуйста, подождите...");
  } else {
    message("Число вне диапазона от 1 до 10.");
  }
 }


function message(text) {
    document.querySelector(".result").innerHTML = text;
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
  const value = document.querySelector('#input-field').value;
  checkingValue(value)  
})