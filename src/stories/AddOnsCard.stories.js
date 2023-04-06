import AddOnsCard from "../components/common/AddOnsCard";

//eslint-disable-next-line
export default {
  title: "Add ons Card",
  component: AddOnsCard,
};

const Template = (args) => <AddOnsCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "30%",
  addOnName: "Online Service",
  addOnDesc: "Acces to multiplayer games",
  addOnPrice: 1,
  yearlyBilling: true,
};
