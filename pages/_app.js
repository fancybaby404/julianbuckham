import '../styles/globals.css'
import Nav from '../components/Nav'
import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
