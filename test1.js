const div = document.createElement('div')
div.innerText = JSON.stringify(window.Telegram.WebApp)
document.body.append(div)

const container = document.querySelector('#block')




if (window.Telegram.WebApp) {
// const data = JSON.stringify({
//     eventType: 'web_app_setup_back_button',
//     eventData: {
//       is_visible: true,
//     },
// });
window.addEventListener('click', ()=>{
    const div = document.createElement('div')
    div.innerText = Date.now()
    container.append(div)
    container.style.backgroundColor = `#fff`
})

const btn =  document.querySelector('#btn')
btn.addEventListener('click', () => {
    const div = document.createElement('div')
    div.innerText = Date.now()
    container.append(div)
    container.style.backgroundColor = `#fff`
})

const btnOtv =  document.querySelector('#btn-otv')
btnOtv.addEventListener('click', () => {
    BackButton.offClick(handleClick);
})

    // // Включаем кнопку "Назад"
    // Telegram.WebApp.BackButton.show();

    // // Обработчик события нажатия кнопки "Назад"
    // Telegram.WebApp.onEvent('backButtonPressed', function() {
    //     console.log('Кнопка "Назад" нажата');
    //     const div = document.createElement('div')
    //     div.innerText = Date.now()
    //     document.body.append(div)
    //     // Ваша логика здесь
    //     // Например, вы можете закрыть Web App или перейти на предыдущую страницу
    // });
    

    const WebApp = window.Telegram.WebApp
    var BackButton = WebApp.BackButton;
    BackButton.show();
    BackButton.onClick(handleClick);

    

    window.addEventListener('touchstart', ()=>{
        const div = document.createElement('div')
        div.innerText = Date.now()
        container.append(div)
        container.style.backgroundColor = `#fff`
    })
    

    // BackButton.onClick(() => {
    //     window.history.back();
    //     const div = document.createElement('div')
    //     div.innerText = Date.now()
    //     document.body.append(div)
    //     document.body.style.backgroundColor = `#fff`
    // });
  
}

function handleClick(){
    window.history.back();
    // WebApp.showAlert("Нет пути назад!");
    const div = document.createElement('div')
    div.innerText = Date.now()
    container.append(div)
    container.style.backgroundColor = `#fff`
}