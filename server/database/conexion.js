import mysql from "mysql2/promise";

class Database {
  constructor() {
    this.pool = null;
  }

  static async getInstance() {
    if (!this.instance) {
      this.instance = new Database();
      await this.instance.connect();
    }
    return this.instance;
  }

  async connect() {
    try {
      this.pool = mysql.createPool({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "12345",
        database: "gestion_horarios",
      });
      //   console.log("Conexión a la base de datos MySQL establecida");
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
    }
  }
}

// PRUEBA SINGLETON
// const db = await Database.getInstance();
// const db1 = await Database.getInstance();
// console.log(db === db1);

// CONEXION VIEJA
// const DbConexion = createPool({
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "12345",
//   database: "gestion_horarios",
// });

export default Database;
