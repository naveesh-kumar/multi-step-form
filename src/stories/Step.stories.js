import Step from "../components/common/Step";

//eslint-disable-next-line
export default {
  title: "Step",
  component: Step,
};

const Template = (args) => <Step {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "1",
  variant: "noFill",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "2",
  variant: "fill",
};
