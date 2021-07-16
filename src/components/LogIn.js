import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, Paper, makeStyles } from "@material-ui/core";
import { logInStart } from "../store/auth/authActions";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      boxShadow: "10px black",
    },
    Input: {
      marginLeft: 10,
      marginRight: 10,
    },
  }));
  const classes = useStyles();
  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInStart(credentials));
  };

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <label>
          <Input
            placeholder="Enter your email"
            name="email"
            type="text"
            value={credentials.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <Input
            className={classes.Input}
            placeholder="Enter your password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <Button variant="contained" color="primary" type="submit">
          Log In
        </Button>
      </form>
      <Link to="/sign_up">"Don't have an account yet? Sign Up"</Link>
    </Paper>
  );
};

export default LogIn;
