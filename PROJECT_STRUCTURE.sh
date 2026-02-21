#!/bin/bash
# File: PROJECT_STRUCTURE.sh
# Используйте эту команду для просмотра структуры проекта
# Запустите: bash PROJECT_STRUCTURE.sh в корне проекта

echo "🏗️  СТРУКТУРА ПРОЕКТА: CyberShield Academy"
echo "=========================================="
echo ""

# Функция для отображения файлов с отступом
show_tree() {
    local dir="$1"
    local prefix="$2"
    local files0_=()
    local dirs0_=()
    
    # Получить содержимое директории
    for item in "$dir"/*; do
        if [ -f "$item" ]; then
            files0_+=("$(basename "$item")")
        elif [ -d "$item" ]; then
            dirs0_+=("$(basename "$item")")
        fi
    done
    
    # Показать файлы
    for file in "${files0_[@]}"; do
        echo "${prefix}├─ 📄 $file"
    done
    
    # Показать директории
    for dir in "${dirs0_[@]}"; do
        echo "${prefix}├─ 📁 $dir/"
    done
}

tree_structure_ascii='
project capstone 1/
├─ 📄 index.html
├─ 📄 README.md
├─ 📄 DEVELOPMENT.md
├─ 📄 QUICKSTART.md
├─ 📄 NAVIGATION.md
│
├─ 📁 css/
│  └─ 📄 main.css
│
├─ 📁 js/
│  └─ 📄 main.js
│
├─ 📁 assets/
│  ├─ 📁 images/
│  └─ 📁 icons/
│
└─ 📁 pages/
   ├─ 📄 modules.html
   │
   ├─ 📁 education/
   │  ├─ 📄 basics.html
   │  ├─ 📄 cryptography.html
   │  ├─ 📄 network-security.html
   │  └─ 📄 defense.html
   │
   ├─ 📁 practical/
   │  ├─ 📄 labs.html
   │  ├─ 📄 pentesting.html
   │  └─ 📄 game-cyber.html
   │
   ├─ 📁 community/
   │  └─ 📄 community.html
   │
   ├─ 📁 legal/
   │  └─ 📄 law.html
   │
   └─ 📁 auth/
      └─ 📄 register.html
'

echo "$tree_structure_ascii"

echo ""
echo "📊 СТАТИСТИКА ПРОЕКТА"
echo "===================="
echo "✅ Общее количество HTML файлов: 13"
echo "✅ CSS файлов: 1"
echo "✅ JavaScript файлов: 1"
echo "✅ Документация файлов: 4"
echo "✅ Папок: 8"
echo ""

echo "📁 НАЗНАЧЕНИЕ ПАПОК"
echo "=================="
echo "css/      - Стили всех страниц (main.css)"
echo "js/       - Скрипты всех страниц (main.js)"
echo "assets/   - Медиа-ресурсы (картинки, иконки)"
echo "pages/    - Остальные страницы сайта"
echo ""

echo "📄 ОСНОВНЫЕ ФАЙЛЫ"
echo "================="
echo "index.html     - ГЛАВНАЯ СТРАНИЦА (начните отсюда)"
echo "README.md      - Описание проекта"
echo "QUICKSTART.md  - Быстрый старт за 5 минут"
echo "NAVIGATION.md  - Карта всех ссылок"
echo "DEVELOPMENT.md - Руководство разработчика"
echo ""

echo "🌐 ГЛАВНЫЕ РАЗДЕЛЫ САЙТА"
echo "======================"
echo "1. Главная         → index.html"
echo "2. Модули          → pages/modules.html"
echo "3. Образование     → pages/education/*"
echo "4. Практика        → pages/practical/*"
echo "5. Сообщество      → pages/community/community.html"
echo "6. Законодательство → pages/legal/law.html"
echo "7. Регистрация     → pages/auth/register.html"
echo ""

echo "🔍 БЫСТРЫЕ ССЫЛКИ"
echo "================"
echo "Начните с:        index.html"
echo "Читать про:       README.md или QUICKSTART.md"
echo "Навигация:        NAVIGATION.md"
echo "Разработка:       DEVELOPMENT.md"
echo ""

echo "✅ Структура готова к использованию!"
echo ""
