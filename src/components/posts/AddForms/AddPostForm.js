import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRequestPost } from "../../../store/post/postAction";
import { makeStyles, Box, TextField, Button } from "@material-ui/core/";

const PostForm = () => {
  const initialState = { title: "", description: "" };
  const [post, setPost] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setPost({ ...post, [e.target.name]: e.target.value.trim() });

  const handleSubmit = (e) => {
    dispatch(addRequestPost(post));
    e.preventDefault();
    setPost(initialState);
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
        value={post.title}
        onChange={handleChange}
      ></TextField>
      <TextField
        label="input Post discription"
        variant="filled"
        name="description"
        type="text"
        value={post.description}
        onChange={handleChange}
      ></TextField>
      <Button
        disabled={post.title ? false : true}
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
