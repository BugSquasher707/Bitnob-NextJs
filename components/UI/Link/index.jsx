import React from 'react';
import Link from 'next/link'

const BitNobLink = React.forwardRef(({ children, to="#", ...rest}, ref) => (
  <Link href={to}>
    <a ref={ref} className="font-quicksand transition-colors duration-75 text-sm font-bold hover:opacity-80 " {...rest}>
      {children}
    </a>
  </Link>
))

export default BitNobLink;
