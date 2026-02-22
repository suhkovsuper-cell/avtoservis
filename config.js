// ============================================
// КОНФИГУРАЦИЯ САЙТА
// ============================================

// Конфигурация Telegram
const TELEGRAM_CONFIG = {
    BOT_TOKEN: '8513239665:AAEEnuIzebYvxnHebKsjyrFnDpiVIn-R2VE',
    CHAT_ID: '966869280'  // ВАШ ЛИЧНЫЙ ID
};

// Основная конфигурация сайта
const SITE_CONFIG = {
    // Кнопки скачивания
    downloadButtons: [
        { 
            icon: 'fa-brands fa-google-play', 
            text: 'Google Play', 
            class: '', 
            url: 'https://vk.com/okhotaclub'  // Временная ссылка
        },
        { 
            icon: 'fa-brands fa-apple', 
            text: 'App Store', 
            class: '', 
            url: 'https://vk.com/okhotaclub'  // Временная ссылка
        },
        { 
            icon: 'fa-solid fa-download', 
            text: 'Скачать для ПК', 
            class: '', 
            url: 'https://vk.com/okhotaclub'  // Временная ссылка
        }
    ],
    
    // Карточки преимуществ
    features: [
        {
            icon: 'fa-brands fa-instagram',
            title: 'Доступ к сервисам',
            description: 'Instagram, YouTube, Telegram, WhatsApp, зарубежные поисковики и нейросети (ИИ).'
        },
        {
            icon: 'fa-regular fa-circle-check',
            title: 'Белый список',
            description: 'Мы настроили доступ так, чтобы всё работало быстро и стабильно, без «тормозов».'
        },
        {
            icon: 'fa-solid fa-globe',
            title: 'Где можно пользоваться',
            description: 'Android, iOS (iPhone/iPad), Windows. Одно устройство по одному коду.'
        }
    ],
    
    // Шаги получения доступа
    steps: [
        {
            number: 1,
            icon: 'fa-regular fa-key',
            title: 'Получите код',
            description: 'Заполните форму — мы пришлем код на email'
        },
        {
            number: 2,
            icon: 'fa-solid fa-laptop',
            title: 'Выберите устройство',
            description: 'Один код = одно устройство'
        },
        {
            number: 3,
            icon: 'fa-regular fa-circle-play',
            title: 'Активируйте',
            description: 'Скачайте приложение и вставьте код'
        }
    ],
    
    // Социальные сети (ваши ссылки)
    telegramUrl: 'https://t.me/arenda036',
    vkUrl: 'https://vk.com/backsttage'
};
