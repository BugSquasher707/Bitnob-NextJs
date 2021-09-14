import React from "react";
import Loading from "../Loader";


const BitNobButton = React.forwardRef(({ children, variant = 'default', isLoading }, ref) => {

    const variants = {
        default: 'bg-primary w-full block disabled:opacity-50 text-center px-4 py-3 shadow-sm text-sm font-medium rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
        outlined: 'w-full block disabled:opacity-50 justify-center transition duration-100 py-3 px-4 border border-primary rounded-sm shadow-sm text-sm font-medium text-primary hover:opacity-50 focus:ring-primary focus:ring-offset-2 focus:ring-primary'
    }
    

    return(
        <button ref={ref} className={variants[variant]}>
           <React.Fragment>
               { isLoading && <Loading /> } {children}
           </React.Fragment>
        </button>
    )
})

export default BitNobButton