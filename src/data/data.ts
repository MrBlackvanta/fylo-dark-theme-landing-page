import heroImage from "@/assets/images/illustration-intro.png";
import productivityImage from "@/assets/images/illustration-stay-productive.png";
import satishPatelImage from "@/assets/images/profile-1.webp";
import bruceMcKenzieImage from "@/assets/images/profile-2.webp";
import markBoydImage from "@/assets/images/profile-3.webp";
import {
  FacebookSVG,
  IconAccessAnywhereSVG,
  IconAnyFileSVG,
  IconCollaborationSVG,
  IconEmailSVG,
  IconLocationSVG,
  IconPhoneSVG,
  IconSecuritySVG,
  InstagramSVG,
  LogoSVG,
  TwitterSVG,
} from "@/components/icons";
import {
  featureData,
  footerData,
  heroData,
  linkData,
  productivityData,
  signupData,
  testimonialData,
} from "./data.types";

export const navigation: linkData[] = [
  {
    name: "Features",
    route: "#",
  },
  {
    name: "Team",
    route: "#",
  },
  {
    name: "Sign In",
    route: "#",
  },
];

export const hero: heroData = {
  title: "All your files in one secure location, accessible anywhere.",
  description:
    "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.",
  image: {
    src: heroImage,
    alt: null,
    width: 720,
    height: 534,
  },
  cta: {
    text: "Get Started",
  },
};

export const features: featureData[] = [
  {
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    icon: IconAccessAnywhereSVG,
  },
  {
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    icon: IconSecuritySVG,
  },
  {
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    icon: IconCollaborationSVG,
  },
  {
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    icon: IconAnyFileSVG,
  },
];

export const productivity: productivityData = {
  title: "Stay productive, wherever you are",
  descriptions: [
    "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.",
    "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  ],
  image: {
    src: productivityImage,
    alt: null,
    width: 615,
    height: 465,
  },
  cta: {
    text: "See how Fylo works",
    route: "#",
  },
};

export const testimonials: testimonialData[] = [
  {
    name: "Satish Patel",
    title: "Founder & CEO, Huddle",
    description:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: {
      src: satishPatelImage,
      alt: "Satish Patel",
      width: 128,
      height: 128,
    },
  },
  {
    name: "Bruce McKenzie",
    title: "Founder & CEO, Huddle",
    description:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: {
      src: bruceMcKenzieImage,
      alt: "Bruce McKenzie",
      width: 128,
      height: 128,
    },
  },
  {
    name: "Mark Boyd",
    title: "Founder & CEO, Huddle",
    description:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    image: {
      src: markBoydImage,
      alt: "Mark Boyd",
      width: 128,
      height: 128,
    },
  },
];

export const signup: signupData = {
  title: "Get early access today",
  description:
    "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.",
  cta: {
    text: "Get Started For Free",
  },
};

export const footer: footerData = {
  logo: LogoSVG,
  information: [
    {
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      icon: IconLocationSVG,
    },
    {
      value: "+1-543-123-4567",
      icon: IconPhoneSVG,
      href: "tel:+1-543-123-4567",
    },
    {
      value: "example@fylo.com",
      icon: IconEmailSVG,
      href: "mailto:example@fylo.com",
    },
  ],
  navigation: [
    [
      {
        name: "About Us",
        route: "/about-us",
      },
      {
        name: "Jobs",
        route: "/jobs",
      },
      {
        name: "Press",
        route: "/press",
      },
      {
        name: "Blog",
        route: "/blog",
      },
    ],
    [
      {
        name: "Contact Us",
        route: "/contact-us",
      },
      {
        name: "Terms",
        route: "/terms",
      },
      {
        name: "Privacy",
        route: "/privacy",
      },
    ],
  ],
  social: [
    {
      icon: FacebookSVG,
      href: "https://www.facebook.com",
    },
    {
      icon: TwitterSVG,
      href: "https://www.twitter.com",
    },
    {
      icon: InstagramSVG,
      href: "https://www.instagram.com",
    },
  ],
};
