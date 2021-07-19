import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";

const Dashboard = ({ history }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
  }, [isAuthenticated, history]);

  return (
    <>
      <Typography align="center" variant="h6" gutterBottom>
        Welcome to Dashboard ,{user && user.username}
      </Typography>
    </>
  );
};

export default Dashboard;
