import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, Paper, makeStyles } from "@material-ui/core";
import { registerStart } from "../store/auth/authActions";
import { Link } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

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
        <h2>REGISTER</h2>
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
            variant="outlined"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <Button variant="contained" color="primary" type="submit">
          confirm
        </Button>
      </form>
      <Link to="/">" Already have an account? Sign in"</Link>
    </Paper>
  );
};

export default Register;
