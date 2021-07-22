import React from "react";
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

function App() {
  const auth = useSelector((state) => state.auth);
  const log = localStorage.getItem("Authorization");
  console.log("Authorization:", auth.isLogined);

  return (
    <Router>
      <div className="App">
        {log ? <Redirect to="/" /> : <Redirect to="/log_in" />}
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/log_in" component={LogIn}></Route>
          <Route path="/sign_up" component={Register}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/post/" component={PostPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
