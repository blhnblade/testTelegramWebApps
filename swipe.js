

let myElement = document.querySelector('.container');

// Создаем экземпляр Hammer.js
var mc = new Hammer(myElement);

// Навешиваем обработчик события "swipe"
mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL })

// Обработка жеста смахивания вниз
mc.on('swipedown', function(ev) {
console.log('Свайп вниз обнаружен!');
myElement.style.backgroundColor = 'lightgreen'; // Изменяем цвет для наглядности
})


document.addEventListener('DOMContentLoaded', () => {



    // // Get a reference to an element.
    // var square = document.querySelector('.container');
    
    // // Create an instance of Hammer with the reference.
    // var hammer = new Hammer(square);
    
    // // Subscribe to a quick start event: press, tap, or doubletap.
    // // For a full list of quick start events, read the documentation.
    // hammer.on('press', function(e) {
    //   e.target.classList.toggle('expand');
    //   console.log("You're pressing me!");
    //   console.log(e);
    // });
})