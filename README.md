При возникновении ошибки error: [polling_error] {"code":"EFATAL","message":"EFATAL: Error: read ECONNRESET"}

Ставим библиотеку дополнительно socks5-https-client:

```npm install --save socks5-https-client```

Код для подключения будет такой:
```
const Agent = require('socks5-https-client/lib/Agent');

const bot = new TelegramBot(token, {
    polling: true,
    request: {
        agentClass: Agent,
        agentOptions: {
            socksHost: '157.230.154.241',  // socks5 хост (если не работает меняем на свой)
            socksPort: '9050' // порт (если не работает меняем на свой)
        }
    }
});
```

Какие прокси тут, такой же писать в самом приложении Telegram
