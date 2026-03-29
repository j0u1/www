import { Projects } from '../types/projects';

export const PROJECTS: Projects[] = [
  {
    title: 'Wire Search',
    description: 'Поиск через Google без лишних элементов',
    image: '/images/projects/wire.jpg',
    link: 'https://wire.d1yy.ru',
  },
  {
    title: 'StarHub',
    description:
      'Платформа для просмотра звёзд конкретного пользователя на GitHub',
    image: '/images/projects/starhub.jpg',
    link: 'https://starhub.d1yy.ru',
  },
  {
    title: 'yat',
    description: 'yet another todo (ещё один todo-лист)',
    image: '/images/projects/yat.jpg',
    link: 'https://yat.d1yy.ru',
  },
  {
    title: 'MJITIOOO',
    description: 'Личный сайт MJITIOOO',
    image: '/images/projects/mjitiooo.jpg',
    link: 'https://mjitiooo.d1yy.ru',
  },
  {
    title: 'SP Pack (spoverlay*)',
    description: 'Сайт для скачивания общего ресурс пака СП5',
    image: '/images/projects/sppack.jpg',
    link: 'https://pack.spoverlay.ru',
  },
  {
    title: 'Портал Услуг (spoverlay*)',
    description:
      'Инструмент для МЮ СП5 редактированием и созданием территорий и паспортов',
    image: '/images/projects/portal.jpg',
  },
  {
    title: 'PawVille Community',
    description: 'Сайт для комьюнити ЛапВиль',
    image: '/images/projects/pawville.jpg',
    link: 'https://pawville.community',
    position: 'bottom',
  },
  {
    title: 'Spilya',
    description: 'Личный сайт Spilya',
    image: '/images/projects/spilya.jpg',
  },
  {
    title: 'Gallery (spoverlay*)',
    description: 'Галерея артов СП5, в которой собраны некоторые арты сервера.',
    image: '/images/projects/gallery.jpg',
  },
  {
    title: 'SPEMOTES (spoverlay*)',
    description: 'Сайт с более удобной загрузкой SPEMOTES для мода EmoteCraft',
    image: '/images/projects/spemotes.jpg',
    link: 'https://spemotes.spoverlay.ru/',
  },
] as const;
