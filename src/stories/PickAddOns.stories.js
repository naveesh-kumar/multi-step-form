import PickAddOns from "../components/PickAddOns";

//eslint-disable-next-line
export default {
  title: "Pick Add Ons",
  component: PickAddOns,
};

const Template = (args) => <PickAddOns {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "30%",
};
