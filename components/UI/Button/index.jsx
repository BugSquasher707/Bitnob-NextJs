import React from "react";
import Loading from "../Loader";


const BitNobButton = React.forwardRef(({ children, variant = 'default', isLoading }, ref) => {

    const variants = {
        default: 'bg-green-300 text-black w-full block  focus:outline-none hover:bg-green-600 active:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-400',
    }
    
    return(
        <button ref={ref} className={`font-quicksand px-8 md:px-10 py-1 md:py-2 text-sm disabled:opacity-50 text-center transition duration-100 rounded-xl font-medium ${variants[variant]}`}>
           <React.Fragment>
               { isLoading && <Loading /> } {children}
           </React.Fragment>
        </button>
    )
})

export default BitNobButton