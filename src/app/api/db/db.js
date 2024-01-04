import mysql from "mysql2/promise"; // Use promise-based version

const pool = mysql.createPool({
  host: process.env.NEXT_HOST_NAME,
  port: process.env.NEXT_PORT_NAME,
  database: process.env.NEXT_DATABASE_NAME,
  user: process.env.NEXT_USER_NAME,
  password: process.env.NEXT_PASSWORD,
  connectionLimit: 10, // Adjust according to your needs
});

export default async function executeQuery({ query, values }) {
  try {
    const connection = await pool.getConnection();
    const [results] = await connection.execute(query, values);
    connection.release(); // Release the connection back to the pool
    return results;
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Database error:", error);
    return { error };
  }
}
