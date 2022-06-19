import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navigation = () => {
  return (
    <nav className="w-full border-b">
      <ul className="flex justify-center">
        <LinkItem href="/" title="home" />
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
  console.log(router.pathname);

  return (
    <li className="mr-8 uppercase">
      <Link href={href}>
        <a className={router.pathname === href ? 'text-blue-600' : 'text-gray-600'}>{title}</a>
      </Link>
    </li>
  );
};
