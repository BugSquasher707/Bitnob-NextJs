import React from 'react';


const BitNobInput = React.forwardRef(({ className, ...props}, ref)=> (
    <div className="relative" style={props.box}>
        <input style={{borderColor:"rgba(2, 13, 30, 0.1)"}} ref={ref} {...props} className={
            `appearance-none block w-full px-3 py-2 border border-1 text-black
            rounded-md placeholder-gray-100 text-sm focus:outline-none 
            focus:ring-primary focus:border-primary ${className}`
        } />
    </div>
))

export default BitNobInput