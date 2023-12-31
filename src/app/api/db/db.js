import mysql from "mysql2";

const db = mysql.createConnection({
    host:process.env.NEXT_HOST_NAME,
    port:process.env.NEXT_PORT_NAME,
    database:process.env.NEXT_DATABASE_NAME,
    user:process.env.NEXT_USER_NAME,
    password:process.env.NEXT_PASSWORD
});


export default async function executeQuery({ query, values }) {
  try {
    const [results] = await db.execute(query, values);
    db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
