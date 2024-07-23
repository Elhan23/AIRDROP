import React, { useEffect, useRef } from 'react';
import dog1 from "../../assets/icons/dog1.svg";
import dog2 from "../../assets/icons/dog2.svg";
import dog3 from "../../assets/icons/dog3.svg";

import number1 from "../../assets/icons/number1.svg";
import number2 from "../../assets/icons/number2.svg";
import number3 from "../../assets/icons/number3.svg";

import strelka1 from "../../assets/icons/strelka1.svg";
import strelka2 from "../../assets/icons/strelka2.svg";
import strelka3 from "../../assets/icons/strelka3.svg";

import './Dogs.scss'; 

function Dogs() {
  const dogSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (dogSectionRef.current) {
        const { top } = dogSectionRef.current.getBoundingClientRect();
        if (top <= window.innerHeight) {
          dogSectionRef.current.classList.add('animate');
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="container1" ref={dogSectionRef}>
      <div>
        <h2>How to get your $DOGS?</h2>

        <div className="steps">
          <div className="step">
            <img src={number1} alt="number1" className="number" />
            <img src={dog1} alt="dog1" className="dog" />
            <img src={strelka1} alt="strelka1" className="arrow" />
            <div className="card"><span>Connect wallet</span><br />Connect your crypto wallet to get the reward, the coins will be instantly delivered to your wallet.</div>
          </div>
          <div className="step">
            <img src={number2} alt="number2" className="number" />
            <img src={dog2} alt="dog2" className="dog" />
            <img src={strelka2} alt="strelka2" className="arrow" />
            <div className="card"><span>Share</span><br />This airdrop will not be relevant for a long time. So, hurry up and take part in airdrop. We wish you good luck!</div>
          </div>
          <div className="step">
            <img src={number3} alt="number3" className="number" />
            <img src={dog3} alt="dog3" className="dog" />
            <img src={strelka3} alt="strelka3" className="arrow" />
            <div className="card"><span>Earn</span><br />Confirm the transaction in your wallet so we realize you are not a robot and send your reward.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dogs;
