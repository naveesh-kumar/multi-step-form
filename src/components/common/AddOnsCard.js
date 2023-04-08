import { theme } from "../../theme";
import { Box, Checkbox, Typography, useMediaQuery } from "@mui/material";
import { withStyles } from "@mui/styles";
import { useRef } from "react";

const styles = {
  root: {
    width: ((props) => props.width) || "100%",
    border: (props) =>
      props.defaultChecked
        ? `1px solid ${theme.palette.blue.purplish}`
        : `1px solid ${theme.palette.gray.light}`,
    borderRadius: "6px",
    height: "auto",
    padding: "10px",
    display: "flex",
    gap: "15px",
    flexDirection: "row",
    [theme.breakpoints.down("mobile")]: {
      padding: "10px 0px",
    },
  },
};

const AddOnsCard = ({
  classes,
  width,
  addOnName,
  addOnDesc,
  addOnPrice,
  adornment,
  defaultChecked,
  handleChecked,
  handleUnchecked,
}) => {
  const addOnRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));

  const handleChange = (e) => {
    if (e.target.checked) {
      addOnRef.current.style.borderColor = theme.palette.blue.purplish;
      handleChecked();
    } else {
      addOnRef.current.style.borderColor = theme.palette.gray.light;
      handleUnchecked();
    }
  };

  return (
    <div className={classes.root} ref={addOnRef}>
      <Checkbox
        color="purple"
        onChange={(e) => handleChange(e)}
        disableRipple
        checked={defaultChecked}
      />
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "80% 20%",
          wordBreak: "break-word",
          width: "100%",
          "& div": {
            width: "100%",
          },
        }}
      >
        <div>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color={theme.palette.blue.marine}
            fontSize={isMobile ? 16 : 14}
          >
            {addOnName}
          </Typography>
          <Typography variant="caption" color={theme.palette.gray.cool}>
            {addOnDesc}
          </Typography>
        </div>
        <Typography
          variant="caption"
          color={theme.palette.blue.purplish}
          fontWeight={500}
        >
          ${addOnPrice}
          {adornment}
        </Typography>
      </Box>
    </div>
  );
};

export default withStyles(styles)(AddOnsCard);
