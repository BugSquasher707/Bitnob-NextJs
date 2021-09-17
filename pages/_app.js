import 'tailwindcss/tailwind.css';
import '../styles/global.css'

function BitNob({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);
  return getLayout(<Component {...pageProps} />)
}

export default BitNob
