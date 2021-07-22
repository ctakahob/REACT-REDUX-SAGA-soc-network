import React from "react";
import moment from "moment";
import { Paper, makeStyles, Typography, Box } from "@material-ui/core/";

export const Comments = (props) => {
  const useStyles = makeStyles((theme) => ({
    Box: { textAlign: "center", margin: 0 },
    Card: {
      minWidth: 200,
      margin: 5,
      boxShadow: "0 3px 5px 2px rgba(0,0,80,0.4)",
    },
  }));
  const classes = useStyles();
  const newDate = moment(props.createdAt).format("DD-MM-YYYY");
  return (
    <Box
      className={classes.Box}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={1}
    >
      <Paper className={classes.Card} id={props.comment.id}>
        <Box>
          <Typography>title:</Typography>
          <Typography>{props.comment.title}</Typography>
        </Box>
        <Box>
          <Typography>created:</Typography>
          <Typography>{newDate}</Typography>
        </Box>
        <Box>
          <Typography>user ID:</Typography>
          <Typography>{props.comment.user_id}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};
export default Comments;
