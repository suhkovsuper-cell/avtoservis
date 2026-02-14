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
        { username: 'serg', password: '1233', role: 'user' },
        { username: 'мастер', password: '1234', role: 'user' },
        { username: 'менеджер', password: '1235', role: 'user' },
        { username: 'директор', password: '1236', role: 'user' },
        { username: 'бухгалтер', password: '1237', role: 'user' }
    ]
};
