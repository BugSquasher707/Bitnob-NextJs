import {
  Accordion,
  BitNobContainer,
  BitNobLink,
  getLayout,
  Page,
  PreFooter,
} from "components";
import React from "react";
import { headerFooterLinks } from "static";

const { footerLinks } = headerFooterLinks;

const FAQ = () => (
  <Page title={"FAQs"}>
    <div>
      <BitNobContainer className={`mt-14 flex flex-col`}>
        <h1 className="text-bitGray-400 leading-tight text-2xl sm:text-5xl font-gordita font-bold sm:self-center text-center">
          Frequently Asked Questions
        </h1>
      </BitNobContainer>

      <BitNobContainer className={"mt-20 mb-22 w-full sm:w-4/5"}>
        <Accordion
          className="mb-5"
          question="How do you calculate BTC to Naira?"
          answer="We use the current market rate at all times. Our calculation is fully dependent on the current market rate at the time you initiate a withdrawal."
        />

        <Accordion
          className="mb-5"
          question="What are the types of saving plans available on Bitnob?"
          answer="Bitnob operates easy access savings where you can withdraw from your plan whenever you wish. We are also introducing “Bitnob Locked”; a savings plan that can only be unlocked upon maturity date."
        />

        <Accordion
          className="mb-5"
          question="Where can I see the Current Dollar Rate on the App?"
          answer="While we don’t have a dedicated “Dollar Rate” button; users can see the equivalent Dollar (USD) / Naira (NGN) rate during withdrawals."
        />

        <Accordion
          className="mb-5"
          question="What Is Dollar-Cost Averaging?"
          answer="Dollar-cost averaging (DCA) is an investment strategy in which an investor divides up the total amount to be invested across periodic purchases of a target asset in an effort to reduce the impact of volatility on the overall purchase. The purchases occur at regular intervals, regardless of the assets price.

          Recurring Buy gives App users the ability to apply this investment strategy DCA to bitcoin by creating recurring purchases of bitcoin."
        />

        <Accordion
          className="mb-5"
          question="Should I be worried about an App Crash?"
          answer="No, you shouldn’t be worried. This is because we regularly perform maintenance on the App to give our users a seamless experience."
        />

        <Accordion
          className="mb-5"
          question="I mistakenly deleted the App. Is my data still safe and intact?"
          answer="Upon the App delete; all your data is safe. They will be restored as soon as your re-install and log in with your details."
        />

        <Accordion
          className="mb-5"
          question="What are the minimum and maximum withdrawal limit on Bitnob?"
          answer="The minimum and maximum withdrawal limits are $1 and $x, respectively."
        />

        <Accordion
          className="mb-5"
          question="What’s the difference between USD and BTC wallet?"
          answer="BTC and USD wallets are funded with Bitcoin and United States Dollars respectively. Each of these wallets has its individual market rate. When you withdraw from your plans, you have the option to save your funds at the Bitcoin rate or Dollars rate as you wish."
        />

        <Accordion
          className="mb-5"
          question="Can I add multiple Bank accounts or cards to my Bitnob profile?"
          answer="Yes, you can. To add a new card, click on the account tab, then click on My Card Tab and select add a new card."
        />
      </BitNobContainer>

      <BitNobContainer className={`mt-24 flex flex-col w-full items-center`}>
        <p className="text-xl sm:text-3xl font-gordita font-bold">
          Still Need Help?
        </p>

        <p className="mt-2 text-sm sm:text-xl w-full sm:w-2/3 text-center">
          Our team is happy to answer your questions. Contact us and we’ll be in
          touch as soon as possible.
        </p>

        <ul className="flex space-x-7 mt-9 sm:mt-10">
          {Object.entries(footerLinks.socials).map(([key, { link, icon }]) => (
            <li key={key} title={key}>
              <BitNobLink
                className="text-black text-lg hover:text-bitGreen-200"
                isExternal
                to={link}
                title={key}
              >
                {icon}
              </BitNobLink>
            </li>
          ))}
        </ul>
      </BitNobContainer>

      <PreFooter />
    </div>
  </Page>
);

FAQ.getLayout = getLayout;
export default FAQ;
