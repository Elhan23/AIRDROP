import twitter from "../../assets/images/twitter.png";
import telegram from "../../assets/images/telegram.png";
import "./TextConnect.scss";

function TextConnect() {
  return (
    <div className="terms_class container">
      <span className="terms_text">
        <span className="dogs">DOGS</span>
        <p>All Rights Reserved. 2024</p>
      </span>

      <div className="documetations_class">
        <span className="mini_text">
          <p>Terms of use</p>
          <p>Documentations</p>
        </span>

        <div>
          <img src={twitter} alt="twitter" />
          <img src={telegram} alt="telegram" />
        </div>
      </div>
    </div>
  );
}

export default TextConnect;
