import TwoColumnRow from "../components/common/TwoCoulmnRow";

export default {
  title: "Two Column Row",
  component: TwoColumnRow,
};

const Template = (args) => <TwoColumnRow {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  rowKey: "Online Service",
  value: "10",
  yearlyBilling: true,
};
