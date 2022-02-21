import { BitNobContainer, getLayout, Page, PreFooter } from "components";
import Image from "next/image";
import React from "react";

const Developers = () => (
  <Page title={"Developers"}>
    <div>
      <BitNobContainer className={`mt-44 flex flex-col items-center`}>
        <h1 className="w-full sm:w-82p5 text-bitGray-400 leading-tight text-2xl sm:text-5xl font-gordita font-bold sm:self-center text-center">
          Build Great Products on Top of Bitcoin, Lightning, and Stablecoins.
        </h1>

        <p className="mt-4 text-md sm:text-3xl font-gordita">
          Built by bitcoiners, for developers
        </p>

        <BitNobContainer
          className={"mt-12 flex flex-col sm:flex-row justify-center"}
        >
          <a
            href="https://docs.bitnob.com/"
            className="w-full sm:w-252 text-center mb-4 sm:mb-0 mr-8 py-4 bg-bitGreen-300 rounded-12 text-bitGray-700 font-bold"
            target="_blank"
          >
            Read our API Docs
          </a>

          <a
            href="https://app.bitnob.co"
            className="w-full sm:w-252 text-center sm:w-63 mr-8 px-14 py-4 rounded-12 text-bitGray-700 font-bold border-2 border-bitGreen-300"
            target="_blank"
          >
            Get our API Keys
          </a>
        </BitNobContainer>
      </BitNobContainer>

      <div className="bg-bitGreen-50 mt-10 sm:mt-32 mb-36 w-full lg:w-4/5 mx-auto p-4 sm:p-24 rounded flex flex-col items-center">
        <p className="text-bitGray-500 text-md sm:text-3xl font-bold w-full sm:w-4/6 text-center mb-4">
          Find Everything You Need to Integrate Easily
        </p>

        <p className="text-bitGray-500 text-sm sm:text-xl">
          Our API gives you a lot of capabilities and so much more
        </p>

        <div className="mt-20 sm:grid sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col items-start p-8 hover:bg-white rounded-20">
            <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-4">
              <Image src="/images/dev_4.png" width="17" height="28" alt=""/>
            </div>

            <p className="font-bold text-bitGray-500 text-sm sm:text-xl mb-1">
              Send/ Receive Bitcoin (Lightning)
            </p>

            <p className="mb-2 text-md font-medium">
              Build your own bitcoin and lightning payment processor.
            </p>
          </div>
          <div className="flex flex-col items-start p-8 hover:bg-white rounded-20">
            <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-4">
              <Image src="/images/dev_1.png" width="27" height="26" alt=""/>
            </div>

            <p className="font-bold text-bitGray-500 text-sm sm:text-xl mb-1">
              Send/ Receive Bitcoin (Onchain)
            </p>

            <p className="mb-2 text-md font-medium">
              Initiate send or receive transactions that are recorded and
              verified on the blockchain.
            </p>
          </div>

          {/* <div className="flex flex-col items-start p-8 hover:bg-white rounded-20">
            <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-4">
              <Image src="/images/dev_2.png" width="25" height="25" />
            </div>

            <p className="font-bold text-bitGray-500 text-sm sm:text-xl mb-1">
              Data
            </p>

            <p className="mb-2 text-md font-medium">
              Send and Receive Bitcoin and Lightning transactions.
            </p>
          </div> */}

          <div className="flex flex-col items-start p-8 hover:bg-white rounded-20">
            <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-4">
              <Image src="/images/dev_3.png" width="24" height="16" alt=""/>
            </div>

            <p className="font-bold text-bitGray-500 text-sm sm:text-xl mb-1">
              Virtual Cards
            </p>

            <p className="mb-2 text-md font-medium">
              Set up virtual dollar cards for your customers.
            </p>
          </div>

          <div className="flex flex-col items-start p-8 hover:bg-white rounded-20">
            <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-4">
              <Image src="/images/dev_5.png" width="25" height="25" alt=""/>
            </div>

            <p className="font-bold text-bitGray-500 text-sm sm:text-xl mb-1">
              Wallet Services
            </p>

            <p className="mb-2 text-md font-medium">
              Integrate Bitcoin wallets into your products.
            </p>
          </div>

          <div className="flex flex-col items-start p-8 hover:bg-white rounded-20">
            <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-4">
              <Image src="/images/dev_6.png" width="25" height="25" alt=""/>
            </div>

            <p className="font-bold text-bitGray-500 text-sm sm:text-xl mb-1">
              Storage
            </p>

            <p className="mb-2 text-md font-medium">
              Securely store Bitcoin and Stablecoins.
            </p>
          </div>

          <div className="flex flex-col items-start p-8 hover:bg-white rounded-20">
            <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-4">
              <Image src="/images/dev_7.png" width="17" height="25" alt=""/>
            </div>

            <p className="font-bold text-bitGray-500 text-sm sm:text-xl mb-1">
              Loans
            </p>

            <p className="mb-2 text-md font-medium">
              Offer Bitcoin-backed loans to your customers.
            </p>
          </div>

          {/* <div className="flex flex-col items-start p-8 hover:bg-white rounded-20">
            <div className="bg-bitGreen-300 w-12 h-12 rounded flex justify-center items-center mb-4">
              <Image src="/images/dev_8.png" width="36" height="36" />
            </div>

            <p className="font-bold text-bitGray-500 text-sm sm:text-xl mb-1">
              SDKs
            </p>

            <p className="mb-2 text-md font-medium">
              Connect your product to Bitnob user accounts, using the Bitnob
              Connect Oauth2 SDK.
            </p>
          </div> */}
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
            href="https://docs.bitnob.com/"
            className="w-full sm:w-252 text-center mb-4 sm:mb-0 mr-8 py-4 bg-bitGreen-300 rounded-12 text-bitGray-700 font-bold"
            target="_blank"
          >
            Read our API Docs
          </a>

          <a
            href="https://app.bitnob.co"
            className="w-full sm:w-252 text-center sm:w-63 mr-8 px-14 py-4 rounded-12 text-bitGray-700 font-bold border-2 border-bitGreen-300"
            target="_blank"
          >
            Get our API Keys
          </a>
        </BitNobContainer>
      </BitNobContainer>

      <PreFooter />
    </div>
  </Page>
);

Developers.getLayout = getLayout;
export default Developers;
