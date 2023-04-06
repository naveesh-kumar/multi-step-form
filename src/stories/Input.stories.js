import Input from "../components/common/Input";

//eslint-disable-next-line
export default {
  title: "Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "e.g. Stephen King",
  label: "Name",
  width: "30%",
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: "e.g. Stephen King",
  error: true,
  label: "Name",
  errMsg: "This field is required",
  width: "30%",
};
