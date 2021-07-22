import { React, useEffect } from "react";
import Header from "../Header";
import {
  makeStyles,
  Box,
  Typography,
  Avatar,
  Paper,
  CircularProgress,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import { requestProfile } from "../../store/auth/authActions";
import Post from "../posts/Post";

const Profile = () => {
  const profile = useSelector((state) => state.auth.userBody);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!Object.keys(profile).length) {
      dispatch(requestProfile());
    }
  });

  const useStyles = makeStyles({
    Main: {},
    User: {
      position: "relative",
      margin: 20,
      width: 500,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    Posts: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const classes = useStyles();

  return (
    <Box className={classes.Main}>
      <Header />
      <Box className={classes.Posts}>
        <Paper elevation={11} className={classes.User}>
          <Avatar
            alt="Remy Sharp"
            src="https://api.memegen.link/images/doge/such_meme/very_skill.png"
            ml={0}
          />
          <Box>
            <Typography variant="h5" color="textSecondary">
              {" "}
              Email: {profile.email}{" "}
            </Typography>
            <Typography variant="h5"> user ID: {profile.id} </Typography>
          </Box>
        </Paper>
        {profile.posts ? (
          profile.posts.map((post) => <Post post={post} key={post.id} />)
        ) : (
          <CircularProgress color="secondary" />
        )}
      </Box>
    </Box>
  );
};
export default Profile;
