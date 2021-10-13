import React from 'react';


const BitNobInput = React.forwardRef(({ className, box, ...props}, ref)=> (
    <div className={`relative ${box}`}>
        <input 
            style={{borderColor:"rgba(2, 13, 30, 0.1)"}} 
            ref={ref} {...props} 
            className={
            `appearance-none focus:outline-none block w-full px-3 py-2 border border-bitGray-100 text-black
            rounded-md placeholder-bitGray-100 text-sm ${className}`
        } />
    </div>
))

export default BitNobInput