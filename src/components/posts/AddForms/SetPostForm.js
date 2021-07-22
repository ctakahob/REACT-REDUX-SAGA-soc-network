import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putCurrentPost } from "../../../store/auth/authActions";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";

import {
  makeStyles,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core/";

export const SetPostForm = (props) => {
  const propsId = props.post.id;
  const propsTitle = props.post.title;
  const propsDescription = props.post.description;

  const [post, setPost] = useState({
    title: propsTitle,
    post_id: propsId,
    description: propsDescription,
  });
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putCurrentPost(post));
  };

  const useStyles = makeStyles({
    TextField: { margin: 10 },
    Button: {
      height: 56,
      width: 400,
    },
  });
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="caption">You are the author of the post</Typography>
      <Box className={classes.TextField}>
        <TextField
          label="Title"
          name="title"
          onChange={handleChange}
          defaultValue={propsTitle}
        />
      </Box>
      <Box className={classes.TextField}>
        <TextField
          label="Discription"
          name="description"
          defaultValue={propsDescription}
          onChange={handleChange}
        />
      </Box>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Changed!
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        className={classes.Button}
        variant="contained"
        color="secondary"
        onClick={(e) => {
          handleSubmit(e);
          setOpen(true);
        }}
      >
        change post
      </Button>
    </Box>
  );
};
export default SetPostForm;
