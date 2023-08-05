import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"

import Image from "next/future/image"
import { useContext } from "react"
import Head from "next/head"
import { ContextShopCart } from "../../context/shopCart"
import { toast } from "react-toastify"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    priceFull: number
    description: string
    defaultPriceId: string
  }
}

type AddToCart = {
  id: string
  name: string
  price: string
  priceFull: number
  imageUrl: string
}

export default function Product({ product }: ProductProps) {
  const { addItemToCart } = useContext(ContextShopCart)

  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  function hadleAddToCart({ id, name, price, priceFull,  imageUrl }: AddToCart) {
    addItemToCart({ id, name, price, priceFull, imageUrl, quantity: 1})
    toast.success(`Camiseta adicionada ao carrinho`)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={400} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={() => hadleAddToCart({
            id: product.id,
            name: product.name,
            imageUrl: product.imageUrl,
            priceFull: product.priceFull,
            price: product.price
          })}>Colocar na sacola</button>
        </ProductDetails>        
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_ODimUSK5oJKz3H'}}
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string}> = async ({ params }) => {  
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        priceFull: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id        
      }
    },
    revalidate: 60 * 60 * 1 // 1 hours    
  }
}
