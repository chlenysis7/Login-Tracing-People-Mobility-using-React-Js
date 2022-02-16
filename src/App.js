import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Login from "./components/login.component";

const useStyles = makeStyles((theme) => ({
  grid:{
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();

  return (<Router>

    <br></br>
    <br></br>
    <br></br>

          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} md={6}>
              <div className="paper">
                <img src="icon.svg" alt=""/>
                <br></br>
                <br></br>
                <h1 style={{ color: "#0D6EFD"}}>Tracing & People</h1>
                <h1 style={{ color: "#0D6EFD"}}>Mobility Analysis App</h1>
              </div>
            </Grid>
          
            <Grid item xs={12} md={6}>
              <div className="paper">
                <div className="auth-wrapper">
                <div className="auth-inner">
                <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                </Switch>
                </div>
                </div>
              </div>
            </Grid>
          
          </Grid>

    <div className="logo">
    <img src="logo1.svg" alt=""/>    
    </div>

    </Router>
  );
}

export default App;
