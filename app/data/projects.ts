import { Projects } from '../types/projects';

export const PROJECTS: Projects[] = [
  {
    title: 'finity',
    description: 'Простая библиотека конечных автоматов для TypeScript.',
    image: '/images/projects/finity.webp',
    link: 'https://npmx.dev/package/@j0u1/finity'
  },
  {
    title: 'инциденты',
    description: 'Система управления инцидентами.',
    image: '/images/projects/incidents.jpg',
    link: 'https://github.com/j0u1/incidents'
  },
  {
    title: 'Docky',
    description: 'Поисковик по готовым Dockerfiles.',
    image: '/images/projects/docky.jpg',
    link: 'https://github.com/j0u1/Docky',
  },
  {
    title: 'Wire Search',
    description: 'Поиск через Google без лишних элементов.',
    image: '/images/projects/wire.jpg',
    link: 'https://github.com/j0u1/wire-search',
  },
  {
    title: 'StarHub',
    description:
      'Платформа для просмотра звёзд конкретного пользователя на GitHub.',
    image: '/images/projects/starhub.jpg',
    link: 'https://github.com/j0u1/starhub',
  },
  {
    title: 'yat',
    description: 'yet another todo (ещё один todo-лист)',
    image: '/images/projects/yat.jpg',
    link: 'https://github.com/j0u1/yat',
  },
  {
    title: 'SP Pack',
    description: 'Сайт для скачивания общего ресурс пака СП5 от команды spoverly.',
    image: '/images/projects/sppack.jpg',
    link: 'https://pack.spoverlay.ru',
  },
  {
    title: 'Портал Услуг',
    description:
      'Инструмент для МЮ СП5 редактированием и созданием территорий и паспортов от команды spoverly.',
    image: '/images/projects/portal.jpg',
    link: 'https://portal.spoverlay.ru',
    position: 'bottom',
  },
  // {
  //   title: 'PawVille Community',
  //   description: 'Сайт для комьюнити ЛапВиль',
  //   image: '/images/projects/pawville.jpg',
  //   link: 'https://pawville.community',
  //   position: 'bottom',
  // },
  // {
  //   title: 'Spilya',
  //   description: 'Личный сайт Spilya',
  //   image: '/images/projects/spilya.jpg',
  // },
  {
    title: 'Gallery',
    description: 'Галерея артов СП5, в которой собраны некоторые арты сервера от команды spoverly.',
    image: '/images/projects/gallery.jpg',
  },
  {
    title: 'SPEMOTES',
    description: 'Сайт с более удобной загрузкой SPEMOTES для мода EmoteCraft от команды spoverly.',
    image: '/images/projects/spemotes.jpg',
    link: 'https://spemotes.spoverlay.ru/',
  },
] as const;
