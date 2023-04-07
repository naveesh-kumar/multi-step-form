import { theme } from "../../theme";
import { Box, Checkbox, Typography } from "@mui/material";
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
    padding: "10px 20px 10px 10px",
    display: "flex",
    gap: "15px",
    flexDirection: "row",
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          wordBreak: "break-word",
          "& div": {
            width: "200px",
          },
        }}
      >
        <div>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color={theme.palette.blue.marine}
            fontSize={14}
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
