import { useState, useEffect } from "react";
import LoginButton from "./userLoginButton";
import AuthModal from "./authModal";
import ProfilePicture from "./profilePicture";
import styles from "../styles/nav.module.css";

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    import("materialize-css/dist/js/materialize.min.js").then((M) => {
      let sidenav = document.querySelector("#slide-out");
      M.Sidenav.init(sidenav, {});
    });
  });

  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
  };

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
                    <a
                      // href="/api/auth/logout"
                      className="waves-effect waves-light btn"
                      onClick={handleClick}
                    >
                      <i className="material-icons right">
                        {authToken ? "logout" : "login"}
                      </i>
                      {authToken ? "Log Out" : "Log In"}
                    </a>
                    {showModal && (
                      <AuthModal setShowModal={setShowModal}/>
                    )}
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
            <i className="material-icons right">account_circle</i>Sign Up
          </a>
        </li>
        <li>
          <a
            // href="/api/auth/logout"
            className="waves-effect waves-light btn"
            onClick={handleClick}
          >
            <i className="material-icons right">login</i>
            Log in
          </a>
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
