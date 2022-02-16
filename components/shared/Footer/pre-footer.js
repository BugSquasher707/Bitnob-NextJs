import { BitNobContainer, BitNobLink } from "components";
import { bitnobPlayStore, bitnobAppleStore } from "app-constants";
import { AppStore, PlayStore } from "public";
import styles from "styles/ProductPage.module.css";
import { isBrowser, screenSize } from "utils";

const PreFooter = () => (
  <BitNobContainer>
    <div
      className={`mt-12 sm:mt-36 flex lg:block flex-col items-center overflow-hidden lg:overflow-visible pt-20 px-6 lg:p-16 lg:py-12 relative rounded-2xl bg-left bg-cover ${styles.product_foot}`}
    >
      <div className="max-w-sm mx-auto lg:mx-0 lg:max-w-md text-center lg:text-left">
        <h1 className="italic text-black pb-2 leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-4xl font-gordita font-bold">
          Get More From
        </h1>
        <h1 className="italic text-black pb-2 leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-4xl font-gordita font-bold">
          Life With Bitcoin
        </h1>
        <div className="flex space-x-4 items-center mt-6 md:mt-12">
          <BitNobLink to={bitnobAppleStore}>
            <AppStore className="w-32 md:w-auto" />
          </BitNobLink>
          <BitNobLink to={bitnobPlayStore}>
            <PlayStore className="w-32 md:w-auto" />
          </BitNobLink>
        </div>
      </div>
      <img
        style={{ top: isBrowser()?.innerWidth >= screenSize.lg && "-67px" }}
        src="/images/half-phone.png"
        alt="app"
        className="lg:absolute bottom-0 max-w-sm md:max-w-lg lg:max-w-md right-0 mt-12 md:mt-20 lg:mt-0"
      />
    </div>
  </BitNobContainer>
);

export default PreFooter;
