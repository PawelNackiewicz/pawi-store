import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface PaginationProps {
  total: number;
}

export const Pagination = ({ total }: PaginationProps) => {
  return (
    <nav className="w-full">
      <ul className="flex justify-center">
        {Array.from({ length: total / 25 }).map((_, i) => (
          <PaginationItem key={i} index={i + 1} />
        ))}
      </ul>
    </nav>
  );
};

interface PaginationItemProps {
  index: number;
}

const PaginationItem = ({ index }: PaginationItemProps) => {
  const router = useRouter();
  const pageIndex = router.asPath.split('/')[3];

  return (
    <Link href={`/product/pages/${index}`}>
      <li
        className={`${
          pageIndex === index.toString() ? 'text-blue-600 border-blue-600' : 'text-gray-600'
        } border-2 p-2 mx-1`}
      >
        {index}
      </li>
    </Link>
  );
};
