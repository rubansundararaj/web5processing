import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Benefits",
  desc: "We use web3 to enable payments and web2 expereince to keep the user expereince same and compliant with local government",
  image: benefitOneImg,
  bullets: [
    {
      title: "Low fee",
      desc: "No setup cost, we charge flat 1% transaction fee for any type of payments",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Micro transaction",
      desc: "Integrate micro transaction into your apps, games and podcast and recive payments directly.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Pay or receive from anyone anywhere",
      desc: "Instant cross border payment to anyone.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
