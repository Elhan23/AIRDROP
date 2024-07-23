import "./Community.scss";
import eye from "../../assets/icons/eye.svg";
import eyedog from "../../assets/icons/eyedog.svg";
import phonedog1 from "../../assets/images/phonedog1.png";

function Community({ title, description, img, text, eye: eyeProp, eyedog: eyedogProp }) {
  return (
   
      <div className="phonedog_class">
         <div className="container">
        <div>
          <img src={img} alt="phonedog" className="phonedog1" />

          <div className="desription_dog">
            <span className="subscribers">
              <h2>{description}</h2>
              <p>{title}</p>
            </span>

            <p className="views_class">
              {text}
              <img src={eyeProp || eyedogProp} alt="eye" className="eye" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
