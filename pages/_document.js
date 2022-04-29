// pages/_document.js

import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from "../styles/theme"

import { ColorModeScript, extendTheme, ThemeProvider } from '@chakra-ui/react'


export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main /> 
          <NextScript />
        </body>
      </Html>
    )
  }
}