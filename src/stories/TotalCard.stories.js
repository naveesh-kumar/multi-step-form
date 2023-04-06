import TotalCard from "../components/TotalCard";

//eslint-disable-next-line
export default {
  title: "Total Card",
  component: TotalCard,
};

const Template = (args) => <TotalCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "30%",
  planName: "Arcade",
  planPrice: 9,
  yearlyBilling: true,
};
