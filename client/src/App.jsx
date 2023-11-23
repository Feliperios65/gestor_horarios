import { Route, Routes } from "react-router-dom";
import CreatePeriodoPage from "./components/PeriodoComponent/CreatePeriodoPage.jsx";
import GetPeriodoPage from "./components/PeriodoComponent/GetPeriodoPage.jsx";
import NavBar from "./components/NavBar.jsx";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/crear-periodo" element={<CreatePeriodoPage />} />
        <Route path="/periodos" element={<GetPeriodoPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
