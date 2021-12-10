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
      "Specially built for merchants, content creators, and small business owners to quickly start accepting payments in Bitcoin in minutes.",
    cover: "/images/business-cover.png",
  },
  section2: {
    heading: "Tools to manage your Bitcoin payments",
    description:
      "Simple tools to help you get started with Bitcoin as a business",
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
  section3: {
    title: "Making your business grow seamlessly across borders",
    cover: "/svgs/business-page-foot.svg",
  },
};

export default businessPageData;
