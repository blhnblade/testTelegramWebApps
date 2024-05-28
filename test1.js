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

    // Включаем кнопку "Назад"
    Telegram.WebApp.BackButton.show();

    // Обработчик события нажатия кнопки "Назад"
    Telegram.WebApp.onEvent('backButtonPressed', function() {
        console.log('Кнопка "Назад" нажата');
        alert('Press')
        // Ваша логика здесь
        // Например, вы можете закрыть Web App или перейти на предыдущую страницу
    });
}