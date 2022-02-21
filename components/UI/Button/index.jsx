import { BitNobLink } from "components";
import React from "react";
import Loading from "../Loader";

{
  /* eslint-disable-next-line */
}
const BitNobButton = React.forwardRef(
  (
    { children, asLink, className, variant = "default", isLoading, ...rest },
    ref
  ) => {
    const variants = {
      black:
        "px-4 md:px-6 py-1 md:py-2 bg-black text-white rounded-lg w-full block hover:bg-black active:bg-black",
      default:
        "px-10 py-2 md:py-2 bg-bitGreen-200 rounded-xl text-black w-full block hover:bg-bitGreen-600 active:bg-bitGreen-700",
    };

    return (
      <>
        {asLink ? (
          <BitNobLink to={asLink}>
            <button
              ref={ref}
              className={`hover:opacity-90 appearance-none font-bold font-quicksand text-sm disabled:opacity-50 text-center active:opacity-80 transition-all duration-300 ${className} ${variants[variant]}`}
              {...rest}
            >
              <React.Fragment>
                {isLoading && <Loading />} {children}
              </React.Fragment>
            </button>
          </BitNobLink>
        ) : (
          <button
            ref={ref}
            className={`hover:opacity-90 appearance-none font-bold font-quicksand text-sm disabled:opacity-50 text-center active:opacity-80 transition-all duration-300 ${className} ${variants[variant]}`}
            {...rest}
          >
            <React.Fragment>
              {isLoading && <Loading />} {children}
            </React.Fragment>
          </button>
        )}
      </>
    );
  }
);

export default BitNobButton;
