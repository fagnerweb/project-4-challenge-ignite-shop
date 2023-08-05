import { useContext, useState } from "react"
import axios from "axios"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "@phosphor-icons/react"

import { CartEmpty, Close, Content, Item, Overlay } from "../styles/components/cartModal"

import { ContextShopCart } from "../context/shopCart"

import { formatCurrency } from "../utils/formatCurrency"
import { limitCaracteres } from "../utils/limitCaracteres"

export function CartModal() {
  const [ creatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const {  items, removeItemById } = useContext(ContextShopCart)

  async function handleBuyProducts() {   
    const priceIds = items.map(item => {
      return {
        price: item.id,
        quantity: item.quantity
      }
    })

    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceIds,
      })
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  const totalPrice = items.reduce((acc, currentItem) => {
    let total = currentItem.quantity * currentItem.priceFull
    
    return acc + total
  }, 0)

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Close>
          <X size={24} weight="bold"/>
        </Close>
        {items.length > 0 ? (
          <>        
            <div className="top">
              <h2>Sacola de Compras</h2>
              <div className="wraper">                                
                {items.map(item => (
                  <Item key={item.id}>
                    <div className="cover">
                      <Image src={item.imageUrl} width={94} height={94} alt="" />
                    </div>
                    <div className="info">
                      <h3>{limitCaracteres(item.name, 22)} <span>({item.quantity} Qtd.)</span></h3>
                      <span>{item.price}</span>
                      <button onClick={() => removeItemById(item.id)}>Remover</button>
                    </div>
                  </Item>
                ))}
              </div>
            </div>
            <footer className="bottom">
              <table>
                <tr>
                  <td>Quantidade</td>
                  <td>{items.length} itens</td>
                </tr>
                <tr className="total">
                  <td>Valor total</td>
                  <td>{formatCurrency(totalPrice)}</td>
                </tr>
              </table>
              <button 
                disabled={creatingCheckoutSession}
                onClick={handleBuyProducts}
              >Finalizar compra</button>
            </footer> 
          </>       
        ) : (
          <CartEmpty>
            <span>O Carrinho esta vazio, adicione um produto para poder finalizar a compra.</span>
          </CartEmpty>
        ) }
      </Content>
    </Dialog.Portal>
  )
}