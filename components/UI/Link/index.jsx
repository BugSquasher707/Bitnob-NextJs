import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import classNames from 'classnames';

const BitNobLink = React.forwardRef(({ children, isExternal, isActive, className = '', activeStyles, to ="", ...rest}, ref) => {
  const router = useRouter();
  const ACTIVE = router.pathname.startsWith(to);
  const activeLinkStyle = (isActive || ACTIVE) ? activeStyles : ""
  
  return(
      <>
        {
          isExternal ?
          <a href={to} ref={ref} className={
            classNames(
              {'text-bitGray-300': className.indexOf('text-') === -1}, 
              'font-quicksand transition-colors duration-100 text-sm ',
              className, 
              activeLinkStyle
            )} {...rest}>
            {children}
          </a>
          :
          <Link href={to}>
            <a ref={ref} className={
              classNames(
                {'text-bitGray-300': className.indexOf('text-') === -1}, 
                'font-quicksand transition-colors duration-100 text-sm ',
                className, 
                activeLinkStyle
              )} {...rest}>
              {children}
            </a>
          </Link>
        }
      </>
    )
  })

export default BitNobLink;
