import Switch from "../components/common/Switch";

//eslint-disable-next-line
export default {
  title: "Switch",
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  leftText: "Monthly",
  rightText: "Yearly",
};
