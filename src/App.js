import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SecondPage from "./Pages/SecondPage";
import Massages from "./Component/Massages";
import { SecondPage1,SecondPage2,SecondPage3,SecHumanHeart } from "./Pages/SecondPage";
import {Visidual,Visidual2,Visidual3,Visidual4,ViewHumanHeart} from "./Pages/Visidual";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
    <Router >
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/second_page" component={SecondPage}/>
        <Route exact path="/second_page1" component={SecondPage1}/>
        <Route exact path="/second_page2" component={SecondPage2}/>
        <Route exact path="/second_page3" component={SecondPage3}/>
        <Route exact path="/sec_humanhart" component={SecHumanHeart}/>
        <Route exact path="/view1" component={Visidual}/>
        <Route exact path="/view2" component={Visidual2}/>
        <Route exact path="/view3" component={Visidual3}/>
        <Route exact path="/view4" component={Visidual4}/>
        <Route exact path="/viewhumanhart" component={ViewHumanHeart}/>
        
        
      </Switch>
      <Footer />
    </Router>
      
    </>
  );
}

export default App;
