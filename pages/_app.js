import CustomCursor from '../components/CustomCursor'
import Layer from '../components/Layer'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
function MyApp({ Component, pageProps, router }) {
  return (
    <Layer>
      <CustomCursor />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layer>
  )
}

export default MyApp
