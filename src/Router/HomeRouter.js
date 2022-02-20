import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "../Component/Footer";
import Landingpage  from "../Pages/Landingpage";

function HomeRouter() {
  return (
    <>
    <Router >
      <Header />
      <Switch>
        <Route exact path="/" component={Landingpage}/>
        
      </Switch>
      <Footer />
    </Router>
      
    </>
  );
}

export default HomeRouter;
