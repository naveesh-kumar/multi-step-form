/*Material ui imports */
import { withStyles } from "@mui/styles";

/*Next JS imports */
import Image from "next/image";

/*Component imports */
import Header from "./common/Header";

const styles = {
  root: {
    paddingTop: "20px",
    display: "flex",
    gap: "30px",
    flexDirection: "column",
    textAlign: "center",
    marginTop: "40px",
    alignItems: "center",
  },
};

const ThankYou = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Image
        src="/icons/icon-thank-you.svg"
        width={50}
        height={50}
        alt="Thank you"
      />
      <Header
        mainHeaderTxt="Thank you"
        subHeaderTxt="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to contact us at naveesh88@gmail.com."
      />
    </div>
  );
};

export default withStyles(styles)(ThankYou);
