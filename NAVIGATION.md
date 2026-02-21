# 🗺️ Карта навигации CyberShield Academy

## 📍 Структура навигации

```
┌─────────────────────────────────────────────────────────────────┐
│                        ГЛАВНАЯ СТРАНИЦА                        │
│                         index.html                              │
│  ┌──────────┬──────────┬──────────┬──────────┬──────────┐      │
│  │ Главная  │ Модули   │ Лабора-  │ Сообще-  │Регистра- │      │
│  │          │          │ тории    │ство      │ция       │      │
│  └──────────┴──┬───────┴────┬─────┴──┬───────┴────┬─────┘      │
└─────────────────┼────────────┼────────┼────────────┼────────────┘
                  │            │        │            │
        ┌─────────┴────┐  ┌──┬─┴────┐  │  ┌─────────┴──┐
        │              │  │  │      │  │  │            │
    МОДУЛИ       ЛАБОРАТОРИИ │   ОБЩЕНИЕ ПРАВОВЫЕ  РЕГИСТРАЦИЯ
    │              │  │      │          │
    ├─ Основы      ├─ Лаб    │     ├─ Форум    ├─ Законы
    ├─ Крипто...   ├─ Пентест│     ├─ Группы   ├─ Стандарты
    ├─ Сети        └─ Игры   │     ├─ События  └─ Этика
    └─ Защита             └───┴─ Коммьюнити
```

## 📂 Полная карта файлов и ссылок

### 🏠 Главная страница

**Файл:** `index.html`

**Содержит ссылки на:**

- ✅ pages/modules.html
- ✅ pages/practical/labs.html
- ✅ pages/community/community.html
- ✅ pages/auth/register.html

---

### 📚 Раздел "Модули" (pages/modules.html)

**Содержит ссылки на:**

- 🔙 index.html (кнопка "Главная")
- 📖 pages/education/basics.html
- 📖 pages/education/cryptography.html
- 📖 pages/education/network-security.html
- 📖 pages/education/defense.html
- 🧪 pages/practical/labs.html
- 🧪 pages/practical/pentesting.html

#### 📖 Образование (pages/education/)

**basics.html** → Основы кибербезопасности

- 🔙 Возврат к модулям (pages/modules.html)

**cryptography.html** → Криптография

- 🔙 Возврат к модулям (pages/modules.html)

**network-security.html** → Сетевая безопасность

- 🔙 Возврат к модулям (pages/modules.html)

**defense.html** → Защита от угроз

- 🔙 Возврат к модулям (pages/modules.html)

#### 🧪 Практика (pages/practical/)

**labs.html** → Практические лаборатории

- ✅ Ссылки на все модули в навигации
- 🔙 Возврат к модулям

**pentesting.html** → Этичный хакинг

- ✅ Ссылки на все модули в навигации
- 🔙 Возврат к модулям

**game-cyber.html** → Кибер-квест

- ✅ Ссылки на все модули в навигации
- 🔙 Возврат к модулям

---

### 👥 Раздел "Сообщество" (pages/community/community.html)

**Содержит ссылки на:**

- 🔙 index.html (кнопка "Главная")
- ✅ Навигация на все основные разделы

---

### ⚖️ Раздел "Законодательство" (pages/legal/law.html)

**Содержит ссылки на:**

- 🔙 index.html (кнопка "Главная")
- ✅ Навигация на все основные разделы

---

### 📝 Раздел "Регистрация" (pages/auth/register.html)

**Содержит ссылки на:**

- 🔙 index.html (кнопка "Главная")
- ✅ Навигация на все основные разделы
- 🔗 Форма регистрации
- 🔗 Ссылка на вход (login)

---

## 🔄 Циклы навигации

### Основной цикл

```
index.html → pages/modules.html → pages/education/* → pages/modules.html
     ↓                 ↓
     └─────────────────┘
```

### Практикуемый цикл

```
index.html → pages/modules.html → pages/practical/* → pages/modules.html
     ↓                 ↓
     └─────────────────┘
```

### Периметр сообщества

```
index.html ↔ pages/community/community.html
    ↓
    └─ pages/modules.html ↔ pages/community/community.html
```

## 📍 Рекомендуемые пути для посетителя

### Путь новичка 👤

1. 📍 index.html (главная)
2. 📖 pages/education/basics.html (основы)
3. 📖 pages/education/cryptography.html (криптография)
4. 🧪 pages/practical/labs.html (практика)
5. 👥 pages/community/community.html (сообщество)

