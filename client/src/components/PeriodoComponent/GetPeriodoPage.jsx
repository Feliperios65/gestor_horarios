import { useEffect, useState } from "react";
import { getPeriodoRequest } from "../../api/Periodo.api";
import GetPerioLista from "./GetPerioLista";

function GetPeriodoPage() {
  const [periodos, setPeriodos] = useState([]);
  useEffect(() => {
    //se ejecuta cada vez que se caraga la pagina
    async function loadPeriodo() {
      const response = await getPeriodoRequest(); //funcion asincrona para traer los datos (mi peicion http)
      setPeriodos(response.data);
      // console.log(response.data);
    }

    loadPeriodo();
  }, []);
  //para renderisar el contenido principal
  function renderMain() {
    if (periodos.length === 0) return <h1>No hay periodos</h1>;
    return periodos.map((periodo) => (
      <GetPerioLista periodo={periodo} key={periodo.id_periodo_academico} />
    ));
  }
  return (
    <div>
      <h1>Periodos</h1>
      {renderMain()}
    </div>
  );
}

export default GetPeriodoPage;
