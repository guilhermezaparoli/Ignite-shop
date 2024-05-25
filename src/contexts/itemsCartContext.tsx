import { ReactNode, createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface ItemsCartProviderProps {
  children: ReactNode;
}

interface ItemsCartContent {
  id: string;
  imageUrl: string;
  name: string;
  price: string;
  idPrice: string;
  newId: string;
}
interface ItemsCartContextProps {
  addItemCart: (item: {}) => void;
  removeItemCart: (id: string) => void;
  itemsCart: ItemsCartContent[];
}
export const ItemsCartContext = createContext({} as ItemsCartContextProps);

export function ItemsCartProvider({ children }: ItemsCartProviderProps) {
  const [itemsCart, setItemsCart] = useState<ItemsCartContent[]>([]);

  function generateUniqueId() {
    return `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
  }
  function addItemCart(item: ItemsCartContent) {
    // item.newId = generateUniqueId()
    setItemsCart((state) => [...state, {...item, newId: generateUniqueId()}]);
    // toast.success("Item adicionado ao carrinho!")
  }
console.log(itemsCart)
  function removeItemCart(id: string) {
    const newListItems = itemsCart.filter((item) => item.newId !== id);

    setItemsCart(newListItems);
    // toast.success("Item excluído com sucesso!")
  }

  return (
    <ItemsCartContext.Provider
      value={{ addItemCart, removeItemCart, itemsCart }}
    >
      {children}
    </ItemsCartContext.Provider>
  );
}
