import SideBar from "../components/SideBar";

//eslint-disable-next-line
export default {
  title: "Sidebar",
  component: SideBar,
};

const Template = (args) => <SideBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "30%",
  height: "100%",
};
