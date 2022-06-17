import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import SecondPage, { SecDentalAnatomy, SecDigestiveSystem, SecHumanCell, SecKidney, SecNeuron, SecReproductiveSystem, SecRespiratorySystem } from "../Pages/SecondPage";
import { SecondPage1,SecondPage2,SecondPage3,SecHumanHeart,SecMuscularSystem } from "../Pages/SecondPage";
import {Visidual,Visidual2,Visidual3,Visidual4,ViewHumanHeart,ViewMuscularSystem, ViewRespiratorySystem, ViewdigestiveSystem, ViewDigestiveSystem, ViewKidney, ViewReproductiviSystem, ViewNeuronSystem, ViewDental, ViewHumanCell} from "../Pages/Visidual";
import Footer from "../Component/Footer";
import { Services } from "../Pages/Services";
import ContactUs from "../Pages/ContactUs";
import EngineeringPart  from "../Pages/Engineearing/EngineeringPart";
import { SecAgriculturalDroneSimulator, SecCoffeMachineSimulator, SeceRickshaw, SecSyphoneandCulvertSystem } from "../Pages/Engineearing/SecondPage";
import { ViewAgriculturalDroneSimulator, ViewCoffeMachineSimulator, ViewERickshaw, ViewSyphoneandCulvert } from "../Pages/Engineearing/Visidual";
import { AnatmyHome } from "../Component/AnatomyPart/AnatmyHome";
import Anatomy from "../Pages/NewView/Anatomy";

function AppRouter() {
  return (
    <>
    <Router >
      <Header />
      <Switch>
        <Route exact path="/3d/anatomy" component={Services}/>
        <Route exact path="/3d/3danatomy" component={Home}/>
        <Route exact path="/3d/second_page" component={SecondPage}/>
        <Route exact path="/3d/second_page1" component={SecondPage1}/>
        <Route exact path="/3d/second_page2" component={SecondPage2}/>
        <Route exact path="/3d/second_page3" component={SecondPage3}/>
        <Route exact path="/3d/sec_humanhart" component={SecHumanHeart}/>
        <Route exact path="/3d/sec_muscularsystem" component={SecMuscularSystem}/>
        <Route exact path="/3d/sec_respiratorysystem" component={SecRespiratorySystem}/>
        <Route exact path="/3d/sec_digestivesystem" component={SecDigestiveSystem}/>
        <Route exact path="/3d/sec_kidney" component={SecKidney}/>  
        <Route exact path="/3d/sec_neuron" component={SecNeuron}/>  
        <Route exact path="/3d/sec_reproductive" component={SecReproductiveSystem}/>  
        <Route exact path="/3d/sec_dental" component={SecDentalAnatomy}/>  
        <Route exact path="/3d/sec_humancell" component={SecHumanCell}/>  
        <Route exact path="/3d/view1" component={Visidual}/>
        <Route exact path="/3d/view2" component={Visidual2}/>
        <Route exact path="/3d/view3" component={Visidual3}/>
        <Route exact path="/3d/view4" component={Visidual4}/>
        <Route exact path="/3d/viewhumanhart" component={ViewHumanHeart}/>
        <Route exact path="/3d/viewmuscularsystem" component={ViewMuscularSystem}/>
        <Route exact path="/3d/viewrespiratorysystem" component={ViewRespiratorySystem}/>
        <Route exact path="/3d/viewdigestivesystem" component={ViewDigestiveSystem}/>
        <Route exact path="/3d/viewrepoductivisystem" component={ViewReproductiviSystem}/>
        <Route exact path="/3d/viewneuron" component={ViewNeuronSystem}/>
        <Route exact path="/3d/viewkidney" component={ViewKidney}/>
        <Route exact path="/3d/viewdental" component={ViewDental}/>
        <Route exact path="/3d/viewhumancell" component={ViewHumanCell}/>
        <Route exact path="/3d/contactus" component={ContactUs}/>

        {/* ################################ you tube view New Component ########################### */}
        <Route exact path="/3d/anatomyhome" component={Anatomy}/>

        
{/*  ##################### Engineering ########################### */}
        {/* <Route exact path="/3d/engineering" component={EngineeringPart}/>  
        <Route exact path="/3d/sec_syphoneandculvert" component={SecSyphoneandCulvertSystem}/>
        <Route exact path="/3d/sec_agriculturalDroneSimulator" component={SecAgriculturalDroneSimulator}/>
        <Route exact path="/3d/sec_coffeeMachineSimulator" component={SecCoffeMachineSimulator}/>
        <Route exact path="/3d/sec_eRickshaw" component={SeceRickshaw}/>
        <Route exact path="/3d/viewsySyphoneandCulvertstem" component={ViewSyphoneandCulvert}/>
        <Route exact path="/3d/viewAgriculturalDroneSimulator" component={ViewAgriculturalDroneSimulator}/>
        <Route exact path="/3d/viewCoffeMachineSimulator" component={ViewCoffeMachineSimulator}/>
        <Route exact path="/3d/vieweRickshaw" component={ViewERickshaw}/>
         */}
      </Switch>
      {/* <Footer /> */}
    </Router>
      
    </>
  );
}

export default AppRouter;
