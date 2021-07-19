import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import Joke from "./Joke";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Jokes({ history }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
      return;
    }

    const getJokes = async () => {
      try {
        const { data } = await axios.get(
          "https://official-joke-api.appspot.com/jokes/ten"
        );
        setJokes(data);
        setLoading(false);
        console.table(data);
      } catch (error) {
        console.error(error);
      }
    };
    getJokes();
  }, [isAuthenticated, history]);

  return (
    <>
      {loading ? (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ height: "80vh" }}
        >
          <CircularProgress thickness={3} size="100px" />
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          md={10}
          container
          alignContent="flex-start"
          spacing={3}
          style={{ margin: "0 auto" }}
        >
          <Grid item xs={12}>
            <Typography variant="h2" align="center" component="h2">
              Random Jokes
            </Typography>
          </Grid>
          {jokes &&
            jokes.map((joke) => (
              <Grid key={joke.id} item xs={12} sm={6} md={4} xl={3}>
                <Joke data={joke} />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
}

/* 

loading ? 
      <Grid item xs={12}>
      <Typography
      variant="h2"
      align="center"
      component="h2"
      style={{ margin: "10px 0" }}
      >
      Latest <span>Jokes</span>
      </Typography>
      </Grid>
      :
*/

/* 
  {loading ? (
        <h4>loading</h4>
      ) : (
        <>
          <h4>Jokes</h4>
          {jokes.map((joke) => (
            <Joke key={joke.id} data={joke} />
            <div key={id}>
              <h3>{setup}</h3>
              <h5>{punchline}</h5>
            </div> 
          ))}
        </>
      )} 
*/
