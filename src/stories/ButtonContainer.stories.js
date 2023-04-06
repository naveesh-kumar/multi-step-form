import ButtonContainer from "../components/ButtonContainer";

export default {
  title: "Button Container",
  component: ButtonContainer,
};

const Template = (args) => <ButtonContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "30%",
  showGoBack: true,
  showNext: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  width: "30%",
  showGoBack: false,
  showNext: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  width: "30%",
  showGoBack: true,
  showConfirm: true,
};
