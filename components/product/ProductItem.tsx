import Link from 'next/link';
import React from 'react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/types';

interface ProductItemProps {
  item: Product;
}

export const ProductItem = ({ item }: ProductItemProps) => {
  const { addItem } = useCart();

  return (
    <li className="shadow-xl border flex flex-col justify-between items-center bg-white cursor-pointer">
      <Link href={`/product/${item.id}`}>
        <a>
          <img src={item.image} alt={item.title} className="max-w-xs" />
          <p className=" font-bold uppercase">{item.title}</p>
        </a>
      </Link>
      <button
        onClick={() =>
          addItem({
            id: item.id.toString(),
            title: item.title,
            price: 10,
            count: 1,
          })
        }
        className="bg-blue-500 hover:bg-blue-700 px-6 py-1 mb-2 font-medium rounded-lg text-white uppercase"
      >
        Add to cart
      </button>
    </li>
  );
};
