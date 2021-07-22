import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Button,
  Paper,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import { logInStart } from "../store/auth/authActions";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const error = useSelector((state) => state.auth.error);
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
        <Typography variant="h5" color="primary">
          LOGIN
        </Typography>
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={credentials.email ? false : true}
        >
          Log In
        </Button>
      </form>
      <Link to="/sign_up">
        {" "}
        <Typography variant="overline" color="inherit">
          "Don't have an account yet? Sign Up"
        </Typography>{" "}
      </Link>
      {error ? (
        <Box>
          {" "}
          <Typography variant="overline" color="inherit">
            {" "}
            {error.response.data.message ? (
              <b>{error.response.data.message}</b>
            ) : (
              <b>{error.response.data.errors[0].message}</b>
            )}
          </Typography>
        </Box>
      ) : null}
    </Paper>
  );
};

export default LogIn;
