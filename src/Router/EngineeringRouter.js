import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Footer from "../Component/Footer";
import { Engineering } from "../Pages/Engineering";
import { Architecture } from "../Pages/Architecture";
import HeaderEngg from "../Component/HeaderEngg";
import EngineeringPart  from "../Pages/Engineearing/EngineeringPart";
import { SecAgriculturalDroneSimulator, SecCoffeMachineSimulator, SeceRickshaw, SecSyphoneandCulvertSystem } from "../Pages/Engineearing/SecondPage";
import { ViewAgriculturalDroneSimulator, ViewCoffeMachineSimulator, ViewERickshaw, ViewSyphoneandCulvert } from "../Pages/Engineearing/Visidual";

function EngineeringRouter() {
  return (
    <>
    <Router >
      <HeaderEngg />
      <Switch>
        <Route exact path="/3deng/engineering" component={Engineering}/>
        <Route exact path="/3deng/architecture" component={Architecture}/>
        
        {/*  ##################### Engineering ########################### */}
        <Route exact path="/3deng/3dengineering" component={EngineeringPart}/>  
        <Route exact path="/3deng/sec_syphoneandculvert" component={SecSyphoneandCulvertSystem}/>
        <Route exact path="/3deng/sec_agriculturalDroneSimulator" component={SecAgriculturalDroneSimulator}/>
        <Route exact path="/3deng/sec_coffeeMachineSimulator" component={SecCoffeMachineSimulator}/>
        <Route exact path="/3deng/sec_eRickshaw" component={SeceRickshaw}/>
        <Route exact path="/3deng/viewsySyphoneandCulvertstem" component={ViewSyphoneandCulvert}/>
        <Route exact path="/3deng/viewAgriculturalDroneSimulator" component={ViewAgriculturalDroneSimulator}/>
        <Route exact path="/3deng/viewCoffeMachineSimulator" component={ViewCoffeMachineSimulator}/>
        <Route exact path="/3deng/vieweRickshaw" component={ViewERickshaw}/>
        
      </Switch>
      <Footer />
    </Router>
      
    </>
  );
}

export default EngineeringRouter;
