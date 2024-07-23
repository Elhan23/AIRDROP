import logo from "../../assets/images/logo.svg";
import Header from "../Header/Header";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="bg_navbar">
      <div className="container">
        <div className="navbar_style">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <span className="navbar_description">
            <p>
              Join the first official airdrop from $DOGS | Our team tries for
              the sake of every user, we appreciate you!{" "}
            </p>
          </span>

          <button>Connect wallet</button>
        </div>
        <hr />
      </div>
      <Header />
    </nav>
  );
}

export default NavBar;
