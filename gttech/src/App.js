import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SecondPage from "./Pages/SecondPage";
import Massages from "./Component/Massages";
import { SecondPage1,SecondPage2,SecondPage3 } from "./Pages/SecondPage";

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
        <Route exact path="/massages" component={Massages}/>
        
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
