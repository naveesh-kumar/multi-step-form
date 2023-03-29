import Step from "../components/common/Step";

export default {
  title: "Step",
  Component: Step,
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
