import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Footer from "../Component/Footer";
import { Engineering } from "../Pages/Engineering";
import { Architecture } from "../Pages/Architecture";

function EngineeringRouter() {
  return (
    <>
    <Router >
      <Header />
      <Switch>
        <Route exact path="/3deng/engineering" component={Engineering}/>
        <Route exact path="/3deng/architecture" component={Architecture}/>
        
      </Switch>
      <Footer />
    </Router>
      
    </>
  );
}

export default EngineeringRouter;
