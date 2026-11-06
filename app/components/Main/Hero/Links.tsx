import { GithubIcon, LucideIcon } from 'lucide-react';
import ModrinthLogo from '../../icons/Logos/ModrinthLogo';
import Lnk from '../../UI/Lnk';
import { ComponentType } from 'react';

interface LinkType {
  icon: ComponentType<{ className?: string }>,
  href: string
}

const links: LinkType[] = [
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
    <div className="flex gap-3.5">
      {links.map((link, id) => {
        const Icon = link.icon;
        return (
          <Lnk
            key={id}
            href={link.href}
            target='_blank'
          >
            <Icon className="size-4 duration-300 transition-all lg:size-5" />
          </Lnk>
        );
      })}
    </div>
  );
}
