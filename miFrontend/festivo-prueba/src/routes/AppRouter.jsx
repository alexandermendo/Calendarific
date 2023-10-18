import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeRouter } from "../routes/HomeRouter";
import { ColombiaRouter } from "../routes/ColombiaRouter";
import { MexicoRouter } from "../routes/MexicoRouter";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRouter />} />
        <Route path="/colombia" element={<ColombiaRouter />} />
        <Route path="/mexico" element={<MexicoRouter />} />
      </Routes>
    </Router>
  )
}