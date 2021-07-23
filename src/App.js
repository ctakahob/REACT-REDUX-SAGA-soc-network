import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Main from "./components/posts/Main";
import Profile from "./components/Profile/Profile";
import PostPage from "./components/posts/PostPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App(props) {
  const auth = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.post.allPosts);

  const log = localStorage.getItem("Authorization");
  if (auth.isLogined) {
    console.log("start");
  } else {
    console.log("await start");
  }
  let pathH = "";

  if (log) {
    pathH = "/";
  } else {
    pathH = "log_in";
  }
  // console.log(pathHome);

  // const PrivateRoute = ({ component: Component, ...rest }) => {
  //   return <Route to={Component} />;
  // };

  const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log("COOOOMPOOONENNNT", rest.path);
    return (
      <Route
        to={rest.path}
        render={(props) => {
          return log ? <Component {...props} /> : <Redirect to="/log_in" />;
        }}
      />
    );
  };

  return (
    <Router>
      <div className="App">
        {auth.isLogined ? <Redirect to="/" /> : null}
        <Switch location={props.location}>
          <PrivateRoute exact path="/" component={Main}></PrivateRoute>
          <Route path="/log_in" component={LogIn}></Route>
          <Route path="/sign_up" component={Register}></Route>
          <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
          <PrivateRoute path="/post/" component={PostPage}></PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
