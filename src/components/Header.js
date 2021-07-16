import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/auth/authActions";
import { Button, Toolbar, AppBar, makeStyles } from "@material-ui/core/";
import { NavLink } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const useStyles = makeStyles((theme) => ({
    Button: {
      marginLeft: "auto",
    },
    Link: {
      marginLeft: 5,
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <NavLink
          className={classes.Link}
          to="/main"
          activeStyle={{
            fontWeight: "bold",
            color: "green",
          }}
        >
          main page
        </NavLink>
        <NavLink
          className={classes.Link}
          to="/profile"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          profile page
        </NavLink>

        <Button
          className={classes.Button}
          variant="contained"
          color="secondary"
          onClick={() => dispatch(logOut())}
        >
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
