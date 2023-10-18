import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "../components/Navbar"
import { api_key } from "../../common/utils";

import '../components/tabla.css';

export const MexicoRouter = () => {
  const navigate = useNavigate();
  const [holidays, setHolidays] = useState([]);
  const apiKey = api_key;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=MX&year=2023`);
        if (!response.ok) throw new Error('Error al obtener la lista de festivos');
        const data = await response.json();
        const sortedHolidays = data.response.holidays.sort((a, b) => {
          return new Date(a.date.iso) - new Date(b.date.iso);
        });
        setHolidays(sortedHolidays);
      } catch (error) { console.error(error); }
    };
    fetchData();
  }, [apiKey]);

  const goToHome = () => {
    navigate("/")
  }

  const today = new Date();
  const nextHoliday = holidays.find((holiday) => new Date(holiday.date.iso) >= today);

  return (
    <div>
      <Navbar />
      <div className="cont-cal">
        <h2>Festivos en México</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre del festivo</th>
              <th>Fecha</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday, index) => (
              <tr key={index} style={{ backgroundColor: holiday === nextHoliday ? 'red' : 'transparent', color: holiday === nextHoliday ? 'white' : 'black' }}>
                <td>{holiday.name}</td>
                <td>{holiday.date.iso}</td>
                <td>{holiday.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn-back" onClick={goToHome}>Regresar</button>
      </div>
    </div>
  )
}