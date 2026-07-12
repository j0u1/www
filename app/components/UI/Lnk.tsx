import Link from "next/link";
import type { UrlObject } from 'url';
type Url = string | UrlObject;

type LinkType = {
    id?: number;
    href: Url;
    children?: React.ReactNode;
    className?: string;
    target?: "_blank"
}

export default function Lnk({ id, href, children, className }: LinkType) {
    return <Link className={`text-additional duration-250 transition-all hover:text-accent ${className}`} key={id} href={href}>{children}</Link>
}