import Link from 'next/link';
import React from 'react';
import { Product } from '../../types/types';

interface ProductItemProps {
  item: Product;
}

export const ProductItem = ({ item }: ProductItemProps) => {
  return (
    <Link href={`/product/${item.id}`}>
      <li className="shadow-xl border flex flex-col justify-between items-center bg-white cursor-pointer">
        <img src={item.image} alt={item.title} className="max-w-xs" />
        <p className=" font-bold uppercase">{item.title}</p>
      </li>
    </Link>
  );
};
