import { theme } from "../../theme";
import { Input as MuiInput, Typography, Box } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = {
  input: {
    "& input::placeholder": {
      fontWeight: 400,
    },
    "& input:focus": {
      border: (props) =>
        !props.error && `1px solid ${theme.palette.blue.purplish}`,
      borderRadius: 8,
    },
    "& input": {
      border: (props) => props.error && "1px solid red !important",
    },
  },
};

const Input = ({
  classes,
  placeholder,
  error,
  label,
  errMsg,
  width,
  name,
  handleInputChange,
  handleOnBlur,
  ...restProps
}) => {
  const handleChange = (e) => {
    handleInputChange(e);
  };

  const handleBlur = (e) => {
    handleOnBlur(e);
  };
  return (
    <Box sx={{ width: { width } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body2"
          gutterBottom
          fontSize="12px"
          color={theme.palette.blue.marine}
        >
          {label}
        </Typography>
        {error && (
          <Typography
            variant="body2"
            gutterBottom
            fontSize="12px"
            name={label}
            color={theme.palette.red.strawberry}
            fontWeight="600"
          >
            {errMsg}
          </Typography>
        )}
      </Box>
      <MuiInput
        placeholder={placeholder}
        className={classes.input}
        error={error}
        fullWidth={true}
        name={name}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        {...restProps}
      />
    </Box>
  );
};

export default withStyles(styles)(Input);
