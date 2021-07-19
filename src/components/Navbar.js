import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { logout } from "../redux/action";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Random Jokes Generator
          </Typography>
          {isAuthenticated && (
            <>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                color="PrimaryText"
                to="/dashboard"
              >
                <Button
                  variant="outlined"
                  color="inherit"
                  style={{ marginRight: "15px" }}
                >
                  Dashboard
                </Button>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                color="PrimaryText"
                to="/jokes"
              >
                <Button
                  variant="outlined"
                  color="inherit"
                  style={{ marginRight: "15px" }}
                >
                  Jokes
                </Button>
              </Link>
              <Button variant="outlined" onClick={handleLogout} color="inherit">
                logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
