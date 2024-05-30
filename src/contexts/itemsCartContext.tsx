import { ReactNode, createContext, useState } from 'react';
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
  quantity: number;
}
interface ItemsCartContextProps {
  addItemCart: (item: {}) => void;
  removeItemCart: (id: string) => void;
  itemsCart: ItemsCartContent[];
  handleAmountItemCart: (amount: number, id: string) => void;
}
export const ItemsCartContext = createContext({} as ItemsCartContextProps);

export function ItemsCartProvider({ children }: ItemsCartProviderProps) {
  const [itemsCart, setItemsCart] = useState<ItemsCartContent[]>([]);

  function addItemCart(item: ItemsCartContent) {
    const itemExists = itemsCart.some((shirt) => shirt.id === item.id);

    const newQuantityArr = itemsCart.map((shirt) => {
      if (shirt.id === item.id) {
        return {
          ...shirt,
          quantity: (shirt.quantity || 0) + 1,
        };
      }
      return shirt;
    });

    if (!itemExists) {
      newQuantityArr.push({ ...item, quantity: 1 });
    }

    setItemsCart(newQuantityArr);
  }

  function removeItemCart(id: string) {
    const newListItems = itemsCart.filter((item) => item.id !== id);

    setItemsCart(newListItems);
    // toast.success("Item excluído com sucesso!")
  }

  function handleAmountItemCart(amount: number, id: string) {
    const newQuantityArr = itemsCart.map((shirt) => {
      if (shirt.id === id) {
        return {
          ...shirt,
          quantity: amount,
        };
      }
      return shirt;
    });
    setItemsCart(newQuantityArr);
  }

  return (
    <ItemsCartContext.Provider
      value={{ addItemCart, removeItemCart, itemsCart, handleAmountItemCart }}
    >
      {children}
    </ItemsCartContext.Provider>
  );
}
