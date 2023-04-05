import PlanCard from "../components/common/PlanCard";
import arcade from "../../public/icons/icon-arcade.svg";

export default {
  title: "Plan Card",
  component: PlanCard,
};

const Template = (args) => <PlanCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imgSrc: arcade,
  planName: "Arcade",
  planPrice: "90",
  yearlyBilling: true,
  discountMsg: "2 months free",
  highlightBorder: true,
};
