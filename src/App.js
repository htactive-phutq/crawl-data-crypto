import { makeStyles } from "@material-ui/core";
// import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import React, { lazy, Suspense } from 'react'
// import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";

const Homepage = lazy(() => import('./Pages/HomePage'))
const CoinPage = lazy(() => import('./Pages/CoinPage'))
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#f59ebd",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} exact />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
