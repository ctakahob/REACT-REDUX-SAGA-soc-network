import React from "react";
import {
  Card,
  makeStyles,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core/";

const Post = (props) => {
  const useStyles = makeStyles((theme) => ({
    Box: { textAlign: "center", margin: 0 },
    Card: {
      minWidth: 200,
      margin: 5,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
  }));
  const classes = useStyles();

  return (
    <Box
      className={classes.Box}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={1}
    >
      <Card className={classes.Card} id={props.post.id}>
        <CardContent>
          <Typography>title:</Typography>
          <Typography>{props.post.title}</Typography>
        </CardContent>
        <CardContent>
          <Typography>description:</Typography>
          <Typography>{props.post.description}</Typography>
        </CardContent>
        <Typography>coments:</Typography>
        <Typography>{props.post.comments.length}</Typography>
      </Card>
    </Box>
  );
};
export default Post;
