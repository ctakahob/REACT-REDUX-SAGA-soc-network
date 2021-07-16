import React from "react";
import { useSelector } from "react-redux";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Main from "./components/posts/Main";
import Profile from "./components/Profile/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const auth = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="App">
        {!auth.isLogined ? <Redirect to="/" /> : <Redirect to="/main" />}
        <Switch>
          <Route exact path="/" component={LogIn}></Route>
          <Route path="/main" component={Main}></Route>
          <Route path="/sign_up" component={Register}></Route>
          <Route path="/profile" component={Profile}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
