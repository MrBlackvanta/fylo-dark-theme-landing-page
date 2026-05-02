import { StaticImageData } from "next/image";
import { SVGProps } from "react";

export type heroData = {
  title: string;
  description: string;
  image: image;
  cta: {
    text: string;
  };
};

export type featureData = {
  title: string;
  description: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
};

export type productivityData = {
  title: string;
  descriptions: string[];
  image: image;
  cta: {
    text: string;
    route: string;
  };
};

export type testimonialData = {
  name: string;
  title: string;
  description: string;
  image: image;
};

export type signupData = {
  title: string;
  description: string;
  cta: {
    text: string;
  };
};

export type footerData = {
  logo: React.FC<SVGProps<SVGSVGElement>>;
  information: information[];
  navigation: linkData[][];
  social: { icon: React.FC<SVGProps<SVGSVGElement>>; href: string }[];
};

export type linkData = {
  name: string;
  route: string;
};

type image = {
  src: StaticImageData;
  alt: string | null;
  width: number;
  height: number;
};

export type information = {
  value: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
  href?: string;
};
