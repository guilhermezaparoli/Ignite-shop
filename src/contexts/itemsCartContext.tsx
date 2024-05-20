import { ReactNode, createContext, useState } from 'react';

interface ItemsCartProviderProps {
  children: ReactNode;
}

const ItemsCartContext = createContext({});

export function ItemsCartProvider({ children }: ItemsCartProviderProps) {
    const [itemsCart, setItemsCart] = useState([])

    function addItemCart(item: {}){
        setItemsCart((state) => [...state, item])
    }

    function removeItemCart(id: string) {
        const newListItems = itemsCart.filter((item) => item.id !== id)

        setItemsCart(newListItems)
    }
  return (
    <ItemsCartContext.Provider value={{}}>{children}</ItemsCartContext.Provider>
  );
}
