import { Navbar } from "../components/Navbar"
import { useNavigate } from "react-router-dom";
import '../components/home.css';

export const HomeRouter = () => {
  const navigate = useNavigate();

  const goToColombia = () => {
    navigate("/colombia");
  }

  const goToMexico = () => {
    navigate("/mexico");
  }

  return (
    <div>
      <Navbar />
      <div className="cont-home">
        <h1>Esta es la página del Usuario</h1>
        <p>Por favor selecciona el país a ingresar</p>
        <div className="enlace">
          <button className="btn-col" onClick={goToColombia}>Colombia</button>
          <button className="btn-mex" onClick={goToMexico}>México</button>
        </div>
      </div>
    </div>
  )
}