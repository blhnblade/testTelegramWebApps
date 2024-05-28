console.log(123)
console.log(window.Telegram.WebApp)
const container = document.querySelector('#block')
// document.body.appendChild = JSON.stringify(window.Telegram.WebApp)
WebApp.onEvent('backButtonClicked', function() {
    window.history.back();
    const div = document.createElement('div')
    div.innerText = 'Была нажата кнопка назад'
    document.body.append(div)
    document.body.style.backgroundColor = `#fff`
});