import React from "react";
import { deletePeriodoRequest } from "../../api/Periodo.api";

function GetPerioLista({ periodo }) {
  //funcion para enviar peticion
  const handleDelete = async (id) => {
    try {
      const response = await deletePeriodoRequest(id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <p>{periodo.nombre_periodo}</p>
      <p>{periodo.fecha_inicio_periodo}</p>
      <p>{periodo.fecha_fin_periodo}</p>
      <button onClick={() => handleDelete(periodo.id_periodo_academico)}>
        Eliminar
      </button>
      <button>Editar</button>
      <br />
    </div>
  );
}

export default GetPerioLista;
