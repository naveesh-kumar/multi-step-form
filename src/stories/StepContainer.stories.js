import StepContainer from "../components/StepContainer";

//eslint-disable-next-line
export default {
  title: "Step container",
  component: StepContainer,
};

const Template = (args) => <StepContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "noFill",
  label: 2,
  textContent: "your info",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "fill",
  label: 4,
  textContent: "add-ons",
};
