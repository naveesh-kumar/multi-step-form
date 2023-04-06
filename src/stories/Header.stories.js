import Header from "../components/common/Header";

//eslint-disable-next-line
export default {
  title: "Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "30%",
  mainHeaderTxt: "Personal info",
  subHeaderTxt: "Please provide your name, email address and phone number",
};
