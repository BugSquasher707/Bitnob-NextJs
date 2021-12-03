import { bitnobAppleStore, bitnobPlayStore } from "app-constants";
import { BitNobContainer, BitNobLink, getLayout, Page } from "components";
import { AppStore, PlayStore } from "public";
import styles from "styles/ProductPage.module.css";
import { isBrowser, screenSize } from "utils";
import React from "react";
import Image from "next/image";

const Developers = () => (
  <Page title={"Developers"}>
    <div>
      <BitNobContainer className={`mt-14 flex flex-col items-center`}>
        <h1 className="w-full sm:w-2/3 text-bitGray-400 leading-tight text-2xl sm:text-5xl font-gordita font-bold sm:self-center text-center">
          Build Great Products on Top of Bitcoin, Lightning, and Stablecoins.
        </h1>

        <p className="mt-4 text-md sm:text-3xl font-gordita">
          Built by developers, for developers
        </p>

        <BitNobContainer
          className={"mt-12 flex flex-col sm:flex-row justify-center"}
        >
          <a
            href="#"
            className="w-full text-center mb-4 sm:mb-0 sm:w-63 mr-8 px-14 py-4 bg-bitGreen-300 rounded text-bitGray-700 font-bold"
          >
            Read our API Docs
          </a>

          <a
            href="#"
            className="w-full text-center sm:w-63 mr-8 px-14 py-4 rounded text-bitGray-700 font-bold border-2 border-bitGreen-300"
          >
            Get our API Keys
          </a>
        </BitNobContainer>
      </BitNobContainer>

      <div className="bg-bitGreen-50 mt-10 sm:mt-32 mb-36 w-full lg:w-4/5 mx-auto p-4 sm:p-4 rounded sm:grid sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col items-start p-8 hover:bg-white rounded-lg">
          <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-8">
            <Image src="/images/dev_1.png" width="15" height="21" />
          </div>

          <p className="mb-2 text-md font-bold">
            Get historical bitcoin data for your data-driven applications.
          </p>

          <a className="font-bold text-md text-bitGreen-500" href="#">
            See Guide
          </a>
        </div>

        <div className="flex flex-col items-start p-8 hover:bg-white rounded-lg">
          <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-8">
            <Image src="/images/dev_2.png" width="18" height="28" />
          </div>

          <p className="mb-2 text-md font-bold">
            Send and Receive Bitcoin and Lightning transactions.
          </p>

          <a className="font-bold text-md text-bitGreen-500" href="#">
            See Guide
          </a>
        </div>

        <div className="flex flex-col items-start p-8 hover:bg-white rounded-lg">
          <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-8">
            <Image src="/images/dev_3.png" width="24" height="16" />
          </div>

          <p className="mb-2 text-md font-bold">
            Set up virtual dollar cards for your customers.
          </p>

          <a className="font-bold text-md text-bitGreen-500" href="#">
            See Guide
          </a>
        </div>

        <div className="flex flex-col items-start p-8 hover:bg-white rounded-lg">
          <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-8">
            <Image src="/images/dev_4.png" width="25" height="20" />
          </div>

          <p className="mb-2 text-md font-bold">
            Build your own bitcoin and lightning payment processor.
          </p>

          <a className="font-bold text-md text-bitGreen-500" href="#">
            See Guide
          </a>
        </div>

        <div className="flex flex-col items-start p-8 hover:bg-white rounded-lg">
          <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-8">
            <Image src="/images/dev_5.png" width="25" height="25" />
          </div>

          <p className="mb-2 text-md font-bold">
            Integrate Bitcoin wallets into your products.
          </p>

          <a className="font-bold text-md text-bitGreen-500" href="#">
            See Guide
          </a>
        </div>

        <div className="flex flex-col items-start p-8 hover:bg-white rounded-lg">
          <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-8">
            <Image src="/images/dev_6.png" width="27" height="27" />
          </div>

          <p className="mb-2 text-md font-bold">
            Securely store Bitcoin and Stablecoins.
          </p>

          <a className="font-bold text-md text-bitGreen-500" href="#">
            See Guide
          </a>
        </div>

        <div className="flex flex-col items-start p-8 hover:bg-white rounded-lg">
          <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-8">
            <Image src="/images/dev_7.png" width="24" height="24" />
          </div>

          <p className="mb-2 text-md font-bold">
            Offer Bitcoin-backed loans to your customers.
          </p>

          <a className="font-bold text-md text-bitGreen-500" href="#">
            See Guide
          </a>
        </div>

        <div className="flex flex-col items-start p-8 hover:bg-white rounded-lg">
          <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-8">
            <Image src="/images/dev_8.png" width="25" height="25" />
          </div>

          <p className="mb-2 text-md font-bold">
            Real-time notifications of wallet transactions.
          </p>

          <a className="font-bold text-md text-bitGreen-500" href="#">
            See Guide
          </a>
        </div>

        <div className="flex flex-col items-start p-8 hover:bg-white rounded-lg">
          <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-8">
            <Image src="/images/dev_9.png" width="36" height="36" />
          </div>

          <p className="mb-2 text-md font-bold">
            Connect your product to Bitnob user accounts, using the Bitnob
            Connect Oauth2 SDK.
          </p>

          <a className="font-bold text-md text-bitGreen-500" href="#">
            See Guide
          </a>
        </div>
      </div>

      <BitNobContainer className={`mt-24 flex flex-col w-full items-center`}>
        <p className="text-2xl sm:text-3xl text-center font-gordita font-bold">
          Start Building With Our Reliable APIs
        </p>

        <p className="mt-2 text-sm sm:text-xl w-full sm:w-2/3 text-center">
          Learn more about our APIs, and get started.
        </p>

        <BitNobContainer
          className={"mt-12 flex flex-col sm:flex-row justify-center"}
        >
          <a
            href="#"
            className="w-full text-center mb-4 sm:mb-0 sm:w-63 mr-8 px-14 py-4 bg-bitGreen-300 rounded text-bitGray-700 font-bold"
          >
            Read our API Docs
          </a>

          <a
            href="#"
            className="w-full text-center sm:w-63 mr-8 px-14 py-4 rounded text-bitGray-700 font-bold border-2 border-bitGreen-300"
          >
            Get our API Keys
          </a>
        </BitNobContainer>
      </BitNobContainer>

      <BitNobContainer>
        <div
          className={`mt-12 sm:mt-36 flex lg:block flex-col items-center overflow-hidden lg:overflow-visible pt-20 px-6 lg:p-16 lg:py-12 relative rounded-2xl bg-left bg-cover ${styles.product_foot}`}
        >
          <div className=" max-w-sm mx-auto lg:mx-0 lg:max-w-xs text-center lg:text-left">
            <h1 className="text-black pb-2 leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-4xl font-gordita font-bold">
              Freedom For <br className="md:hidden" /> Your Money
            </h1>
            <div className="flex space-x-4 justify-center items-center mt-6 md:mt-12">
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
    </div>
  </Page>
);

Developers.getLayout = getLayout;
export default Developers;
