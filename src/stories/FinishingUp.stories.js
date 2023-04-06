import FinishingUp from "../components/FinishingUp";

export default {
  title: "Finishing up",
  component: FinishingUp,
};

const Template = (args) => <FinishingUp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "30%",
};
