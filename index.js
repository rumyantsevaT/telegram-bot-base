const TelegramBot = require('node-telegram-bot-api');
const TOKEN = ''; //здесь токен вашего бота
const Agent = require('socks5-https-client/lib/Agent');

const bot = new TelegramBot(TOKEN, {
  polling: true,
  request: {
    agentClass: Agent,
    agentOptions: {
      socksHost: '157.230.154.241',  // socks5 хост
      socksPort: '9050' // порт
      // тот же прокси прописываем в десктопном приложении вашего телеграмм
    }
  }
})

bot.on('message', (msg) => {
  console.log(msg);
  bot.sendMessage(msg.chat.id, 'Привет, ' + msg.from.first_name);
})