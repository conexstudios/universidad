import "../styles/WelcomeArea.css";
import academicGapImage from "../assets/academic-gap.png";
import useSessionStore from '../store/sessionStore';

const WelcomeArea = () => {
  const session = useSessionStore((state) => state.session);
  return (
    <div className="welcome-area">
      <div className="welcome-text-section"> 
        <p>
          Hola {session.nom_fichanro}, aquí encontrarás un resumen de tu actividad en
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