import React from "react";
import "./GetDogs.scss";

import dog1 from "../../assets/icons/dog1.svg";
import dog2 from "../../assets/icons/dog2.svg";
import dog3 from "../../assets/icons/dog3.svg";

import number1 from "../../assets/icons/number1.svg";
import number2 from "../../assets/icons/number2.svg";
import number3 from "../../assets/icons/number3.svg";

import strelka1 from "../../assets/icons/strelka1.svg";
import strelka2 from "../../assets/icons/strelka2.svg";
import strelka3 from "../../assets/icons/strelka3.svg";

function GetDogs() {
  return (
    <div className="container">
      <div className="global_style1">
        <h2>How to get your $DOGS?</h2>

        <div>
          <div>
            <img src={number1} alt="number1" className="number1" />
            <img src={dog1} alt="dog1" className="dog1" />
            <img src={strelka1} alt="strelka1" className="strelka1" />
          </div>

          <div className="border_dog">
            <h3>Connect wallet</h3>
            <p>
              Connect your crypto wallet to get the reward, the coins will be
              instantly delivered to your wallet.
            </p>
          </div>

          <div className="dog_style">
            <div>
              <img src={number2} alt="number1" className="number1" />
              <img src={dog2} alt="dog1" className="dog1" />
              <img src={strelka2} alt="strelka1" className="strelka1" />
            </div>

            <div className="border_dog">
              <h3>Connect wallet</h3>
              <p>
                Connect your crypto wallet to get the reward, the coins will be
                instantly delivered to your wallet.
              </p>
            </div>
          </div>

          <div className="dog_style">
            <div>
              <img src={number3} alt="number1" className="number1" />
              <img src={dog3} alt="dog1" className="dog1" />
              <img src={strelka3} alt="strelka1" className="strelka1" />
            </div>

            <div className="border_dog">
              <h3>Connect wallet</h3>
              <p>
                Connect your crypto wallet to get the reward, the coins will be
                instantly delivered to your wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetDogs;
