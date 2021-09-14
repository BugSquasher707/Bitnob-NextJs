import React from 'react';
import Link from 'next/link'

const BitNobLink = React.forwardRef(({ children, to="#", ...rest}, ref) => (
  <Link href={to}>
    <a ref={ref} className="font-medium hover:opacity-50" {...rest}>
      {children}
    </a>
  </Link>
))

export default BitNobLink;
