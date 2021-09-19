import React from 'react';


const BitNobInput = React.forwardRef(({ className, ...props}, ref)=> (
    <div className="relative" style={props.box}>
        <input style={{borderColor:"rgba(2, 13, 30, 0.1)"}} ref={ref} {...props} className={
            `appearance-none block w-full px-3 py-2 border border-bitGray-100 text-black
            rounded-md placeholder-bitGray-100 text-sm focus:outline-none
            focus:border-bitGreen-200 focus:shadow-md transition-all duration-300 ${className}`
        } />
    </div>
))

export default BitNobInput