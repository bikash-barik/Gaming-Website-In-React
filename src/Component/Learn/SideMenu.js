import React, { useEffect, useState } from "react";
// import user from "../assets/userimg.png";
import "../../Style/LearnRouter.css"

import MenuItem from "./MenuItem";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Human Anatomy",
    exact: true,
    to: "/learn/learnmore",
    iconClassName: "bi bi-house-door",
  },
  {
    name: "Muscular System",
    exact: true,
    to: `/learn/muscularsystem`,
    iconClassName: "bi bi-cash",
    subMenus: [
      { name: "About", to: "/learn/muscularsystem#about" },
      { name: "Male", to: "/learn/muscularsystem#male" },
      { name: "Female", to: "/learn/muscularsystem#female" },
    ],
  },
  {
    name: "Anatomy Of Skin",
    exact: true,
    to: `/learn/skinanatomy`,
    iconClassName: "bi bi-cash",
    subMenus: [
      { name: "About", to: "/learn/skinanatomy#about" },
      { name: "Parst of Skin", to: "/learn/skinanatomy#partskin" },
    ],
  },

  {
    name: "Human Skeletal",
    exact: true,
    to: `/learn/skeletalsystem`,
    iconClassName: "bi bi-cash",
    subMenus: [
      { name: "About", to: "/learn/skeletalsystem#about" },
      { name: "Parts of the Axial Skeleton", to: "/learn/skeletalsystem#partaxial" },
      { name: "Parts of the Appendicular Skeleton", to: "/learn/skeletalsystem#partappendicular" },
    ],
  },

  {
    name: "Lymphatic System",
    exact: true,
    to: `/learn/lymphaticsystem`,
    iconClassName: "bi bi-cash",
    subMenus: [
      { name: "About", to: "/learn/lymphaticsystem#about" },
      { name: "Parts of Lymphatic System", to: "/learn/lymphaticsystem#partlymphatic" },
    ],
  },


  {
    name: "Nervous System",
    exact: true,
    to: `/Nervous`,
    iconClassName: "bi bi-cash",
    subMenus: [
      { name: "About", to: "/Nervous" },
      { name: "Parts of Nervous System", to: "/Nervous" },
    ],
  },

  {
    name: "Human Brain",
    exact: true,
    to: `/Magazines`,
    iconClassName: "bi bi-book",
    subMenus: [
      { name: "About", to: "/AddNewMagazin" },
      { name: "Cerebrum", to: "/AddNew" },
      { name: "Diencephalon", to: "/Add" },
      { name: "Cerebellum", to: "/Add" },
      { name: "Brain Stem", to: "/Add" },
      { name: "Neurons", to: "/Add" },
    ],
  },
  {
    name: "Human Ear",
    exact: true,
    to: `/learn/humanear`,
    iconClassName: "bi bi-cash",
    subMenus: [
      { name: "About", to: "/learn/humanear#about" },
      { name: "Parts of Ear", to: "/learn/humanear#partear" },
    ],
  },
  
  
  {
    name: "Human Eye",
    exact: true,
    to: `/learn/humaneye`,
    iconClassName: "bi bi-people",
    subMenus: [
      { name: "About", to: "/learn/humaneye#about" },
      { name: "Parts of Eye", to: "/learn/humaneye#parteye" },
    ],
  },
  {
    name: "Dental Anatomy",
    exact: true,
    to: `/content-3`,
    iconClassName: "bi bi-clipboard-data",
    subMenus: [
      { name: "About", to: "/FreeCoupon" },
      { name: "INTERNAL PARTS", to: "/FreeCoupon" },
      { name: "EXTERNAL PARTS ", to: "/DownloaadReporrts" },
    ],
  },
  
  {
    name: "Human Heart",
    exact: true,
    to: `/learn/humanheart`,
    iconClassName: "bi bi-bell",
    subMenus: [
      { name: "About", to: "/learn/humanheart#about" },
      { name: "INTERNAL PARTS", to: "/learn/humanheart#internalparts" },
      { name: "EXTERNAL PARTS ", to: "/learn/humanheart#externalparts" },
    ],
  },

  {
    name: "Liver Anatomy",
    exact: true,
    to: `/Analytics`,
    iconClassName: "bi bi-clipboard-data",
    subMenus: [
      { name: "About", to: "/FreeCoupon" },
      { name: "INTERNAL PARTS", to: "/FreeCoupon" },
      { name: "EXTERNAL PARTS ", to: "/DownloaadReporrts" },
    ],
  },

  {
    name: "Respitatory System",
    exact: true,
    to: `/Analytics`,
    iconClassName: "bi bi-clipboard-data",
    subMenus: [
      { name: "About", to: "/FreeCoupon" },
      { name: "INTERNAL PARTS", to: "/FreeCoupon" },
      { name: "EXTERNAL PARTS ", to: "/DownloaadReporrts" },
    ],
  },

  {
    name: "Kidney Anatomy",
    exact: true,
    to: `/Analytics`,
    iconClassName: "bi bi-clipboard-data",
    subMenus: [
      { name: "About", to: "/FreeCoupon" },
      { name: "INTERNAL PARTS", to: "/FreeCoupon" },
      { name: "EXTERNAL PARTS ", to: "/DownloaadReporrts" },
    ],
  },

  {
    name: "Digestive System",
    exact: true,
    to: `/Analytics`,
    iconClassName: "bi bi-clipboard-data",
    subMenus: [
      { name: "About", to: "/FreeCoupon" },
      { name: "Parts of Digestive System", to: "/FreeCoupon" },
    ],
  },

  {
    name: "Structure Of a Cell",
    exact: true,
    to: `/Analytics`,
    iconClassName: "bi bi-clipboard-data",
    subMenus: [
      { name: "About", to: "/FreeCoupon" },
      { name: "Parts of Cell", to: "/FreeCoupon" },
    ],
  },


  { name: "Help & Support", to: `/design-6`, iconClassName: "bi bi-briefcase" },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          {/* <img src={logo} alt="webscript" /> */}
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          {/* <img src={user} alt="user" /> */}
        </div>
        <div className="user-info">
          <h5>3D Human Anatomy </h5>
          <p>info@3dhumananatomy.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
