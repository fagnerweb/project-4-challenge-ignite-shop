import Link from "next/link";
import { BoxImages, ImageContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/future/image";
import Head from "next/head";
import Product from "./product/[id]";

interface Product {
  id: string
  name: string
  imageUrl: string
  quantity: number
}

interface SuccessProps {
  customerName: string
  products: Product[]
}

export default function Success({ customerName, products }: SuccessProps) {    

  const totalOfProducts = products.reduce((acc, productCurrent) => {
    return acc + productCurrent.quantity
  }, 0)

  return (
    <>    
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>


        <BoxImages>
          {products.map(product => {          
            return (
              <ImageContainer key={product.id}>
                <span>{product.quantity}</span>
                <Image width={120} height={110} src={product.imageUrl} alt="" />
              </ImageContainer>
            )
          })}
        </BoxImages>
    
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de <strong>{totalOfProducts} camiseta(s)</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">
          <a>
            Voltar ao catálogo
          </a>
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)


  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  // const product = session.line_items.data[0].price.product as Stripe.Product

  const newProducts = session.line_items.data.map(product => {
    const item = product.price.product as Stripe.Product

    return {
      id: product.price.id,
      name: item.name,
      imageUrl: item.images[0],
      quantity: product.quantity
    }
  })

  return {
    props: {
      customerName,
      products: newProducts
    }
  }
}