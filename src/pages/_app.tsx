import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import Image from "next/image"
import { Container, Header } from "../styles/pages/app"
import Link from "next/link"

import * as Dialog from "@radix-ui/react-dialog"

import { ShopCartProvider } from "../context/shopCart"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/toastify.css';
import { ButtonBag } from "../components/ButtonBag"
import { CartModal } from "../components/CartModal"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {  
  return (
    <ShopCartProvider>
      <Container>
        <Header>
          <Link href={"/"}>
            <a>
              <Image src={logoImg} alt="" />
            </a>
          </Link>

          <Dialog.Root>
            <Dialog.Trigger style={{ backgroundColor: 'transparent', borderWidth: 0}}>
              <ButtonBag />
            </Dialog.Trigger>

            <CartModal />
          </Dialog.Root>
        </Header>
        <Component {...pageProps} />
      </Container> 
      <ToastContainer autoClose={2000} theme="colored" />   
    </ShopCartProvider>
  )
}
