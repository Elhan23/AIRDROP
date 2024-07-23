import NavBar from "./layout/NavBar/NavBar";
import Dogs from "./components/Dogs/Dogs";
import Community from "./components/Community/Community";
import eye from "./assets/icons/eye.svg";
import eyedog from "./assets/icons/eyedog.svg";
import phonedog1 from "./assets/images/phonedog1.png";
import phonedog2 from "./assets/images/phonedog2.png";
import ConnectCard from "./components/TextConnect/TextConnect";
import CardCommunity from "./components/CardCommunity/CardCommunity";
import GetDogs from "./components/GetDogs/GetDogs";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div>
         <NavBar />
      <Dogs/>
      <div className="community_flex">
        <Community
          title="DOGS Community"
          description="6,546,653 Subscribers"
          img={phonedog1}
          text="1,5М"
          eye={eye}
        />
        <Community
          title="CATS Community"
          description="4,123,456 Subscribers"
          img={phonedog2}
          text="2,1М"
          eyedog={eyedog}
        />
      </div>
      <ConnectCard />
      <div className="card_flex">
        <CardCommunity />
        <CardCommunity />
      </div>
      <GetDogs/>


      <div className="community_flex">
        <Community
          title="DOGS Community"
          description="6,546,653 Subscribers"
          img={phonedog1}
          text="1,5М"
          eye={eye}
        />
        <Community
          title="DOGS Community"
          description="6,546,653 Subscribers"
          img={phonedog1}
          text="1,5М"
          eye={eye}
        />
        <Community
          title="CATS Community"
          description="4,123,456 Subscribers"
          img={phonedog2}
          text="2,1М"
          eyedog={eyedog}
        />
        <Community
          title="CATS Community"
          description="4,123,456 Subscribers"
          img={phonedog2}
          text="2,1М"
          eyedog={eyedog}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
