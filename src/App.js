import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IndexAppRouter from "./Router/IndexAppRouter";
import AppRouter from "./Router/AppRouter";
import LearnRouter from "./Router/LearnRouter";
import HomeRouter from "./Router/HomeRouter";
import EngineeringRouter from "./Router/EngineeringRouter";

function App() {
  return (
    <>
    <Router >
      <Switch>
      {/* <Route path="/" component={HomeRouter} /> */}
      <Route path="/3d" component={AppRouter} />
      <Route path="/3dEng" component={EngineeringRouter} />
      <Route path="/learn" component={LearnRouter} />
       <IndexAppRouter/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
