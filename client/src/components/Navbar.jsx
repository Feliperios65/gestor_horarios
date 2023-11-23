import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <h1>React Mysql</h1>
      <ul>
        <li>
          <Link to="/crear-periodo">Crear Periodo</Link>
        </li>
        <li>
          <Link to="/periodos">Periodos</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
