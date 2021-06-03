import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Redirect exact from="/" to="/photos"></Redirect>
            <Route path="/photos">
              <Photo></Photo>
            </Route>
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
