import { theme } from "../theme";
import Button from "../components/common/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Next Step",
  color: "dark",
  variant: "contained",
  contrastText: "white",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Go Back",
  variant: "text",
  contrastText: "grey",
  hoverTextColor: theme.palette.blue.marine,
  hoverBtnColor: "none",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Confirm",
  variant: "contained",
  color: "purple",
  contrastText: "white",
  hoverBtnColor: theme.palette.blue.pastel,
};

export const Underline = Template.bind({});
Underline.args = {
  label: "Change",
  variant: "text",
  contrastText: "grey",
  underline: true,
  hoverBtnColor: "none",
  hoverTextColor: theme.palette.blue.purplish,
};
