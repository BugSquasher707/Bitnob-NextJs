import React from "react";
import Loading from "../Loader";


const BitNobButton = React.forwardRef(({ children, className, variant = 'default', isLoading, ...rest }, ref) => {

    const variants = {
        black: 'px-4 md:px-6 py-1 md:py-2 bg-black text-white rounded-lg w-full block focus:outline-none hover:bg-black active:bg-black focus:ring-black',
        default: 'px-8 md:px-10 py-1 md:py-2 bg-bitGreen-200 rounded-xl text-black w-full block focus:outline-none hover:bg-bitGreen-600 active:bg-bitGreen-700 focus:ring-bitGreen-400',
    }
    
    return(
        <button 
            ref={ref} 
            className={`hover:opacity-90 appearance-none focus:ring-2 focus:ring-offset-4 font-bold font-quicksand text-sm disabled:opacity-50 text-center active:opacity-80 transition-all duration-300 ${className} ${variants[variant]}`} 
            {...rest}>
           <React.Fragment>
               { isLoading && <Loading /> } {children}
           </React.Fragment>
        </button>
    )
})

export default BitNobButton