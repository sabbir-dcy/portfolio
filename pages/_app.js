import CustomCursor from '../components/CustomCursor'
import Layer from '../components/Layer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layer>
      <CustomCursor />
      <Component {...pageProps} />
    </Layer>
  )
}

export default MyApp
