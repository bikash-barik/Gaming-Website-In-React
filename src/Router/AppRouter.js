import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import SecondPage, { SecDigestiveSystem, SecRespiratorySystem } from "../Pages/SecondPage";
import { SecondPage1,SecondPage2,SecondPage3,SecHumanHeart,SecMuscularSystem } from "../Pages/SecondPage";
import {Visidual,Visidual2,Visidual3,Visidual4,ViewHumanHeart,ViewMuscularSystem, ViewRespiratorySystem, ViewdigestiveSystem, ViewDigestiveSystem} from "../Pages/Visidual";
import Footer from "../Component/Footer";
import { Services } from "../Pages/Services";
import ContactUs from "../Pages/ContactUs";

function AppRouter() {
  return (
    <>
    <Router >
      <Header />
      <Switch>
        <Route exact path="/" component={Services}/>
        <Route exact path="/3d/3danatomy" component={Home}/>
        <Route exact path="/3d/second_page" component={SecondPage}/>
        <Route exact path="/3d/second_page1" component={SecondPage1}/>
        <Route exact path="/3d/second_page2" component={SecondPage2}/>
        <Route exact path="/3d/second_page3" component={SecondPage3}/>
        <Route exact path="/3d/sec_humanhart" component={SecHumanHeart}/>
        <Route exact path="/3d/sec_muscularsystem" component={SecMuscularSystem}/>
        <Route exact path="/3d/sec_respiratorysystem" component={SecRespiratorySystem}/>
        <Route exact path="/3d/sec_digestivesystem" component={SecDigestiveSystem}/>
        <Route exact path="/3d/view1" component={Visidual}/>
        <Route exact path="/3d/view2" component={Visidual2}/>
        <Route exact path="/3d/view3" component={Visidual3}/>
        <Route exact path="/3d/view4" component={Visidual4}/>
        <Route exact path="/3d/viewhumanhart" component={ViewHumanHeart}/>
        <Route exact path="/3d/viewmuscularsystem" component={ViewMuscularSystem}/>
        <Route exact path="/3d/viewrespiratorysystem" component={ViewRespiratorySystem}/>
        <Route exact path="/3d/viewdigestivesystem" component={ViewDigestiveSystem}/>
        <Route exact path="/3d/contactus" component={ContactUs}/>
        
      </Switch>
      <Footer />
    </Router>
      
    </>
  );
}

export default AppRouter;
