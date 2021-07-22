import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewComents } from "../../../store/auth/authActions";
import { makeStyles, Box, TextField, Button } from "@material-ui/core/";

export const AddCommentForm = (props) => {
  const propsId = props.id;
  const [coments, setComents] = useState({ title: "", post_id: propsId });
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setComents({ ...coments, [e.target.name]: e.target.value.trim() });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewComents(coments));
    setComents({ ...coments, title: "" });
  };

  const useStyles = makeStyles({
    button: { height: 56 },
    Box: { padding: 10 },
  });
  const classes = useStyles();
  return (
    <Box className={classes.Box}>
      <TextField
        label="input Comment"
        variant="filled"
        name="title"
        type="text"
        value={coments.title}
        onChange={handleChange}
      ></TextField>
      <Button
        onClick={handleSubmit}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Add comment
      </Button>
    </Box>
  );
};
export default AddCommentForm;
