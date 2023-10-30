import Hero from "../components/Landing/Hero";
import Stats from "../components/Landing/Stats";
import Info from "../components/Landing/Info";
import AnalyticsImages from "../components/Landing/AnalyticsImages";
import SubHero from "../components/Landing/sub-hero/SubHero";
import Board from "../components/Landing/Board";
import TextImage from "../components/Landing/TextImage";
import TextImageBottom from "../components/Landing/TextImageBottom";
import FaqContainer from "../components/Landing/FaqContainer";
import TestimonyContainer from "../components/Landing/TestimonyContainer";
import about_img5 from "../assets/about_img5.png";
import pk from "../assets/pk.png";
import Footer from "../components/Landing/Footer";
import NavBar from "../components/Landing/NavBar";
const hero1 = {
  header: "How It Works?",
  content:
    "Very easy steps to start earning from major Indices investments. It all begins with just a click away.",
};

const child = [
  {
    header: "Cloud Framework",
    content:
      "With the latest secured cloud environment we ensure to provide stable services all days of the year.",
  },
  {
    header: "Safe & Secure",
    content:
      "We take careful measures to ensure that your personal details is as safe as possible. Offline storage provides an important security measure against theft or loss.",
  },
  {
    header: "Exchange",
    content:
      "Our exchange services is second to none, with instant confirmation and payment processing services.",
  },
  {
    header: "A Better User Interface",
    content:
      "Simple to use interface enables all users to interact with ease over our platform.",
  },
];

const TextImg2 = {
  header: "About Ascentè",
  content: [
    "Ascentè assists retail and institutional investors in using and other instruments as an asset class and part of their investment objectives. We strive to execute on the best trading platforms with access to lowcost pricing, reliable trading infrastructure, fast execution and exceptional client support..",
    "Ascentè uses direct access to multiple destinations of liquidity in the markets without the usual burdens of a deal desk that had previously been unavailable to the retail investor. STOCK CFDs, INDICES, OIL and GOLD on MT4/MT5 with leverage up to 888:1 above",
  ],
  src: about_img5,
};
const TextImg3 = {
  header: "Fully Automated Trading Platforms, Mobile And Tablet.",
  content: [
    "Our Trade platform can be accessed from your desktop and browser. You can also take a position via World-class execution. No re-quotes, Meta 4 and 5.",
    "Our spreads are competitive, starting from just 0.9 points on the DE 30, 0.8 points on the UK 100 and 1 pip on USD/JPY and EUR/USD.",
  ],
  src: pk,
};

const data1 = [
  // {
  //   header: "What is cryptocurrency?",
  //   content:
  //     " Bitcoin is a cryptocurrency. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
  // },
  // {
  //   header: "How can i Register New Account?",
  //   content:
  //     " To register a new account, simply click on the “Sign Up” link and fill out the required information.",
  // },
  {
    header: "How do i request for withdrawal?",
    content:
      " You can request a withdrawal by clicking the “Withdraw” button in the member's area and entering the amount you want to withdraw.",
  },
  {
    header: "Can i Change Payment Address?",
    content:
      " You can change your payment withdrawal address by clicking the “Settings” button on the menu after logging in to your account. Enter your new payment address and save the changes.",
  },
];

const data2 = [
  {
    header: "How long does it takes for my Deposit to be Added?",
    content:
      "Your deposit is automatically added after 3 network confirmations for cryptocurrencies/binary.",
  },
  {
    header: "How Can i Deposit funds into my account?",
    content:
      "We offer a variety of deposit options. Please click here to see all available methods.",
  },
  {
    header: "Have More Questions?",
    content:
      "Please go to binancefxmarkets.com and select 'Live Chat'. One of our dedicated Support Agents will be able to answer any questions you may have, Alternatively, simply send an email to support@whalewallet.co.",
  },
  {
    header: " Am i Entitled to Bonus?",
    content:
      " Please note that once your account is fully verified, your bonus will automatically be added to your account.",
  },
];

function LandingPage() {
  return (
    <div className="bg-[#0C0E27] w-full">
      <NavBar />
      <div className="container mx-auto">
        {/* <Hero /> */}
        <Stats />
        {/* <AnalyticsImages /> */}
        <SubHero
          header={hero1.header}
          headerContent={hero1.content}
          children={child}
        />
      </div>
      <Board />
      <section className="container mx-auto">
        <TextImage
          hasParameter="true"
          header={TextImg2.header}
          content={TextImg2.content}
          src={TextImg2.src}
          cond="true"
        />
        <TextImage
          header={TextImg3.header}
          content={TextImg3.content}
          src={TextImg3.src}
        />
        {/* <TextImageBottom /> */}
        {/* <FaqContainer data1={data1} data2={data2} /> */}
        <TestimonyContainer />
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
