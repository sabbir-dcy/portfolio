import Layer from '../components/Layer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layer>
      <Component {...pageProps} />
    </Layer>
  )
}

export default MyApp
