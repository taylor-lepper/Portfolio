import '@/styles/globals.css'
import Nav from "../componants/nav"

export default function App({ Component, pageProps }) {
  return (
  <>
  <Nav/>
    <Component {...pageProps} />
  </>
  )
}
