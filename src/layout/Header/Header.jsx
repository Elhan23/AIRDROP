import "./Header.scss";
import vector from "../../assets/images/vector.svg";

function Header() {
  return (
    <header className="container">
      <div className="join_class">
        <h1>JOIN OUR BIGGEST AIRDROP $DOGS</h1>

        <div className="btn_header">
          <button className="connect_class">Connect wallet</button>
          <div className="community_class">
            <button className="dogs_btn">
              DOGS Community
              <img src={vector} alt="vector" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
