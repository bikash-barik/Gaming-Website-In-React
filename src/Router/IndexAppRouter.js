import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppRouter from "./AppRouter";
import HomeRouter from "./HomeRouter";

function IndexAppRouter() {
  return (
    <>
      <Router>
        <Switch>
          {/* <AppRouter /> */}
          <HomeRouter/>
        </Switch>
      </Router>
    </>
  );
}

export default IndexAppRouter;
