import { theme } from "../../theme";
import { Switch as MuiSwitch, Typography, Stack } from "@mui/material";
import { withStyles } from "@mui/styles";
import { useState } from "react";

const styles = {
  switch: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.blue.marine,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.blue.marine,
      boxSizing: "border-box",
    },
  },
};

const grayFont = theme.palette.gray.cool;
const blueFont = theme.palette.blue.marine;

const Switch = ({
  classes,
  leftText = "",
  rightText = "",
  handleChange,
  defaultChecked,
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography
        variant="caption"
        fontWeight={600}
        color={checked ? grayFont : blueFont}
      >
        {leftText}
      </Typography>
      <MuiSwitch
        className={classes.switch}
        checked={defaultChecked}
        onChange={(e) => {
          setChecked(e.target.checked);
          handleChange(e);
        }}
      />
      <Typography
        variant="caption"
        fontWeight={600}
        color={checked ? blueFont : grayFont}
      >
        {rightText}
      </Typography>
    </Stack>
  );
};

export default withStyles(styles)(Switch);
