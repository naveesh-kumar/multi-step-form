import PersonalInfo from "../components/PersonalInfo";

export default {
  title: "Personal Info",
  component: PersonalInfo,
};

const Template = (args) => <PersonalInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "30%",
};
