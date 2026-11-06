import QrCode from '../icons/QrCode';
import Lnk from '../UI/Lnk';

export default function Footer() {
  return (
    <footer className="md:justify-baseline border-secondary grid w-full items-center justify-center gap-12 border-t py-20 md:grid-cols-2 md:gap-0">
      <Lnk className="mx-auto size-fit text-7xl transition-all duration-300 md:mx-0 md:text-9xl" href={'/'}>
        d1yy
      </Lnk>
      <QrCode className="text-additional ml-auto hidden size-25 xl:block" />
    </footer>
  );
}
