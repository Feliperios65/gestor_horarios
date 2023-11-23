import { Form, Formik } from "formik";
import { createPeriodoRequest } from "../../api/Periodo.api";

function PeriodoPage() {
  return (
    <div>
      <Formik
        initialValues={{
          nombre_periodo: "",
          fecha_inicio_periodo: "",
          fecha_fin_periodo: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const respons = await createPeriodoRequest(values);
            console.log(respons);
            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre_periodo"
              placeholder="Escribir nombre"
              onChange={handleChange}
              value={values.nombre_periodo}
            />

            <label>Fecha inicio</label>
            <input
              type="date"
              name="fecha_inicio_periodo"
              placeholder="Seleccionar fecha de inicio"
              onChange={handleChange}
              value={values.fecha_inicio_periodo}
            />

            <label>Fecha fin</label>
            <input
              type="date"
              name="fecha_fin_periodo"
              placeholder="Seleccionar fecha de fin"
              onChange={handleChange}
              value={values.fecha_fin_periodo}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PeriodoPage;
