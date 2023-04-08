/*Material ui imports */
import { withStyles } from "@mui/styles";

/*Custom theme import */
import { theme } from "../theme";

/*Components imports */
import Button from "./common/Button";

const styles = {
  root: {
    width: (props) => props.width,
    alignSelf: "center",
    [theme.breakpoints.down("mobile")]: {
      padding: "10px",
      background: theme.palette.common.white,
    },
  },
};

const ButtonContainer = ({
  classes,
  width,
  showGoBack,
  showNext,
  backClickHandler,
  nextClickHandler,
  showConfirm,
  confirmClickHandler,
}) => {
  return (
    <div className={classes.root}>
      {/* Go Back Button */}
      {showGoBack && (
        <Button
          label="Go Back"
          variant="text"
          contrastText="grey"
          hoverTextColor={theme.palette.blue.marine}
          hoverBtnColor="none"
          sx={{ float: "left" }}
          onClick={backClickHandler}
        />
      )}
      {/* Next button */}
      {showNext && (
        <Button
          label="Next Step"
          color="dark"
          variant="contained"
          contrastText="white"
          hoverBtnColor={theme.palette.blue.marine}
          sx={{ float: "right" }}
          onClick={nextClickHandler}
        />
      )}
      {/* Confirm Button */}
      {showConfirm && (
        <Button
          label="Confirm"
          color="purple"
          variant="contained"
          contrastText="white"
          hoverBtnColor={theme.palette.blue.pastel}
          sx={{ float: "right" }}
          onClick={confirmClickHandler}
        />
      )}
    </div>
  );
};

export default withStyles(styles)(ButtonContainer);
