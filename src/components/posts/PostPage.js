import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostToId } from "../../store/auth/authActions";
import { AddCommentForm } from "./AddForms/AddComentForm";
import { Comments } from "./Comments";
import { SetPostForm } from "../posts/AddForms/SetPostForm";
import {
  makeStyles,
  Box,
  Typography,
  Button,
  Card,
  CircularProgress,
} from "@material-ui/core/";
import Header from "../Header";

const PostPage = (props) => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    showComments: false,
  });
  const profileId = useSelector((state) => state.auth.userBody.id);
  const currentPost = useSelector((state) => state.auth.currentPost);
  const dispatch = useDispatch();
  const path = props.history.location.pathname;
  let num = parseInt(path.match(/\d+/));

  useEffect(() => {
    if (!Object.keys(currentPost).length) {
      dispatch(getPostToId(num));
    } else {
      console.log("POST get!");
    }
    if (num !== currentPost.id) {
      dispatch(getPostToId(num));
    } else {
      console.log("Current post ok");
    }
  });

  const showCommentaries = () => {
    setPost({ ...post, showComments: true });
  };

  const useStyles = makeStyles({
    Button: {
      height: 56,
      width: "100%",
    },
    Typography: {
      margin: 20,
    },
    Box: {
      textAlign: "center",
      margin: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    Card: {
      minWidth: 400,
      margin: 5,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
  });
  const classes = useStyles();
  return (
    <Box>
      <Header />
      {num !== currentPost.id ? (
        <Box className={classes.Box}>
          <CircularProgress />
        </Box>
      ) : (
        <Box className={classes.Box}>
          <Card className={classes.Card}>
            {currentPost ? (
              <Box>
                {profileId !== currentPost.user_id ? (
                  <Box>
                    <Typography>
                      Author post: user ID: {currentPost.user_id}
                    </Typography>
                    <Typography>Title: {currentPost.title},</Typography>
                    <Typography>
                      discription: {currentPost.description}
                    </Typography>
                  </Box>
                ) : (
                  <SetPostForm post={currentPost} />
                )}
                <Box>
                  <Button
                    onClick={showCommentaries}
                    className={classes.Button}
                    variant="contained"
                    color="primary"
                    style={{ display: post.showComments ? "none" : "block" }}
                  >
                    Show Comments
                  </Button>
                </Box>
                {post.showComments ? (
                  <Box>
                    <AddCommentForm id={num} />
                    <Typography
                      className={classes.Typography}
                      variant="h4"
                      color="secondary"
                    >
                      COMMENTS:
                    </Typography>
                    {currentPost.comments.length ? (
                      currentPost.comments
                        .reverse()
                        .map((comment) => (
                          <Comments comment={comment} key={comment.id} />
                        ))
                    ) : (
                      <Typography variant="caption">
                        this post doesn't have a comment
                      </Typography>
                    )}
                  </Box>
                ) : null}
              </Box>
            ) : (
              <CircularProgress color="secondary" />
            )}
          </Card>
        </Box>
      )}
    </Box>
  );
};
export default PostPage;
