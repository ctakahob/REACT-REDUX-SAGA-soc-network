import { React, useEffect } from "react";
import Header from "../Header";
import { makeStyles, Box } from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import { requestProfile } from "../../store/auth/authActions";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestProfile());
  });
  // const user = useSelector((state) => state.auth.userBody);
  const useStyles = makeStyles({});

  const classes = useStyles();

  // if (!user.length) {
  //   dispatch(requestProfile());
  // }
  return (
    <Box className={classes.wrapper}>
      <Header />
    </Box>
  );
};
export default Main;
