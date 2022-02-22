import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "../Component/Footer";
import Landingpage  from "../Pages/Landingpage";
import HeaderLeanding from "../Component/HeaderLeanding";

function HomeRouter() {
  return (
    <>
    <Router >
      <HeaderLeanding />
      <Switch>
        <Route exact path="/" component={Landingpage}/>
        
      </Switch>
      <Footer />
    </Router>
      
    </>
  );
}

export default HomeRouter;
