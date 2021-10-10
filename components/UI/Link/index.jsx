import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';

const BitNobLink = React.forwardRef(({ children, isActive, className, activeStyles, to="#", ...rest}, ref) => {
  const router = useRouter();
  const ACTIVE = router.pathname.startsWith(to);
  const activeLinkStyle = (isActive || ACTIVE) ? (activeStyles || `text-bitGreen-500`) : ""
  
  return(
      <Link href={to}>
        <a ref={ref} className={`font-quicksand font-semibold transition-colors duration-100 text-sm text-bitGray-300 ${className} ${activeLinkStyle}`} {...rest}>
          {children}
        </a>
      </Link>
    )
  })

export default BitNobLink;
