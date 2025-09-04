import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Base path for GitHub Pages (repository name)
  base: '/materials/',
  lang: 'ru-RU',
  title: 'Методические материалы | Конспект',
  description: 'Конспекты и материалы уроков',
  lastUpdated: true,
  sitemap: {
    hostname: 'http://localhost:5173'
  },
  themeConfig: {
    // Оглавление справа отключено (убираем блок "On this page")
    outline: false,

    // Навигация в шапке
    nav: [
      { text: 'Уроки', link: '/lessons/lesson-1-kontentnye-tegi' }
    ],

    // Сайдбар слева: ссылки на разделы урока
    sidebar: [
      {
        text: 'Урок 1: Контентные теги',
        link: '/lessons/lesson-1-kontentnye-tegi',
        items: [
          { text: 'План занятия', link: '/lessons/lesson-1-kontentnye-tegi#план-занятия-общий-для-модуля' },
          { text: 'Заголовки (h1–h6)', link: '/lessons/lesson-1-kontentnye-tegi#шесть-уровней-заголовков-h1-h6' },
          { text: 'Основной текст (p, line-height)', link: '/lessons/lesson-1-kontentnye-tegi#вёрстка-основного-текста-p-line-height' },
          { text: 'Списки (ul, ol, li, list-style-type)', link: '/lessons/lesson-1-kontentnye-tegi#вёрстка-списков-ul-ol-li-list-style-type' },
          { text: 'Изображения и подписи (img, figure, figcaption)', link: '/lessons/lesson-1-kontentnye-tegi#изображения-и-подписи-img-figure-figcaption' },
          { text: 'Float (обтекание)', link: '/lessons/lesson-1-kontentnye-tegi#стилизация-свойство-float' },
          { text: 'Отступы и рамки (padding, margin, border)', link: '/lessons/lesson-1-kontentnye-tegi#отступы-и-рамки-padding-margin-border' },
          { text: 'Внешние отступы и span', link: '/lessons/lesson-1-kontentnye-tegi#внешние-отступы-и-строчные-контейнеры-margin-span' },
          { text: 'Идентификатор и класс (id, class)', link: '/lessons/lesson-1-kontentnye-tegi#идентификатор-и-класс-id-class' },
          { text: 'Итоги', link: '/lessons/lesson-1-kontentnye-tegi#итоги' }
        ]
      }
    ],

    // Локализация некоторых строк темы
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    returnToTopLabel: 'Наверх',
    lastUpdatedText: 'Обновлено'
  },

  // Markdown настройки
  markdown: {
    // Разрешаем встроенный HTML для iframe (CodePen, и т.д.)
    html: true,
    // Подсветка синтаксиса: выбираем тему для светлой/тёмной схем
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
