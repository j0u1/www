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
    <footer className="grid md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-0 w-full justify-center md:justify-baseline items-center pt-24 pb-20 border-t border-secondary">
      <Lnk className="text-7xl md:text-9xl size-fit mx-auto md:mx-0 duration-300 transition-all" href={'/'}>
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
