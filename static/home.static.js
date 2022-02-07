import {
  Buy,
  SavingsPig,
  Send,
  TickSquare,
  TimeCircle,
  Trace1,
  Trace2,
  Trace3,
  Trace4,
  WalletDark,
  World,
} from "../public";

const homeData = {
  landing: {
    assets: "/images/artboard.png",
    cover: "/images/smartphone.png",
    heading: ["Get more", "from life with Bitcoin"],
    description: [
      `Bitnob is a delightful way to save, borrow, pay, receive, and get paid in Bitcoin on time.`,
    ],
  },
  solutionSection: {
    image: "/images/solution.png",
    emojis: [
      "/images/girl-cap.png",
      "/images/fav.png",
      "/images/black-girl.png",
      "/images/black-man.png",
    ],
    heading: `When second best isn't enough, use Bitnob.`,
    description: [
      "If you need to experience something different, something better, Bitnob helps you:",
    ],
    list: [
      {
        title: "Save in Bitcoin and USD",
        description:
          "Easily save for yourself or your kids in Bitcoin and USD, accessible globally. We save you the time and effort ",
        icon: <SavingsPig />,
      },
      {
        title: "Borrow in Minutes",
        description: `Use your Bitcoin savings to access loans in minutes, anywhere you are.`,
        icon: <TimeCircle />,
      },
      {
        title: "Make payments and get paid <br />from anywhere",
        description: `Pay people around the world and enjoy fast and easy payments anywhere you are.`,
        icon: <World />,
      },
    ],
  },
  howItWorks: {
    cover: "/images/how-it-works.png",
    heading: "You can do much more",
    description:
      "We can help you save and manage your money in a way that maximizes the value of your returns.",
    list: [
      {
        title: "Online Shopping",
        description: `Use our dollar virtual MasterCard backed by stablecoins to make payments on online stores across the world.`,
        icon: <Buy />,
      },
      {
        title: "Decide how you get settled",
        description: `You can customize how you want your payments to be settled. Want all your Bitcoin receipts to be instantly converted into USD or sent to your local bank account? Easy.`,
        icon: <TickSquare />,
      },
      {
        title: "Cheap and Instant Bitcoin Transfers",
        description: `Built on the lightning network, you can send and receive money almost instantly and at little to no fees.`,
        icon: <Send />,
      },
      {
        title: "Automated Bitcoin Purchases",
        description: `Save daily, weekly or monthly in Bitcoin. Fund your account and let us handle your purchases for you.  You have time to do the things you love while not missing out on accumulating Bitcoin.`,
        icon: <WalletDark />,
      },
    ],
  },
  slides: [
    { image: "/images/slide-0.webp" },
    {
      title: "Lightning Transactions",
      image: "/images/slide-1.webp",
      trace: <Trace1 />,
    },
    { title: "Savings", image: "/images/slide-2.webp", trace: <Trace2 /> },
    {
      title: "Virtual Dollar Cards",
      image: "/images/slide-3.webp",
      trace: <Trace3 />,
    },
    { title: "NobCredit", image: "/images/slide-4.webp", trace: <Trace4 /> },
  ],
  seeInAction: {
    heading: "Watch video",
    image: "/images/video-bg.png",
    description:
      "Enough with the talking, why not see for yourself. Have a glimpse of our app in acton.",
  },
  reviews: {
    heading: "Built to make using Bitcoin delightful for you.",
    description:
      "When second best is not an option, use Bitnob. This is what others have to say about us",
    assets: [
      "/images/r-1.png",
      "/images/r-2.png",
      "/images/r-3.png",
      "/images/r-4.png",
      "/images/r-5.png",
      "/images/r-6.png",
    ],
    comments: [
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
        description: `Bitnob is my first dance with bitcoin. Not a full blown tap dance yet... but more like a waltz 😅. But it’s such an easy product for us non-bitcoin intellectuals to use. I love the simplicity of the product, but I love the team behind it even more.`,
        author: "Edmund Olotu",
        position: "Customer",
      },
      {
        id: 9,
        description: `In my BTC travails, Bitnob is one of the best exchange sites I have come across.`,
        author: "Jay Jay",
        position: "Customer",
      },
      {
        id: 10,
        description: `No better app than Bitnob. So easy and user friendly.`,
        author: "Harrison Wealth",
        position: "Customer",
      },
      {
        id: 11,
        description: `@Bitnob_official is one of the best finance apps I’ve ever used. It’s really responsive. I hate that they don’t do enough marketing for it.`,
        author: "Tamara Posibi",
        position: "Customer",
      },
    ],
  },
  business: {
    image: "/svgs/business-cover.svg",
    heading: "Bitnob for Business",
    description:
      "We've crafted simple tools to aid the complex needs of your business, from accepting payments in bitcoin, invoices and payment links, APIs for 3rd party integration, automatic settlements, customer management, and more.",
  },
  preFooter: [
    {
      title: "We're a dedicated team",
      description:
        "focused on making the preservation of your wealth super easy.",
    },
    {
      title: "Let's help you grow",
      description:
        "we’re concerned with your best interests. So let us help you grow.",
    },
    {
      title: "Getting you started is simple",
      description:
        "All you need is to have you phone handy and download the app from your appstore.",
    },
  ],
};

export default homeData;
