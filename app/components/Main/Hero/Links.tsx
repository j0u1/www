import Link from 'next/link';
import { GithubIcon } from 'lucide-react';
import ModrinthLogo from '../../icons/Logos/ModrinthLogo';

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
      {links.map(link => {
        const Icon = link.icon;
        return (
          <Link
            className="inline-block transition-all duration-300 text-additional hover:text-accent"
            href={link.href}
            target="_blank"
          >
            <Icon className="size-6" />
          </Link>
        );
      })}
    </div>
  );
}
