import React from "react";
import { Link } from "react-router-dom";
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
      minWidth: 450,
      margin: 5,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
    Link: { textDecoration: "none" },
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
      <Link
        className={classes.Link}
        to={`/post/${props.post.id}`}
        textDecoration="none"
        content={props}
      >
        <Card className={classes.Card} id={props.post.id}>
          <CardContent>
            <Typography variant="h4">title:</Typography>
            <Typography variant="h6">{props.post.title}</Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h4">description:</Typography>
            <Typography variant="h6">{props.post.description}</Typography>
          </CardContent>
          {props.post.comments ? (
            <Box>
              {" "}
              <Typography variant="h4"> coments: </Typography>
              <Typography variant="h6">{props.post.comments.length}</Typography>
            </Box>
          ) : null}
        </Card>
      </Link>
    </Box>
  );
};
export default Post;
