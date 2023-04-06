import FinishingUp from "../components/FinishingUp";

//eslint-disable-next-line
export default {
  title: "Finishing up",
  component: FinishingUp,
};

const Template = (args) => <FinishingUp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "30%",
};
