import PickAddOns from "../components/PickAddOns";

export default {
  title: "Pick Add Ons",
  component: PickAddOns,
};

const Template = (args) => <PickAddOns {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "30%",
};
