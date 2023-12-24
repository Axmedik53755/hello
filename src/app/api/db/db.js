import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host:process.env.DB_HOST_NAME,
    port: process.env.DB_PORT_NAME,
    database: process.env.DB_DATABASE_NAME,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
  },
});
export default async function executeQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
