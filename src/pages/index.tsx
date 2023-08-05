import { GetStaticProps } from 'next'
import Head from 'next/head'
import { stripe } from '../lib/stripe'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { Handbag } from '@phosphor-icons/react'

import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'
import Link from 'next/link'
import { useContext } from 'react'
import { ContextShopCart } from '../context/shopCart'

import { toast } from 'react-toastify';
import { formatCurrency } from '../utils/formatCurrency'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
    priceFull: number
    priceId: string
  } []
}

export default function Home({ products }: HomeProps) {
  const { addItemToCart } = useContext(ContextShopCart)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48
    }    
  })

  type AddToCart = {
    id: string
    name: string
    price: string
    priceFull: number
    imageUrl: string
  }

  function hadleAddToCart({ id, name, price, priceFull,  imageUrl }: AddToCart) {
    addItemToCart({ id, name, price, priceFull, imageUrl, quantity: 1})
    toast.success(`Camiseta adicionada ao carrinho`)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className='keen-slider'>      
        {products.length > 0 &&  products.map(product => (
          <Product as="article" key={product.id} className='keen-slider__slide'>
            <Link href={`/product/${product.id}`}  prefetch={false}>
              <a>
                <Image style={{border: "1px solid red"}} src={product.imageUrl} width={520} height={480} alt=''/>
              </a>
            </Link>
            <footer>
              <div className="info">
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>
              <button onClick={() => hadleAddToCart({
                id: product.priceId,
                name: product.name,
                price: product.price,
                priceFull: product.priceFull,
                imageUrl: product.imageUrl
              })}>
                <Handbag size={32} color='white' weight='bold' />
              </button>
            </footer>
          </Product>          
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })  

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formatCurrency(price.unit_amount / 100) ,
      priceFull: price.unit_amount / 100,
      priceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60  * 2 // 2 hours
  }
}