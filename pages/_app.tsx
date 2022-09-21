import '../styles/globals.css'
import { MediumProvider } from '../context/MediumContext'

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
      <MediumProvider>
        <Component {...pageProps} />
      </MediumProvider>
  )
}

export default MyApp
