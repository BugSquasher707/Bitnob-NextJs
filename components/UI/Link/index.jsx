import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';

const BitNobLink = React.forwardRef(({ children, activeStyles, to="#", ...rest}, ref) => {
  const router = useRouter();
  const ACTIVE = router.pathname.startsWith(to);
  const activeLinkStyle = ACTIVE ? (activeStyles || `text-green-300`) : ""
  
  return(
      <Link href={to}>
        <a ref={ref} className={`font-quicksand transition-colors duration-75 text-sm font-bold text-gray-200 hover:opacity-70 ${activeLinkStyle}`} {...rest}>
          {children}
        </a>
      </Link>
    )
  })

export default BitNobLink;
