import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRequestPost } from "../../store/auth/authActions";
import { makeStyles, Box, TextField, Button } from "@material-ui/core/";

const PostForm = (props) => {
  const [post, setPost] = useState({ title: "", description: "" });

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setPost({ ...post, [e.target.name]: e.target.value.trim() });

  const handleSubmit = (e) => {
    dispatch(addRequestPost(post));
    e.preventDefault();
  };

  const useStyles = makeStyles({
    button: { height: 56 },
    Box: { padding: 10 },
  });
  const classes = useStyles();
  return (
    <Box className={classes.Box}>
      <TextField
        label="input Post title"
        variant="filled"
        name="title"
        type="text"
        onChange={handleChange}
      ></TextField>
      <TextField
        label="input Post discription"
        variant="filled"
        name="description"
        type="text"
        onChange={handleChange}
      ></TextField>
      <Button
        onClick={handleSubmit}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Add post
      </Button>
    </Box>
  );
};
export default PostForm;
