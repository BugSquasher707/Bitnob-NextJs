import {
  CogIcon,
  InvoiceIcon,
  PeopleIcon,
  TicketIcon,
  TransactionIcon,
  WalletIcon,
} from "public";

const businessPageData = {
  section1: {
    heading: "Accept business payments in Bitcoin",
    description:
      "Bitnob for Businesses is an enterprise platform that enables businesses accept payments for services in Bitcoin",
    cover: "/images/business-cover.png",
  },
  section2: {
    heading: "All the features your business needs",
    description:
      "Bitnob for Business has everything your business needs for daily use",
  },
  dataList: [
    {
      cover: "/svgs/transaction.svg",
      title: "Transactions",
      icon: <TransactionIcon />,
      description: `You can use Bitnob for business via a dashboard or via our public API for businesses that wants to integrate our services on their own platform`,
    },
    {
      cover: "/svgs/new-invoice.svg",
      asset: "/svgs/invoices-art.svg",
      title: "Invoices",
      icon: <InvoiceIcon />,
      description: `You can use Bitnob for business via a dashboard or via our public API for businesses that wants to integrate our services on their own platform`,
    },
    {
      cover: "/svgs/customer-form.svg",
      asset: "/svgs/customer-art.svg",
      title: "Customers",
      icon: <PeopleIcon />,
      description: `You can use Bitnob for business via a dashboard or via our public API for businesses that wants to integrate our services on their own platform`,
    },
    {
      cover: "/svgs/payment-form.svg",
      title: "Payment Links & Processing",
      icon: <TicketIcon />,
      description: `With Bitnob for business, payments can either be processed Onchain or via the Lightning Network.`,
    },
    {
      cover: "/svgs/api-form.svg",
      asset: "/svgs/api-art.svg",
      title: "API Integration",
      icon: <CogIcon />,
      description: `Our API integration enables businesses build on our in house infrastructure. It is a seamless process with our detailed documentation by your side.
            `,
    },
    {
      cover: "/svgs/wallet-service.svg",
      title: "Wallet Services",
      icon: <WalletIcon />,
      description: `We own our bitcoin and Lightning Infrastructure which handles the Bitnob Payment Process and enables us offer Cryptocurrency Wallet services to businesses that wishes to use Bitnob for Business`,
    },
  ],
  reviews: [
    {
      id: 1,
      description: `Bitnob is the go-to for BTC accumulation at your pace. Without Bitnob, I would never have thought about investing in Bitcoin.`,
      author: "Ebele Alaka",
      position: "Customer",
    },
    {
      id: 2,
      description: `Just bought a make-up foundation on Amazon. It fucking works! This changes everything. A few weeks ago, I was begging people to use their dollar cards. 😩 The absolute ghetto! Thanks`,
      author: "Michael Keels",
      position: "Customer",
    },
    {
      id: 3,
      description: `Bitnob is such an amazing app that creates opportunities for financial freedom via simple and authentic features.`,
      author: "Babatunde Aiyetanju",
      position: "Customer",
    },
    {
      id: 4,
      description: `My son introduced me to this and ever since then I have had a fantastic experience with my money.`,
      author: "Stella Chisa",
      position: "Customer",
    },
    {
      id: 5,
      description: `Saving  in USD, Bitcoin, and other anti-inflationary vehicles hasn't been easier. Bitnob makes wealth creation seamless for young Africans.`,
      author: "Olumide Adaramoye",
      position: "Customer",
    },
    {
      id: 6,
      description: `Customer support is in real time and friendly. UI is 100%.`,
      author: "Adewale Olaoye",
      position: "Customer",
    },
    {
      id: 7,
      description: `Amazing app. First time I can plan for my future daily, weekly, and monthly. Thanks to Bitnob!`,
      author: "Wiseman Kandas",
      position: "Customer",
    },
    {
      id: 8,
      description: `Bitnob is my first dance with crypto. Not a full blown tap dance yet... but more like a waltz 😅. But it’s such an easy product for us non-crypto intellectuals to use. I love the simplicity of the product, but I love the team behind it even more.`,
      author: "Edmond Olotu",
      position: "Customer",
    },
    {
      id: 9,
      description: `Very good idea honestly and their UX is sleek. My weekly buys have been seamless, the only time I had an issue the support team had it sorted right away. Quickly becoming my favourite Bitcoin app.`,
      author: "Gafa Home",
      position: "Customer",
    },
    {
      id: 10,
      description: `In my BTC travails, Bitnob is one of the best exchange sites I have come across.`,
      author: "Jay Jay",
      position: "Customer",
    },
    {
      id: 11,
      description: `No better app than Bitnob. So easy and user friendly.`,
      author: "Harrison Wealth",
      position: "Customer",
    },
    {
      id: 12,
      description: `@Bitnob_official is one of the best finance apps I’ve ever used. It’s really responsive. I hate that they don’t do enough marketing for it.`,
      author: "Tamara Posibi",
      position: "Customer",
    },
  ],
  section3: {
    title: "Make your business operations seamless",
    cover: "/svgs/business-page-foot.svg",
  },
};

export default businessPageData;
