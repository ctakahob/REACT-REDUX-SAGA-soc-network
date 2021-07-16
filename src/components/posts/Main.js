import React from "react";
import Post from "./Post";
import Header from "../Header";
import { Paper, makeStyles, Box } from "@material-ui/core/";
import { fetchPosts } from "../../store/auth/authActions";
import { useDispatch, useSelector, connect } from "react-redux";
import Postform from "./AddPostForm";

const Main = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.auth.allPosts);
  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
      width: 150,
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  const classes = useStyles();
  if (!posts.length) {
    dispatch(fetchPosts());
  }
  return (
    <Box className={classes.wrapper}>
      <Header />
      <Postform />
      <Paper className={classes.root}>counter All posts : {posts.length}</Paper>
      <Box>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Box>
    </Box>
  );
};

const mapStateToProps = function (state) {
  return {
    Postform: state.auth.allPosts,
  };
};

export default connect(mapStateToProps)(Main);
