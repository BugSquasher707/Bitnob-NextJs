import React from 'react';


const BitNobInput = React.forwardRef(({ validations, name= "field", box = {}, ...props}, ref)=> (
    <div className="relative" style={box}>
        <input ref={ref} name={name} {...props} className={
            `appearance-none block w-full px-4 py-3 border-2 bg-gray-300 text-white 
            border-transparent rounded-md placeholder-gray-50 focus:outline-none 
            focus:ring-primary focus:border-primary text-sm md:text-lg`
        } />

        {validations?.[name]?.error && (
            <span className="block mt-1 text-sm text-red-400">{validations[name].error}</span>
        )}
    </div>
))

export default BitNobInput