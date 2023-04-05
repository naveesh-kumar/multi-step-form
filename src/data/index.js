import arcade from "../../public/icons/icon-arcade.svg";
import advanced from "../../public/icons/icon-advanced.svg";
import pro from "../../public/icons/icon-pro.svg";

export const planData = [
  {
    id: 1,
    name: "Arcade",
    img: arcade,
    price: {
      monthly: 9,
      yearly: 90,
    },
    yearlyDiscount: "2 months free",
  },
  {
    id: 2,
    name: "Advanced",
    img: advanced,
    price: {
      monthly: 12,
      yearly: 120,
    },
    yearlyDiscount: "2 months free",
  },
  {
    id: 3,
    name: "Pro",
    img: pro,
    price: {
      monthly: 15,
      yearly: 150,
    },
    yearlyDiscount: "2 months free",
  },
];

export const addOnsData = [
  {
    id: 1,
    name: "Online service",
    desc: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    id: 2,
    name: "Larger Storage",
    desc: "Extra 1TB of cloud save",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    id: 3,
    name: "Customizable profile",
    desc: "Custom theme on your profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];
