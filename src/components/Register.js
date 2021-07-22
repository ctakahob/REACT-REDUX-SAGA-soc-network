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
import { registerStart } from "../store/auth/authActions";
import { Link } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerStart(credentials));
  };
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    Input: {
      marginLeft: 10,
      marginRight: 10,
    },
  }));
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" color="secondary">
          REGISTER
        </Typography>
        <label>
          <Input
            placeholder="Enter your email"
            name="email"
            type="text"
            value={credentials.email}
            onChange={handleChange}
            color="secondary"
          />
        </label>
        <label>
          <Input
            className={classes.Input}
            variant="outlined"
            name="password"
            type="password"
            placeholder="Enter your password"
            color="secondary"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <Button variant="contained" color="secondary" type="submit">
          confirm
        </Button>
      </form>
      <Link to="/log_in">
        <Typography variant="overline" color="secondary">
          "Already have an account? Sign in"
        </Typography>
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

export default Register;
