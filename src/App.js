import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Jokes from "./components/Jokes";
import Navbar from "./components/Navbar";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/login" />;
            }}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/jokes" exact component={Jokes} />
          <Route
            path="*"
            component={() => (
              <Typography align="center">404 Error Page not exist</Typography>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
