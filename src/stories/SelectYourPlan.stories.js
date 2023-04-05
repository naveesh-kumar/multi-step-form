import SelectYourPlan from "../components/SelectYourPlan";

export default {
  title: "Select your plan",
  component: SelectYourPlan,
};

const Template = (args) => <SelectYourPlan {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "30%",
};
