const div = document.createElement('div')
        div.innerText = JSON.stringify(window.Telegram.WebApp)
        document.body.append(div)

if (window.Telegram.WebApp) {
const data = JSON.stringify({
    eventType: 'web_app_setup_back_button',
    eventData: {
      is_visible: true,
    },
});

window.parent.postMessage(data, 'https://web.telegram.org');


  const data1 = JSON.stringify({ is_visible: true });

window
  .TelegramWebviewProxy
  .postEvent('web_app_setup_back_button', data1);

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

    var BackButton = WebApp.BackButton;
    BackButton.show();
    BackButton.onClick(function() {
    WebApp.showAlert("Нет пути назад!");
        const div = document.createElement('div')
        div.innerText = Date.now()
        document.body.append(div)
        document.body.style.backgroundColor = `#fff`
    });
    WebApp.onEvent('backButtonClicked', function() {
        const div = document.createElement('div')
        div.innerText = Date.now()
        document.body.append(div)
        document.body.style.backgroundColor = `#fff`
    });

    BackButton.onClick(() => {
        history.back();
        const div = document.createElement('div')
        div.innerText = Date.now()
        document.body.append(div)
        document.body.style.backgroundColor = `#fff`
    });
  
}