// Конфигурация JSONbin.io
const JSONBIN_CONFIG = {
    BIN_ID: '6990220aae596e708f29d5c7',
    MASTER_KEY: '$2a$10$IpgKewWGXPB9KuNg9Vl7m.ygKQOa5d4CpJ7KNnPpA3tqEZR372ivi'
};

// Конфигурация Telegram
const TELEGRAM_CONFIG = {
    BOT_TOKEN: '8513239665:AAEEnuIzebYvxnHebKsjyrFnDpiVIn-R2VE',
    CHAT_ID: '966869280'  // ВАШ ЛИЧНЫЙ ID
};

// Конфигурация авторизации с ролями
const AUTH_CONFIG = {
    USERS: [
        { username: 'admin', password: 'admin', role: 'admin' },
        { username: 'евгений', password: '123', role: 'admin' },
        { username: 'мастер', password: '123', role: 'user' },
        { username: 'менеджер', password: '123', role: 'user' },
        { username: 'директор', password: '123', role: 'admin' },
        { username: 'бухгалтер', password: '123', role: 'user' }
    ]
};
