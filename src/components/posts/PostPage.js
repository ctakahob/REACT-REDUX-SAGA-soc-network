import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostToId } from "../../store/auth/authActions";
import { makeStyles, Box, TextField, Button } from "@material-ui/core/";
import Header from "../Header";

const PostPage = (props) => {
  const [post, setPost] = useState({ title: "", description: "" });
  const profile = useSelector((state) => state.auth.userBody);
  const currentPost = useSelector((state) => state.auth.currentPost);
  const dispatch = useDispatch();
  const path = props.history.location.pathname;

  useEffect(() => {
    if (currentPost) {
      dispatch(getPostToId(path));
      console.log(currentPost);
    } else {
      console.log("Profile get!");
    }
  });

  console.log("link :", path);
  console.log("Props Content :", props);
  const handleChange = (e) =>
    setPost({ ...post, [e.target.name]: e.target.value.trim() });

  const handleSubmit = (e) => {
    dispatch(getPostToId(path));
    e.preventDefault();
  };

  const useStyles = makeStyles({});
  const classes = useStyles();
  return (
    <Box className={classes.Box}>
      <Header />
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
        // onClick={handleSubmit}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Add post
      </Button>
    </Box>
  );
};
export default PostPage;
