
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.btn');
// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.result');


if (loadImage()){
  message("Загружены просмотреные ранее картинки.");
}
    

function useRequest(getUrl) {
 
  fetch(getUrl)
        .then((response) => response.json())
        .then((json) => {
            fotoLoad(json);
            saveImage()
        })

        .catch((reason) => {
            message("Ошибка: " + reason);
        });
  };  



// Функция обработки полученного результата
  
function fotoLoad(apiData) {
  let cards = String();

    apiData.forEach(item => {
        const cardBlock =     `<div>
                                <img
                                  src="${item.download_url}"
                                  style="width: 200px; margin-right: 25px"
                                />
                                <p>${item.author}</p>
                              </div>`;
        cards += cardBlock;
    });

    resultNode.innerHTML = cards;
}



function checkingValue(value) {
  const valueNamber = Number(value)
  return (valueNamber >= 1 && valueNamber <= 10 && !isNaN(valueNamber)) ? true : false
 }

function check(valuePage, valueLimit) {
const checkPage = checkingValue(valuePage)
const checkLimit = checkingValue(valueLimit)

if (!checkPage && !checkLimit) {    
    message("Номер страницы и лимит вне диапозона от 1 до 10");
  } else if (!checkPage) {
    message("Номер страницы вне диапозона от 1 до 10");
  } else if (!checkLimit) {
    message("Лимит вне диапозона от 1 до 10");
  } else {
    useRequest(`https://picsum.photos/v2/list?page=${valuePage}&limit=${valueLimit}`);
  }
 }


function message(text) {
    document.querySelector(".message").innerHTML = text;
}

function saveImage() {
    localStorage.setItem("picture", resultNode.innerHTML);
}

function loadImage() {
    resultNode.innerHTML = localStorage.getItem("picture");
    return  resultNode.innerHTML.length > 0;
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
  const valuePage = document.querySelector('#page-number').value;
  const valueLimit = document.querySelector('#limit').value;
  check(valuePage,valueLimit)

})
