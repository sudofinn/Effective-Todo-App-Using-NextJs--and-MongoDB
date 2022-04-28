import '../styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react"
import { ColorModeScript } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider>
       <ColorModeScript initialColorMode='dark' />
     <Component {...pageProps} />
     </ChakraProvider>
  )
}

export default MyApp
