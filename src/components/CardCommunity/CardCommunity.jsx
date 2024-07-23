import vector from "../../assets/images/vector.svg";
import logo from "../../assets/images/logo.svg";
import "./CardCommunity.scss";

function CardCommunity() {
  return (
    <div className="container">
      <div className="bg_card">
        <div className="global_style">
          <div className="connect_wallet">
            <img src={logo} alt="logo" />
            <button>Connect wallet</button>
          </div>
          <hr />

          <div className="biggest">
            <h3>BIGGEST AIRDROP $DOGS</h3>

            <div className="btn_wallet">
              <button className="card_class1">Connect wallet</button>
              <button className="card_btn2">
                DOGS Community
                <img src={vector} alt="vector" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCommunity;
