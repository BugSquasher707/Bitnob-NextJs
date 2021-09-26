import 'tailwindcss/tailwind.css';
import '../styles/global.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function BitNob({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);
  return getLayout(<Component {...pageProps} />)
}

export default BitNob