### Путь продвинутого 🚀

1. 📍 index.html (главная)
2. 🧪 pages/practical/pentesting.html (пентест)
3. 🧪 pages/practical/game-cyber.html (игры)
4. ⚖️ pages/legal/law.html (законодательство)
5. 📝 pages/auth/register.html (регистрация)

### Путь юриста 👨‍⚖️

1. 📍 index.html (главная)
2. ⚖️ pages/legal/law.html (законодательство)
3. 📖 pages/education/basics.html (основы)
4. 👥 pages/community/community.html (сообщество)

---

## 🔗 Таблица всех ссылок

| На странице    | ID/Название          | Ссылка на                       | Тип кнопки     |
| -------------- | -------------------- | ------------------------------- | -------------- |
| index.html     | Главная              | #                               | nav-btn        |
| index.html     | Модули               | pages/modules.html              | nav-btn active |
| index.html     | Лаборатории          | pages/practical/labs.html       | nav-btn        |
| index.html     | Сообщество           | pages/community/community.html  | nav-btn        |
| index.html     | Регистрация          | pages/auth/register.html        | login-btn      |
| modules.html   | Главная              | ../../index.html                | nav-btn        |
| modules.html   | Основы               | education/basics.html           | feature-btn    |
| modules.html   | Криптография         | education/cryptography.html     | feature-btn    |
| modules.html   | Сетевая безопасность | education/network-security.html | feature-btn    |
| modules.html   | Защита от угроз      | education/defense.html          | feature-btn    |
| modules.html   | Лаборатории          | practical/labs.html             | feature-btn    |
| modules.html   | Пентест              | practical/pentesting.html       | feature-btn    |
| education/\*   | Вернуться            | ../modules.html                 | cta-button     |
| practical/\*   | Вернуться            | ../modules.html                 | cta-button     |
| community.html | Вернуться            | ../../index.html                | cta-button     |
| law.html       | Вернуться            | ../../index.html                | cta-button     |
| register.html  | Вход                 | #                               | link           |

---

## 🎯 Правила гиперссылок

### Абсолютные ссылки (от корня проекта)

Используются редко, обычно для внешних ссылок:

```html
<a href="https://external-site.com">Внешний сайт</a>
```

### Относительные ссылки (от текущего файла)

УИспользуются для внутренних ссылок:

**Из index.html в pages/modules.html:**

```html
<a href="pages/modules.html">Модули</a>
```

**Из pages/education/basics.html в index.html:**

```html
<a href="../../../index.html">Главная</a>
```

**Из pages/modules.html в pages/education/basics.html:**

```html
<a href="education/basics.html">Основы</a>
```

---

## 📊 Статистика связей

| Страница                              | Исходящие ссылки | Входящие ссылки |
| ------------------------------------- | ---------------- | --------------- |
| index.html                            | 4                | 8               |
| pages/modules.html                    | 9                | 2               |
| pages/education/basics.html           | 2                | 2               |
| pages/education/cryptography.html     | 2                | 2               |
| pages/education/network-security.html | 2                | 2               |
| pages/education/defense.html          | 2                | 2               |
| pages/practical/labs.html             | 7                | 2               |
| pages/practical/pentesting.html       | 7                | 2               |
| pages/practical/game-cyber.html       | 7                | 1               |
| pages/community/community.html        | 6                | 2               |
| pages/legal/law.html                  | 6                | 1               |
| pages/auth/register.html              | 6                | 2               |

---

## 🔧 Как добавить новую ссылку

### Добавление ссылки в существующую навигацию

1. Найдите блок `<nav>` на странице
2. Добавьте новый элемент `<a>`:

```html
<a href="новая-страница.html" class="nav-btn">Новая ссылка</a>
```

### Добавление ссылки на новую страницу в модулях

1. Откройте `pages/modules.html`
2. Найдите блок `<section class="features">`
3. Добавьте новый `<div class="feature-card">`:

```html
<div class="feature-card">
  <div class="feature-icon"><i class="fas fa-icon"></i></div>
  <h3>Новый предмет</h3>
  <p>Описание предмета</p>
  <a href="education/new-topic.html" class="nav-btn">Перейти</a>
</div>
```

---

**Сделано для облегчения навигации и прозрачности структуры проекта**
