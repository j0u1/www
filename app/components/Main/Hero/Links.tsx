import { GithubIcon } from 'lucide-react';
import ModrinthLogo from '../../icons/Logos/ModrinthLogo';
import Lnk from '../../UI/Lnk';

const links = [
  {
    icon: GithubIcon,
    href: 'https://github.com/j0u1',
  },
  {
    icon: ModrinthLogo,
    href: 'https://modrinth.com/user/rnky',
  },
];

export default function Links() {
  return (
    <div className="mt-1 flex gap-3.5">
      {links.map((link, id) => {
        const Icon = link.icon;
        return (
          <Lnk
          key={id}
            href={link.href}
            target="_blank"
          >
            <Icon className="size-6" />
          </Lnk>
        );
      })}
    </div>
  );
}
