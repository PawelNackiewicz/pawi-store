import React, { createContext, SetStateAction, useContext, useState } from 'react';

interface CartItem {
  id: string;
  title: string;
  price: number;
  count: number;
}

interface CartContextType {
  items: CartItem[];
  setItems: React.Dispatch<SetStateAction<CartItem[]>>;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: CartItem['id']) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setItems((prevState) => {
      const existingItem = prevState.find((e) => e.id === item.id);
      if (!existingItem) return [...items, item];
      return prevState.map((e) => {
        return e.id === item.id ? { ...e, count: e.count + 1 } : e;
      });
    });
  };

  const removeItem = (itemId: CartItem['id']) => {
    setItems((prevState) => {
      const foundItem = items.find((e) => e.id === itemId);
      if (foundItem && foundItem.count <= 1) {
        return prevState.filter((e) => e.id !== itemId);
      }
      return prevState.map((e) => {
        return e.id === itemId
          ? {
              ...e,
              count: e.count - 1,
            }
          : e;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within the CartProvider');
  return context;
}
