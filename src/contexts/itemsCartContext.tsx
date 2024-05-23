import { ReactNode, createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface ItemsCartProviderProps {
  children: ReactNode;
}

interface ItemsCartContent {
  id: string;
  imageUrl: string;
  name: string;
  price: string;
  idPrice: string
}
interface ItemsCartContextProps {
  addItemCart: (item: {}) => void;
  removeItemCart: (id: string) => void;
  itemsCart: ItemsCartContent[];
}
export const ItemsCartContext = createContext({} as ItemsCartContextProps);

export function ItemsCartProvider({ children }: ItemsCartProviderProps) {
  const [itemsCart, setItemsCart] = useState<ItemsCartContent[]>([]);

  function addItemCart(item: ItemsCartContent) {
    setItemsCart((state) => [...state, item]);
  }

  function removeItemCart(id: string) {
    const newListItems = itemsCart.filter((item) => item.id !== id);

    setItemsCart(newListItems);
  }
  
  return (
    <ItemsCartContext.Provider
      value={{ addItemCart, removeItemCart, itemsCart }}
    >
      {children}
    </ItemsCartContext.Provider>
  );
}
