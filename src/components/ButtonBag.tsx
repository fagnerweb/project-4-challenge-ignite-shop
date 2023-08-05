
import { useContext } from "react";
import { Handbag } from "@phosphor-icons/react";

import { ContextShopCart } from "../context/shopCart";
import { ButtonContainer } from "../styles/components/buttonBag";

export function ButtonBag() {
  const { items } = useContext(ContextShopCart)

  return (
    <ButtonContainer size={items.length > 9 ? 'small': 'large'}>
      {items.length > 0 && items.length <= 9 && <span>{items.length}</span>}
      {items.length > 9 && <span>9+</span>}
      <Handbag size={24} color='#8D8D99' weight='bold' />
    </ButtonContainer>
  )
}