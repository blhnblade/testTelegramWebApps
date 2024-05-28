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