import QrCode from '../icons/QrCode';
import Lnk from '../UI/Lnk';

export default function Footer() {
  return (
    <footer className="grid md:grid-cols-2 gap-12 md:gap-0 w-full justify-center md:justify-baseline items-center pt-24 pb-20 border-t border-secondary">
      <Lnk className="text-7xl md:text-9xl size-fit mx-auto md:mx-0 duration-300 transition-all" href={'/'}>
        d1yy
      </Lnk>
      <QrCode className="hidden xl:block size-25 ml-auto" />
    </footer>
  );
}
