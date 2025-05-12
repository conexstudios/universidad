import "../styles/WelcomeArea.css";
import academicGapImage from "../assets/academic-gap.png";

const WelcomeArea = () => {
  return (
    <>
      <div className="welcome-area">
        <div className="academic-gap-image">
          <img src={academicGapImage} alt="Academic Gap" />
        </div>
        <p>
          Hola Yolman, aquí encontrarás un resumen de tu actividad en
          conextudios.
        </p>
      </div>
    </>
  );
};

export default WelcomeArea;
