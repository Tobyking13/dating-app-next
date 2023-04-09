import { Component } from "react";
import Image from "next/image";
import hamster from "../../public/images/hamster.jpg";
import LoginButton from "./userLoginButton";
import ProfilePicture from "./profilePicture";
import styles from "../styles/nav.module.css";

class NavBar extends Component {
  componentDidMount() {
    import("materialize-css/dist/js/materialize.min.js").then((M) => {
      let sidenav = document.querySelector("#slide-out");
      M.Sidenav.init(sidenav, {});
    });
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="nav-extended">
            <div className="nav-wrapper">
              <a
                href="#"
                data-target="slide-out"
                className="sidenav-trigger hide-on-large-and-up"
              >
                <i className="material-icons">menu</i>
              </a>
              <ul id="nav-mobile" className="hide-on-med-and-down">
                <div>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Privacy</a>
                  </li>
                  <li>
                    <a href="collapsible.html">Support</a>
                  </li>
                  <li>
                    <a href="collapsible.html">Download</a>
                  </li>
                </div>
                <div>
                  <ul className="right hide-on-med-and-down">
                    <li>
                      <a className="waves-effect waves-light btn">
                        <i className="material-icons right">account_circle</i>
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <LoginButton />
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="slide-out">
          <li>
            <div
              className={`container center-align ${styles.sideNavProfilePicContainer}`}
            >
              {/* <Image
                src={hamster}
                alt="hamster image"
                width={150}
                height={150}
                className={styles.sideNavProfilePic}
              /> */}
              <ProfilePicture />
            </div>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a className="waves-effect waves-light btn">
              <i className="material-icons right">lightbulb</i>Sign Up
            </a>
          </li>
          <li>
           <LoginButton />
          </li>
          <li>
            <div className="divider"></div>
          </li>

          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
