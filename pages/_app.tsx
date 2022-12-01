import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ShoppingCartProvider } from "../Context/ShoppingCartContext"
import { ProSidebarProvider } from 'react-pro-sidebar';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProSidebarProvider>
    <ShoppingCartProvider>
  <Component {...pageProps} />
  </ShoppingCartProvider>
  </ProSidebarProvider>
  )
  
}

export default MyApp
