# Деплой NevaYacht на Vercel — Пошаговая инструкция

## Содержание

1. [Требования](#1-требования)
2. [Подготовка проекта](#2-подготовка-проекта)
3. [Деплой через Vercel Dashboard (рекомендуется)](#3-деплой-через-vercel-dashboard-рекомендуется)
4. [Деплой через Vercel CLI](#4-деплой-через-vercel-cli)
5. [Настройка собственного домена](#5-настройка-собственного-домена)
6. [Переменные окружения](#6-переменные-окружения)
7. [Обновление сборки (CI/CD)](#7-обновление-сборки-cicd)
8. [SEO: обязательные правки перед публикацией](#8-seo-обязательные-правки-перед-публикацией)
9. [Устранение ошибок](#9-устранение-ошибок)

---

## 1. Требования

| Инструмент | Минимальная версия |
|---|---|
| Node.js | 18.x или 20.x (рекомендуется 20 LTS) |
| pnpm | 9.x или 10.x |
| Git | любая актуальная версия |
| Аккаунт Vercel | бесплатный [vercel.com](https://vercel.com) |

> **Важно.** Vercel поддерживает pnpm нативно. Убедитесь, что в проекте есть файл `pnpm-lock.yaml` — он находится в корне монорепозитория.

---

## 2. Подготовка проекта

### 2.1. Загружаем зависимости локально (один раз)

```bash
# В корне монорепозитория
pnpm install --ignore-scripts
```

Флаг `--ignore-scripts` необходим на Windows, чтобы не запускались нативные скрипты компиляции.

### 2.2. Проверяем локальную сборку

```bash
cd artifacts/yacht-rental
pnpm run build
```

Успешная сборка создаст папку `artifacts/yacht-rental/dist/public/`. Если сборка прошла без ошибок — проект готов к деплою.

### 2.3. Загружаем проект в Git-репозиторий

Если репозитория ещё нет:

```bash
git init
git add .
git commit -m "Initial commit"
```

Создайте репозиторий на [github.com](https://github.com) и подключите его:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

---

## 3. Деплой через Vercel Dashboard (рекомендуется)

### Шаг 1. Авторизация

Зайдите на [vercel.com](https://vercel.com) и войдите через GitHub, GitLab или Bitbucket.

### Шаг 2. Импорт проекта

1. Нажмите **"Add New… → Project"**
2. Выберите репозиторий `YOUR_REPO_NAME`
3. Нажмите **"Import"**

### Шаг 3. Настройка параметров (ВАЖНО)

Vercel может не распознать монорепозиторий автоматически. Задайте следующие параметры:

| Настройка | Значение |
|---|---|
| **Framework Preset** | `Other` |
| **Root Directory** | `artifacts/yacht-rental` |
| **Build Command** | `pnpm run build` |
| **Output Directory** | `dist/public` |
| **Install Command** | `pnpm install --ignore-scripts` |
| **Node.js Version** | `20.x` |

> **Примечание.** Поле "Root Directory" — самое важное. Укажите `artifacts/yacht-rental` и Vercel будет запускать все команды внутри этой папки.

### Шаг 4. Деплой

Нажмите **"Deploy"**. Vercel выполнит:
- `pnpm install --ignore-scripts` (установка зависимостей)
- `pnpm run build` (сборка Vite)
- Публикацию папки `dist/public/` на CDN

После успешного деплоя вы получите URL вида `https://your-project.vercel.app`.

---

## 4. Деплой через Vercel CLI

### Установка CLI

```bash
npm install -g vercel
```

### Авторизация

```bash
vercel login
```

### Первый деплой

```bash
cd "e:\it\Luxury-Marine-Rentals (1)\Luxury-Marine-Rentals"
vercel
```

При первом запуске Vercel CLI спросит:

```
? Set up and deploy? Y
? Which scope? [ваш аккаунт]
? Link to existing project? N
? Project name? nevayacht
? In which directory is your code located? ./
```

Затем вручную подтвердите настройки через Dashboard (см. раздел 3, Шаг 3).

### Деплой в production

```bash
vercel --prod
```

---

## 5. Настройка собственного домена

### 5.1. В Vercel Dashboard

1. Откройте проект → **Settings → Domains**
2. Введите ваш домен, например `nevayacht.ru`
3. Нажмите **"Add"**
4. Vercel выдаст DNS-записи для настройки

### 5.2. Настройка DNS у регистратора

**Вариант A — делегирование на Vercel Nameservers (рекомендуется):**

В панели регистратора домена замените NS-серверы на:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Вариант B — CNAME запись:**

Если делегирование невозможно, создайте CNAME запись:
```
CNAME  www    cname.vercel-dns.com
A      @      76.76.21.21
```

### 5.3. SSL-сертификат

Vercel автоматически выпускает бесплатный SSL-сертификат (Let's Encrypt) после подключения домена. Готовность: 5–15 минут.

---

## 6. Переменные окружения

Проект в данный момент не требует переменных окружения для работы (чисто фронтенд). Тем не менее, если в будущем добавится бэкенд или аналитика, настройте их здесь.

### Добавление через Dashboard

**Settings → Environment Variables:**

| Ключ | Пример значения | Scope |
|---|---|---|
| `VITE_API_URL` | `https://api.nevayacht.ru` | Production, Preview |
| `VITE_ANALYTICS_ID` | `G-XXXXXXXXXX` | Production |

### Добавление через CLI

```bash
vercel env add VITE_API_URL
```

> **Важно.** В Vite все переменные окружения должны начинаться с `VITE_`, иначе они не будут доступны в браузере.

---

## 7. Обновление сборки (CI/CD)

После настройки Vercel автоматически запускает новый деплой при каждом `git push` в ветку `main`.

### Проверка деплоя

```bash
# Посмотреть статус последних деплоев
vercel ls

# Посмотреть логи конкретного деплоя
vercel logs [DEPLOYMENT_URL]
```

### Preview-деплои для веток

Каждая ветка `feature/*` и PR автоматически получает preview-URL. Это позволяет тестировать изменения до слияния в `main`.

---

## 8. SEO: обязательные правки перед публикацией

Перед публикацией сайта обновите домен-плейсхолдер `nevayacht.ru` на реальный домен в следующих файлах:

### `artifacts/yacht-rental/index.html`

Найдите и замените все вхождения `https://nevayacht.ru`:
- `<link rel="canonical" href="https://nevayacht.ru/">`
- `<link rel="alternate" hreflang="ru" href="https://nevayacht.ru/">`
- `<link rel="alternate" hreflang="en" href="https://nevayacht.ru/en/">`
- `<meta property="og:url" content="https://nevayacht.ru/">`
- В блоке JSON-LD: `"url"`, `"@id"`, `"sameAs"` и все URL маршрутов

### `artifacts/yacht-rental/public/robots.txt`

```
Sitemap: https://ВАШ_ДОМЕН.ru/sitemap.xml
```

### `artifacts/yacht-rental/public/sitemap.xml`

Замените все `https://nevayacht.ru/` на реальный домен.

### Социальные сети в компонентах

В `src/components/Footer.tsx` и `src/components/Navbar.tsx` обновите реальные ссылки на соцсети:
- `href="https://vk.com/nevayacht"` → ваша реальная страница VK
- `href="https://instagram.com/nevayacht"` → ваш аккаунт Instagram
- `href="https://t.me/nevayacht"` → ваш Telegram-канал
- `href="https://wa.me/79001234567"` → ваш номер WhatsApp

---

## 9. Устранение ошибок

### Ошибка: "404 Not Found" при прямом переходе на `/fleet`, `/about` и т.д.

**Причина:** Vercel не знает, что все пути должны обслуживаться `index.html` (SPA-роутинг).

**Решение:** Убедитесь, что файл `vercel.json` в корне репозитория содержит секцию `rewrites`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Файл уже создан в корне проекта. Если ошибка сохраняется — проверьте, что `vercel.json` включён в коммит.

---

### Ошибка: `ERR_PNPM_WORKSPACE_PKG_NOT_FOUND`

**Причина:** Vercel запускает `pnpm install` из корня, а там — монорепозиторий.

**Решение:** Установите **Root Directory = `artifacts/yacht-rental`** в настройках проекта на Dashboard.

---

### Ошибка: `Cannot find module '@/components/...'`

**Причина:** Неверный путь алиасов TypeScript.

**Решение:** Убедитесь, что в `artifacts/yacht-rental/vite.config.ts` задан алиас:
```ts
resolve: {
  alias: { "@": path.resolve(__dirname, "./src") }
}
```

---

### Сборка зависает на нативных модулях

**Причина:** Скрипты postinstall для `rollup`, `esbuild` или `lightningcss` пытаются скомпилировать бинарники.

**Решение:** В `Install Command` укажите `pnpm install --ignore-scripts`.

---

### Сайт медленно загружается после деплоя

Vercel CDN кэширует статические файлы глобально. Первый запрос может быть медленнее. Проверьте:
- Настройки кэша в `vercel.json` (заданы в проекте для `/images/*` и `/assets/*`)
- Размер бандла: `pnpm run build` — посмотрите вывод Rollup на большие чанки
- Включена ли ленивая загрузка изображений (в проекте добавлен `loading="lazy"`)

---

## Итог

| Шаг | Статус |
|---|---|
| `vercel.json` — конфигурация деплоя | ✅ Готово |
| SPA-роутинг (rewrites) | ✅ Готово |
| Кэш статических файлов | ✅ Готово |
| Security-заголовки | ✅ Готово |
| Сборка: `pnpm run build` | Проверьте локально |
| Домен и DNS | Настройте у регистратора |
| SEO: замените `nevayacht.ru` | Обязательно перед публикацией |
