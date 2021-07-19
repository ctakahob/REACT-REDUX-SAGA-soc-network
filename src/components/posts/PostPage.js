import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostToId } from "../../store/auth/authActions";
import { makeStyles, Box, Typography, Button, Card } from "@material-ui/core/";
import Header from "../Header";

const PostPage = (props) => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    showComments: false,
  });
  const profile = useSelector((state) => state.auth.userBody);
  const currentPost = useSelector((state) => state.auth.currentPost);
  const dispatch = useDispatch();
  const path = props.history.location.pathname;
  let num = parseInt(path.match(/\d+/));

  useEffect(() => {
    if (!Object.keys(currentPost).length) {
      dispatch(getPostToId(path));
    } else {
      console.log("POST get!");
    }
    if (num !== currentPost.id) {
      dispatch(getPostToId(path));
     const returnDefaul = () =>  {return setPost ({...post, showComments: false})}
    } else {
      console.log("Current post ok");
    }
  });
  const showCommentaries = () => {
    setPost ({...post, showComments: true})
  }

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
      <Card>
        {currentPost ? (
          <Box>
            <Typography>Title: {currentPost.title},</Typography>
            <Typography> discription: {currentPost.description}</Typography>
            <Typography>user ID: {currentPost.user_id}</Typography>
          </Box>
        ) : (
          <Typography>something went wrong</Typography>
        )}
      </Card>

      <Button
        onClick={showCommentaries}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Show Comments
      </Button>
      {/* <Box>
        {post.showComments ?   {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))} : null }
      </Box> */}
    </Box>
  );
};
export default PostPage;
