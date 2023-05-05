import Store from '@/context/DataContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Store><Component {...pageProps} /></Store>
}
