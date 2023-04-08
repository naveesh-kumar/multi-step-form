import { theme } from "../../theme";
import {
  Input as MuiInput,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = {
  input: {
    "&::placeholder": {
      fontWeight: 400,
    },
    "&:focus": {
      border: (props) =>
        !props.error && `1px solid ${theme.palette.blue.purplish}`,
      borderRadius: 8,
    },
    border: (props) => props.error && "1px solid red !important",
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
  value,
  ...restProps
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));

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
          fontSize={isMobile ? 14 : 12}
          color={theme.palette.blue.marine}
          fontWeight={500}
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
        inputProps={{
          className: classes.input,
        }}
        error={error}
        fullWidth={true}
        name={name}
        value={value}
        onChange={(e) => handleInputChange(e)}
        onBlur={(e) => handleOnBlur(e)}
        {...restProps}
      />
    </Box>
  );
};

export default withStyles(styles)(Input);
