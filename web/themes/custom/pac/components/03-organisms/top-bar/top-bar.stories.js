import Component from "./top-bar.twig";
import "./top-bar.css";
import "../../../css/base/base.css";

export default {
  title: "03 Organisms/Top Bar",
  component: Component,
};

export const TopBar = {
  render: (args) => Component(args),
  args: {
    links: [
      {
        href: "https://defence.gov.au/",
        text: "Defence",
        icon: "/images/logo-defence.png",
      },
      {
        href: "https://www.minister.defence.gov.au/",
        text: "Ministers",
        icon: "/images/logo-ministers.png",
      },
      {
        href: "https://www.navy.gov.au/",
        text: "Navy",
        icon: "/images/logo-navy.png",
      },
      {
        href: "https://www.army.gov.au/",
        text: "Army",
        icon: "/images/logo-army.png",
      },
      {
        href: "https://www.airforce.gov.au/",
        text: "Air Force",
        icon: "/images/logo-airforce.png",
      },
    ],
  },
};
