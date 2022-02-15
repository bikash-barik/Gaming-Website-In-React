import SideMenu, { menuItems } from "../Component/Learn/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "../Style/LearnRouter.css";
import SideHumanAnatomy from "../Component/SideHumanAnatomy";
import MuscularSystemPart from "../Component/Learn/LearnPart/MuscularSystemPart";
import MuscularSystem from "../Component/Learn/LearnPart/MuscularSystem";
import SkeletalSystem from "../Component/Learn/LearnPart/SkeletalSystem";
import LymphaticSystem from "../Component/Learn/LearnPart/LymphaticSystem";
import HumanEar from "../Component/Learn/LearnPart/HumanEar";
import HumanEye from "../Component/Learn/LearnPart/HumanEye";
import Header from "../Component/Header";
import SkinAnatomy from "../Component/Learn/LearnPart/SkinAnatomy";

// pages import

function LearnRouter() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header/>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`con ${inactive ? "inactive" : ""}`}>
          {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}
          {/* {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} ={menu.} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))} */}

          <Switch>
          <Route exact path="/learn/learnmore" component={SideHumanAnatomy}/>
          <Route exact path="/learn/muscularsystem" component={MuscularSystemPart}/>
          <Route exact path="/learn/skinanatomy" component={SkinAnatomy}/>
          <Route exact path="/learn/skeletalsystem" component={SkeletalSystem}/>
          <Route exact path="/learn/lymphaticsystem" component={LymphaticSystem}/>
          <Route exact path="/learn/humanear" component={HumanEar}/>
          <Route exact path="/learn/humaneye" component={HumanEye}/>
            {/* <Route exact path={"/learnmore"}>
              <SideHumanAnatomy />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default LearnRouter;
