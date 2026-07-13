import QrCode from '../icons/QrCode';
import Lnk from '../UI/Lnk';

const links = [
  {
    title: 'Проекты',
    href: './projects',
  },
  {
    title: 'Скиллы',
    href: './skills',
  },
];

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 xl:grid-cols-3 w-full items-center pt-24 pb-20 border-t border-secondary">
      <Lnk className="text-9xl size-fit" href={'/'}>
        d1yy
      </Lnk>
      <div className="flex items-center gap-6 md:justify-end lg:justify-center md:ml-auto xl:mx-auto">
        {links.map((link, id) => (
          <Lnk
            className="text-xl [&+a]:border-l border-additional-foreground pl-6"
            key={id}
            href={link.href}
          >
            {link.title}
          </Lnk>
        ))}
      </div>
      <QrCode className="hidden xl:block size-25 ml-auto" />
    </footer>
  );
}
