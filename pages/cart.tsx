import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeItem } = useCart();

  return (
    <div className="w-full">
      <ul>
        {items?.map((item) => (
          <li key={item.id} className="grid grid-cols-10 gap-20">
            <p className="font-bold col-span-4">{item.title}</p>
            <p className="col-span-2">{item.count} x</p>
            <p className="col-span-2">{item.price} PLN</p>
            <div className="col-span-2">
              <button onClick={() => removeItem(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
