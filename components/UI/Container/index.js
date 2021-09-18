

const BitNobContainer = ({ children, className, ...rest })=> (
    <div className={`container mx-auto ${className}`} {...rest}>
        {children}
    </div>
)
export default BitNobContainer