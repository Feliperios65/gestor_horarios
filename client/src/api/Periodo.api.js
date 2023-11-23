import axios from "axios";

//funcion para traer
export const getPeriodoRequest = async () =>
  await axios.get("http://localhost:4000/periodos");

//funcion para enviar datos
export const createPeriodoRequest = async (periodo) =>
  await axios.post("http://localhost:4000/periodos", periodo);

//funcion para eliminar datos
export const deletePeriodoRequest = async (id) =>
  await axios.delete(`http://localhost:4000/periodos/${id}`);
