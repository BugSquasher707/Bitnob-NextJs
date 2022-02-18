const BitNobContainer = ({ children, className, ...rest }) => {

  return (
    <div className={`container mx-auto ${className || ""}`} {...rest}>
      {children}
    </div>
  );
};
export default BitNobContainer;
