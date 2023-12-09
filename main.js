

// галерея 
let elements = document.getElementsByClassName("column");


let i;

// полный просмотр
function one() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "100%";  // IE10
        elements[i].style.flex = "100%";
    }
}

// 2 картинка
function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "50%";  // IE10
        elements[i].style.flex = "50%";
    }
}

// 4 картинки
function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";  // IE10
        elements[i].style.flex = "25%";
    }
}


// Найдем нашу форму и добавим обработчик событий submit
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    // Предотвращаем стандартное поведение формы (перезагрузка страницы)
    event.preventDefault();
    // Создаем объект FormData для сбора данных из формы
    let formData = new FormData(this);
    // Создаем пустой объект для хранения данных формы
    let feedbackData = {};
    

    // Преобразуем данные из объекта FormData в обычный объект
    formData.forEach(function (value, key) {
        feedbackData[key] = value;
    });
    // Добавляем дополнительное поле userId к данным формы
    feedbackData['userId'] = 1;
    // Делаем асинхронный HTTP-запрос методом POST к JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
    })
    .then(response => response.json())
    
          .then(data => {
            alert('Спасибо, с вами свяжутся!')
            console.log('Успешно отправлено:', data);
            this.reset();
         })
    
         .catch(error =>{
            console.error('Ошибка:', error);
         })
        })

//accordion
let acc = document.getElementsByClassName("accordion");
let i1;

for (i1 = 0; i1 < acc.length; i1++) {
  acc[i1].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
//скролл
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn5").style.display = "block";
    } else {
        document.getElementById("myBtn5").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

