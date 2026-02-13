<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Учет - Автосервис</title>
    <style>
        * {
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
            background: #f4f7fc;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
        }
        .container {
            max-width: 1400px;
            width: 100%;
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            padding: 25px;
        }
        h1 {
            color: #2c3e50;
            margin-top: 0;
            margin-bottom: 25px;
            font-weight: 600;
            font-size: 2rem;
        }
        .report-panel {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 15px;
            margin-bottom: 30px;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: space-around;
        }
        .report-item {
            text-align: center;
            flex: 1 1 200px;
        }
        .report-item span {
            display: block;
            font-size: 2.2rem;
            font-weight: bold;
            line-height: 1.2;
        }
        .report-item label {
            font-size: 1rem;
            opacity: 0.9;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .form-section {
            background: #f8fafd;
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 25px;
            border: 1px solid #e2e8f0;
        }
        .form-section h3 {
            margin-top: 0;
            margin-bottom: 20px;
            color: #2d3748;
            font-weight: 600;
        }
        .form-row {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            align-items: flex-end;
        }
        .form-group {
            flex: 1 1 180px;
            min-width: 150px;
        }
        .form-group label {
            display: block;
            font-size: 0.85rem;
            font-weight: 600;
            color: #4a5568;
            margin-bottom: 5px;
            text-transform: uppercase;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #cbd5e0;
            border-radius: 10px;
            font-size: 0.95rem;
            transition: 0.2s;
            background: white;
            font-family: inherit;
        }
        .form-group textarea {
            min-height: 80px;
            resize: vertical;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            border-color: #667eea;
            outline: none;
            box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
        }
        .form-group input[readonly] {
            background: #f0f4f8;
            cursor: not-allowed;
        }
        .btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 11px 25px;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.2s;
            border: 1px solid transparent;
            font-size: 0.95rem;
            margin-right: 8px;
        }
        .btn:hover {
            background: #5a67d8;
            transform: translateY(-1px);
        }
        .btn-secondary {
            background: #48bb78;
        }
        .btn-secondary:hover {
            background: #38a169;
        }
        .btn-danger {
            background: #f56565;
        }
        .btn-danger:hover {
            background: #e53e3e;
        }
        .clear-btn {
            background: #cbd5e0;
            color: #2d3748;
        }
        .clear-btn:hover {
            background: #a0aec0;
        }
        .form-actions {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
            gap: 10px;
        }
        .filter-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin: 25px 0 20px;
            align-items: flex-start;
            background: white;
            padding: 15px;
            border-radius: 15px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.03);
            border: 1px solid #edf2f7;
        }
        .search-box {
            flex: 2 1 300px;
        }
        .search-box input {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #e2e8f0;
            border-radius: 30px;
            font-size: 0.95rem;
        }
        .filter-section {
            flex: 1 1 300px;
            min-width: 250px;
        }
        .filter-section label {
            display: block;
            font-size: 0.85rem;
            font-weight: 600;
            color: #4a5568;
            margin-bottom: 8px;
            text-transform: uppercase;
        }
        .checkbox-group {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            background: #f8fafd;
            padding: 12px 15px;
            border-radius: 30px;
            border: 1px solid #e2e8f0;
        }
        .checkbox-item {
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            font-size: 0.9rem;
            color: #2d3748;
        }
        .checkbox-item input[type="checkbox"] {
            width: 16px;
            height: 16px;
            cursor: pointer;
            accent-color: #667eea;
        }
        .info-badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 600;
            background: #667eea;
            color: white;
            margin-left: 5px;
        }
        .table-wrapper {
            overflow-x: auto;
            border-radius: 15px;
            border: 1px solid #e2e8f0;
            background: white;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            min-width: 1400px;
        }
        th {
            background: #f7fafc;
            color: #2d3748;
            font-weight: 600;
            font-size: 0.8rem;
            text-transform: uppercase;
            padding: 16px 12px;
            text-align: left;
            border-bottom: 2px solid #e2e8f0;
        }
        td {
            padding: 14px 12px;
            border-bottom: 1px solid #edf2f7;
            color: #2d3748;
            font-size: 0.9rem;
            vertical-align: top;
        }
        tr:last-child td {
            border-bottom: none;
        }
        tr:hover td {
            background-color: #fafbff;
        }
        .comment-cell {
            max-width: 200px;
            white-space: normal;
            word-wrap: break-word;
        }
        .status-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 30px;
            font-size: 0.75rem;
            font-weight: 600;
            text-align: center;
            white-space: nowrap;
        }
        .status-done {
            background: #c6f6d5;
            color: #22543d;
        }
        .status-late {
            background: #fed7d7;
            color: #742a2a;
        }
        .status-notcome {
            background: #e2e8f0;
            color: #2d3748;
        }
        .status-waiting {
            background: #fefcbf;
            color: #744210;
        }
        .oil-badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        .oil-yes {
            background: #c6f6d5;
            color: #22543d;
        }
        .oil-no {
            background: #e2e8f0;
            color: #2d3748;
        }
        .oil-soon {
            background: #fefcbf;
            color: #744210;
            position: relative;
        }
        .oil-soon::after {
            content: "⚠️";
            margin-left: 4px;
            font-size: 0.7rem;
        }
        .actions {
            display: flex;
            gap: 8px;
        }
        .actions button {
            border: none;
            background: none;
            cursor: pointer;
            font-size: 1.1rem;
            padding: 4px;
            border-radius: 6px;
            transition: 0.1s;
        }
        .edit-btn {
            color: #4299e1;
        }
        .edit-btn:hover {
            background: #ebf8ff;
        }
        .delete-btn {
            color: #f56565;
        }
        .delete-btn:hover {
            background: #fff5f5;
        }
        .footer-note {
            margin-top: 20px;
            font-size: 0.85rem;
            color: #718096;
            text-align: right;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>🔧 Учет - Автосервис</h1>

    <!-- Отчет -->
    <div class="report-panel">
        <div class="report-item">
            <span id="totalClients">0</span>
            <label>Всего записей</label>
        </div>
        <div class="report-item">
            <span id="waitingCount">0</span>
            <label>Ожидаем</label>
        </div>
        <div class="report-item">
            <span id="lateCount">0</span>
            <label>Опаздывают</label>
        </div>
        <div class="report-item">
            <span id="doneCount">0</span>
            <label>Выполнено</label>
        </div>
    </div>

    <!-- Форма добавления -->
    <div class="form-section">
        <h3>➕ Добавить / Редактировать запись</h3>
        <div class="form-row">
            <div class="form-group">
                <label>ID (K-)</label>
                <input type="text" id="clientId" readonly placeholder="K-1001">
            </div>
            <div class="form-group">
                <label>Имя клиента</label>
                <input type="text" id="userName" placeholder="Иван Петров" autocomplete="off">
            </div>
            <div class="form-group">
                <label>Телефон</label>
                <input type="text" id="phone" placeholder="+7 (999) 123-45-67" autocomplete="off">
            </div>
            <div class="form-group">
                <label>Марка авто</label>
                <input type="text" id="carModel" placeholder="Toyota Camry" autocomplete="off">
            </div>
            <div class="form-group">
                <label>Дата приезда</label>
                <input type="date" id="visitDate">
            </div>
            <div class="form-group">
                <label>Время приезда</label>
                <input type="time" id="visitTime">
            </div>
            <div class="form-group">
                <label>Замена масла</label>
                <select id="oilChange">
                    <option value="Нет">Нет</option>
                    <option value="Да">Да</option>
                </select>
            </div>
            <div class="form-group">
                <label>Тип оплаты</label>
                <input type="text" id="paymentType" placeholder="Наличные/Карта" autocomplete="off">
            </div>
            <div class="form-group">
                <label>Статус</label>
                <select id="statusSelect">
                    <option value="waiting">Ожидаем</option>
                    <option value="late">Опаздывает</option>
                    <option value="done">Выполнено</option>
                    <option value="notcome">Не приедет</option>
                </select>
            </div>
            <div class="form-group" style="flex: 2 1 300px;">
                <label>Комментарий</label>
                <textarea id="comment" placeholder="Дополнительная информация..."></textarea>
            </div>
        </div>
        <!-- Кнопки действий перенесены вправо -->
        <div class="form-actions">
            <button class="btn" id="addBtn">➕ Добавить</button>
            <button class="btn-secondary" id="updateBtn" style="display: none;">✅ Обновить</button>
            <button class="clear-btn btn" id="cancelEdit" style="display: none;">✖ Отмена</button>
        </div>
    </div>

    <!-- Фильтрация -->
    <div class="filter-bar">
        <div class="search-box">
            <input type="text" id="searchInput" placeholder="🔍 Поиск по ID, имени, телефону, марке авто, комментарию...">
        </div>
        
        <!-- Фильтр по статусам -->
        <div class="filter-section">
            <label>Фильтр по статусам:</label>
            <div class="checkbox-group">
                <label class="checkbox-item">
                    <input type="checkbox" class="status-checkbox" value="waiting" checked> Ожидаем
                </label>
                <label class="checkbox-item">
                    <input type="checkbox" class="status-checkbox" value="late" checked> Опаздывает
                </label>
                <label class="checkbox-item">
                    <input type="checkbox" class="status-checkbox" value="done" checked> Выполнено
                </label>
                <label class="checkbox-item">
                    <input type="checkbox" class="status-checkbox" value="notcome" checked> Не приедет
                </label>
            </div>
        </div>

        <!-- Фильтр по замене масла -->
        <div class="filter-section">
            <label>Фильтр по замене масла <span class="info-badge">330 дней</span>:</label>
            <div class="checkbox-group">
                <label class="checkbox-item">
                    <input type="checkbox" id="oilYes" checked> Да
                </label>
                <label class="checkbox-item">
                    <input type="checkbox" id="oilNo" checked> Нет
                </label>
                <label class="checkbox-item">
                    <input type="checkbox" id="oilSoon"> Скоро замена масла
                </label>
            </div>
        </div>
    </div>

    <!-- Таблица клиентов -->
    <div class="table-wrapper">
        <table id="clientsTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Клиент</th>
                    <th>Телефон</th>
                    <th>Марка авто</th>
                    <th>Дата приезда</th>
                    <th>Время</th>
                    <th>Замена масла</th>
                    <th>Тип оплаты</th>
                    <th>Статус</th>
                    <th>Комментарий</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody id="tableBody">
                <!-- Данные будут вставлены через JS -->
            </tbody>
        </table>
    </div>
    <div class="footer-note">
        * ID генерируется автоматически в формате K-. "Скоро замена масла" - 330 дней от даты приезда.
    </div>
</div>

<script>
    (function() {
        const STORAGE_KEY = 'autoserviceData';
        const OIL_CHANGE_DAYS = 330; // 11 месяцев (примерно)
        let editingId = null;
        let records = [];

        // Загрузка из localStorage
        function loadFromStorage() {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                try {
                    records = JSON.parse(stored);
                } catch (e) {
                    records = [];
                }
            } else {
                // Начальные данные для демо
                const today = new Date();
                const threeMonthsAgo = new Date(today);
                threeMonthsAgo.setMonth(today.getMonth() - 3);
                
                const elevenMonthsAgo = new Date(today);
                elevenMonthsAgo.setMonth(today.getMonth() - 11);
                
                const formatDate = (date) => {
                    return date.toISOString().split('T')[0];
                };

                records = [
                    { 
                        id: 'K-1001', 
                        name: 'Иван Петров', 
                        phone: '+7 999 111-22-33', 
                        carModel: 'Toyota Camry',
                        visitDate: formatDate(threeMonthsAgo), // 3 месяца назад (скоро замена)
                        visitTime: '10:30',
                        oilChange: 'Да',
                        paymentType: 'Карта',
                        status: 'waiting',
                        comment: 'Просил проверить кондиционер'
                    },
                    { 
                        id: 'K-1002', 
                        name: 'Елена Смирнова', 
                        phone: '+7 999 222-33-44', 
                        carModel: 'KIA Rio',
                        visitDate: '2026-02-13',
                        visitTime: '14:00',
                        oilChange: 'Нет',
                        paymentType: 'Наличные',
                        status: 'done',
                        comment: 'Замена тормозных колодок'
                    },
                    { 
                        id: 'K-1003', 
                        name: 'Петр Сидоров', 
                        phone: '+7 999 333-44-55', 
                        carModel: 'BMW X5',
                        visitDate: formatDate(elevenMonthsAgo), // 11 месяцев назад (скоро замена)
                        visitTime: '09:15',
                        oilChange: 'Да',
                        paymentType: 'Карта',
                        status: 'late',
                        comment: 'Срочно, звонил уже 2 раза'
                    },
                    { 
                        id: 'K-1004', 
                        name: 'Анна Иванова', 
                        phone: '+7 999 444-55-66', 
                        carModel: 'Hyundai Solaris',
                        visitDate: '2026-02-14',
                        visitTime: '16:45',
                        oilChange: 'Да',
                        paymentType: 'Карта',
                        status: 'notcome',
                        comment: 'Перенесла на следующую неделю'
                    }
                ];
            }
        }

        // Сохранение
        function saveToStorage() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
        }

        // Сегодня
        function getTodayString() {
            const d = new Date();
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

        // Проверка, нужно ли скоро менять масло (330 дней от даты приезда)
        function isOilChangeSoon(visitDate, oilChange) {
            if (oilChange !== 'Да' || !visitDate) return false;
            
            const visit = new Date(visitDate);
            const today = new Date();
            
            // Разница в днях
            const diffTime = today - visit;
            const diffDays = diffTime / (1000 * 60 * 60 * 24);
            
            // Если прошло больше 330 дней, то скоро нужно менять масло
            return diffDays >= OIL_CHANGE_DAYS;
        }

        // Генерация нового ID
        function generateNewId() {
            if (records.length === 0) return 'K-1001';
            
            const numbers = records.map(c => {
                const match = c.id.match(/^K-(\d+)$/);
                return match ? parseInt(match[1], 10) : 0;
            }).filter(n => !isNaN(n) && n > 0);
            
            const maxNum = numbers.length > 0 ? Math.max(...numbers) : 1000;
            return `K-${maxNum + 1}`;
        }

        // Отчет по статусам
        function updateReport() {
            const total = records.length;
            let waiting = 0, late = 0, done = 0, notcome = 0;

            records.forEach(r => {
                if (r.status === 'waiting') waiting++;
                else if (r.status === 'late') late++;
                else if (r.status === 'done') done++;
                else if (r.status === 'notcome') notcome++;
            });

            document.getElementById('totalClients').innerText = total;
            document.getElementById('waitingCount').innerText = waiting;
            document.getElementById('lateCount').innerText = late;
            document.getElementById('doneCount').innerText = done;
        }

        // Экранирование
        function escapeHtml(unsafe) {
            if (!unsafe) return '';
            return String(unsafe)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        // Получение текста статуса и класса
        function getStatusInfo(status) {
            switch(status) {
                case 'done': return { text: 'Выполнено', class: 'status-done' };
                case 'late': return { text: 'Опаздывает', class: 'status-late' };
                case 'notcome': return { text: 'Не приедет', class: 'status-notcome' };
                case 'waiting':
                default: return { text: 'Ожидаем', class: 'status-waiting' };
            }
        }

        // Получение выбранных статусов из чекбоксов
        function getSelectedStatuses() {
            const checkboxes = document.querySelectorAll('.status-checkbox');
            const selected = [];
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    selected.push(cb.value);
                }
            });
            return selected;
        }

        // Получение выбранных значений замены масла
        function getSelectedOilValues() {
            const selected = [];
            if (document.getElementById('oilYes').checked) selected.push('Да');
            if (document.getElementById('oilNo').checked) selected.push('Нет');
            return selected;
        }

        // Отрисовка
        function renderTable() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
            const selectedStatuses = getSelectedStatuses();
            const selectedOilValues = getSelectedOilValues();
            const oilSoonChecked = document.getElementById('oilSoon').checked;

            const filtered = records.filter(record => {
                // Поиск по тексту
                const matchesSearch = 
                    record.id.toLowerCase().includes(searchTerm) ||
                    record.name.toLowerCase().includes(searchTerm) ||
                    record.phone.toLowerCase().includes(searchTerm) ||
                    (record.carModel && record.carModel.toLowerCase().includes(searchTerm)) ||
                    (record.comment && record.comment.toLowerCase().includes(searchTerm));

                if (!matchesSearch) return false;

                // Фильтр по статусам (если ничего не выбрано - показываем все)
                if (selectedStatuses.length > 0 && !selectedStatuses.includes(record.status)) {
                    return false;
                }

                // Фильтр по замене масла
                const oilSoon = isOilChangeSoon(record.visitDate, record.oilChange);
                
                // Если выбран фильтр "скоро замена масла"
                if (oilSoonChecked) {
                    // Показываем только те записи, где скоро менять масло
                    if (!oilSoon) return false;
                } else {
                    // Иначе фильтруем по обычным чекбоксам Да/Нет
                    if (selectedOilValues.length > 0 && !selectedOilValues.includes(record.oilChange || 'Нет')) {
                        return false;
                    }
                }

                return true;
            });

            const tbody = document.getElementById('tableBody');
            tbody.innerHTML = '';

            if (filtered.length === 0) {
                tbody.innerHTML = '<tr><td colspan="11" style="text-align:center; padding:40px;">Записи не найдены</td></tr>';
            } else {
                filtered.forEach(record => {
                    const statusInfo = getStatusInfo(record.status);
                    const oilSoon = isOilChangeSoon(record.visitDate, record.oilChange);
                    
                    let oilClass = record.oilChange === 'Да' ? 'oil-yes' : 'oil-no';
                    let oilText = record.oilChange || 'Нет';
                    
                    if (oilSoon) {
                        oilClass = 'oil-soon';
                        oilText = 'Скоро замена';
                    }

                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${escapeHtml(record.id)}</td>
                        <td>${escapeHtml(record.name)}</td>
                        <td>${escapeHtml(record.phone)}</td>
                        <td>${escapeHtml(record.carModel || '')}</td>
                        <td>${escapeHtml(record.visitDate || '')}</td>
                        <td>${escapeHtml(record.visitTime || '')}</td>
                        <td><span class="oil-badge ${oilClass}">${escapeHtml(oilText)}</span></td>
                        <td>${escapeHtml(record.paymentType || '')}</td>
                        <td><span class="status-badge ${statusInfo.class}">${statusInfo.text}</span></td>
                        <td class="comment-cell">${escapeHtml(record.comment || '')}</td>
                        <td class="actions">
                            <button class="edit-btn" data-id="${escapeHtml(record.id)}" title="Редактировать">✏️</button>
                            <button class="delete-btn" data-id="${escapeHtml(record.id)}" title="Удалить">🗑️</button>
                        </td>
                    `;
                    tbody.appendChild(row);
                });
            }
            updateReport();
        }

        // Очистка формы
        function clearForm() {
            document.getElementById('clientId').value = generateNewId();
            document.getElementById('userName').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('carModel').value = '';
            document.getElementById('visitDate').value = '';
            document.getElementById('visitTime').value = '';
            document.getElementById('oilChange').value = 'Нет';
            document.getElementById('paymentType').value = '';
            document.getElementById('statusSelect').value = 'waiting';
            document.getElementById('comment').value = '';
            editingId = null;
            document.getElementById('addBtn').style.display = 'inline-block';
            document.getElementById('updateBtn').style.display = 'none';
            document.getElementById('cancelEdit').style.display = 'none';
        }

        // Заполнение для редактирования
        function fillFormForEdit(record) {
            document.getElementById('clientId').value = record.id;
            document.getElementById('userName').value = record.name || '';
            document.getElementById('phone').value = record.phone || '';
            document.getElementById('carModel').value = record.carModel || '';
            document.getElementById('visitDate').value = record.visitDate || '';
            document.getElementById('visitTime').value = record.visitTime || '';
            document.getElementById('oilChange').value = record.oilChange || 'Нет';
            document.getElementById('paymentType').value = record.paymentType || '';
            document.getElementById('statusSelect').value = record.status || 'waiting';
            document.getElementById('comment').value = record.comment || '';
            editingId = record.id;
            document.getElementById('addBtn').style.display = 'none';
            document.getElementById('updateBtn').style.display = 'inline-block';
            document.getElementById('cancelEdit').style.display = 'inline-block';
        }

        // Добавление
        function addRecord() {
            const clientId = document.getElementById('clientId').value.trim();
            const name = document.getElementById('userName').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const carModel = document.getElementById('carModel').value.trim();
            const visitDate = document.getElementById('visitDate').value;
            const visitTime = document.getElementById('visitTime').value;
            const oilChange = document.getElementById('oilChange').value;
            const paymentType = document.getElementById('paymentType').value.trim();
            const status = document.getElementById('statusSelect').value;
            const comment = document.getElementById('comment').value.trim();

            if (!name || !phone) {
                alert('Пожалуйста, заполните имя и телефон.');
                return;
            }

            if (records.some(r => r.id === clientId)) {
                alert('Техническая ошибка: ID уже существует. Попробуйте снова.');
                clearForm();
                return;
            }

            const newRecord = {
                id: clientId,
                name,
                phone,
                carModel,
                visitDate,
                visitTime,
                oilChange,
                paymentType,
                status,
                comment
            };

            records.push(newRecord);
            saveToStorage();
            clearForm();
            renderTable();
        }

        // Обновление
        function updateRecord() {
            const clientId = document.getElementById('clientId').value.trim();
            const name = document.getElementById('userName').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const carModel = document.getElementById('carModel').value.trim();
            const visitDate = document.getElementById('visitDate').value;
            const visitTime = document.getElementById('visitTime').value;
            const oilChange = document.getElementById('oilChange').value;
            const paymentType = document.getElementById('paymentType').value.trim();
            const status = document.getElementById('statusSelect').value;
            const comment = document.getElementById('comment').value.trim();

            if (!name || !phone) {
                alert('Пожалуйста, заполните имя и телефон.');
                return;
            }

            const index = records.findIndex(r => r.id === editingId);
            if (index === -1) {
                alert('Ошибка редактирования: запись не найдена.');
                clearForm();
                renderTable();
                return;
            }

            if (editingId !== clientId && records.some(r => r.id === clientId)) {
                alert('Запись с таким ID уже существует.');
                return;
            }

            records[index] = {
                id: clientId,
                name,
                phone,
                carModel,
                visitDate,
                visitTime,
                oilChange,
                paymentType,
                status,
                comment
            };

            saveToStorage();
            clearForm();
            renderTable();
        }

        // Удаление
        function deleteRecord(id) {
            if (confirm('Удалить запись?')) {
                records = records.filter(r => r.id !== id);
                saveToStorage();
                if (editingId === id) clearForm();
                renderTable();
            }
        }

        // Инициализация
        function init() {
            loadFromStorage();
            document.getElementById('clientId').value = generateNewId();
            renderTable();

            // Кнопки
            document.getElementById('addBtn').addEventListener('click', addRecord);
            document.getElementById('updateBtn').addEventListener('click', updateRecord);
            document.getElementById('cancelEdit').addEventListener('click', clearForm);
            
            // Поиск
            document.getElementById('searchInput').addEventListener('input', renderTable);
            
            // Чекбоксы статусов
            const statusCheckboxes = document.querySelectorAll('.status-checkbox');
            statusCheckboxes.forEach(cb => {
                cb.addEventListener('change', renderTable);
            });

            // Чекбоксы замены масла
            document.getElementById('oilYes').addEventListener('change', renderTable);
            document.getElementById('oilNo').addEventListener('change', renderTable);
            document.getElementById('oilSoon').addEventListener('change', renderTable);

            // Обработка кликов по таблице
            document.getElementById('tableBody').addEventListener('click', (e) => {
                const target = e.target.closest('button');
                if (!target) return;

                const id = target.getAttribute('data-id');
                if (target.classList.contains('delete-btn')) {
                    deleteRecord(id);
                } else if (target.classList.contains('edit-btn')) {
                    const record = records.find(r => r.id === id);
                    if (record) fillFormForEdit(record);
                }
            });
        }

        document.addEventListener('DOMContentLoaded', init);
    })();
</script>
</body>
</html>
