import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navigation = () => {
  return (
    <nav className="w-full border-b">
      <ul className="flex justify-center">
        <LinkItem href="/" title="home" />
        <LinkItem href="/product/pages/1" title="products" />
        <LinkItem href="/about" title="about" />
      </ul>
    </nav>
  );
};

interface LinkItemProps {
  readonly href: string;
  readonly title: string;
}

const LinkItem = ({ href, title }: LinkItemProps) => {
  const router = useRouter();

  return (
    <li className="mr-8 uppercase">
      <Link href={href}>
        <a className={isActiveRoute(router.asPath, href) ? 'text-blue-600' : 'text-gray-600'}>
          {title}
        </a>
      </Link>
    </li>
  );
};

const isActiveRoute = (routePath: string, linkHref: string) => {
  return linkHref === '/' ? linkHref === routePath : routePath.includes(linkHref);
};
