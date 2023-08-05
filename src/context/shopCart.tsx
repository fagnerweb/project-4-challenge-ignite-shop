import { ReactNode, createContext, useState } from "react";

interface Cart {
  id: string
  name: string
  price: string
  priceFull: number
  imageUrl: string
  quantity: number
}

interface ShopCartContext {
  items: Cart[]
  addItemToCart: (item: Cart) => void
  removeItemById: (id: string) => void
}

interface ShopCartProviderProps {
  children: ReactNode
}

export const ContextShopCart = createContext({} as ShopCartContext)

export function ShopCartProvider({ children }: ShopCartProviderProps) {
  const [items, setItems] = useState<Cart[]>([])

  function addItemToCart(item: Cart) {
    setItems(prevState => {
      const itemIndex = prevState.findIndex(state => state.id === item.id)
      
      if (itemIndex !== -1) {
        const updatedItems = [...prevState];
        updatedItems[itemIndex] = {
          ...prevState[itemIndex],
          quantity: prevState[itemIndex].quantity + 1
        }
        return updatedItems
      } else {
        return [...prevState, { ...item, quantity: 1}]
      }
    })
  }

  function removeItemById(id: string) {
    setItems(prevState => {
      return prevState.filter(item => item.id !== id)
    })
  }

  return (
    <ContextShopCart.Provider value={{
      items,
      addItemToCart,
      removeItemById
    }}>
      {children}
    </ContextShopCart.Provider>
  )
}