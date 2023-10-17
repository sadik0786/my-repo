import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import sadik from "../sadik.jpg";
import { ProfilePic } from "./profilePic";

//  CSS STYLES
const useStyles = makeStyles(theme => ({
  sadik: {
    width: "200px",
    height: "200px",
    marginBottom: "20px",
    border: "2px solid crimson",
    boxShadow: "1px 3px 8px 0px #fff",
  },
  title: {
    color: "crimson",
    fontWeight: 600,
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  }
}));

const Header = () => {
  const [text, setText] = useState("");
  const classes = useStyles();
  useEffect(() => {

  }, []);

  return (
    <Box className={classes.typedContainer}>
      <Grid container justifyContent="center">
        {/* <ProfilePic /> */}
        <Avatar className={classes.sadik} src={sadik} alt="sadik ali" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        Sadik Ali
        {/* <Typed strings={["Sadik Ali"]} typeSpeed={40} /> */}
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["UI/UX Design", "Web Development", "App Development", "Research and Development"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
