import { StaticImageData } from "next/image";
import { SVGProps } from "react";

export type HeroData = {
  title: string;
  description: string;
  image: Image;
  cta: {
    text: string;
  };
};

export type FeatureData = {
  title: string;
  description: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
};

export type ProductivityData = {
  title: string;
  descriptions: string[];
  image: Image;
  cta: {
    text: string;
    route: string;
  };
};

export type TestimonialData = {
  name: string;
  title: string;
  description: string;
  image: Image;
};

export type SignupData = {
  title: string;
  description: string;
  cta: {
    text: string;
  };
};

export type FooterData = {
  logo: React.FC<SVGProps<SVGSVGElement>>;
  information: Information[];
  navigation: LinkData[][];
  social: {
    icon: React.FC<SVGProps<SVGSVGElement>>;
    href: string;
    ariaLabel: string;
  }[];
};

export type LinkData = {
  name: string;
  route: string;
};

type Image = {
  src: StaticImageData;
  alt: string;
};

export type Information = {
  value: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
  href?: string;
};
