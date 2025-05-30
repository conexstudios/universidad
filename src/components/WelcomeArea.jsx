import "../styles/WelcomeArea.css";
import academicGapImage from "../assets/academic-gap.png";

const WelcomeArea = () => {
  return (
    <div className="welcome-area">
      <div className="welcome-text-section"> 
        <p>
          Hola Yolman, aquí encontrarás un resumen de tu actividad en
          conextudios.
        </p>
      </div>
      <div className="welcome-image-section">
        <div className="academic-gap-image">
          <img src={academicGapImage} alt="Academic Gap" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeArea;