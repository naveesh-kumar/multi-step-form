import PersonalInfo from "../components/PersonalInfo";

//eslint-disable-next-line
export default {
  title: "Personal Info",
  component: PersonalInfo,
};

const Template = (args) => <PersonalInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "30%",
};
