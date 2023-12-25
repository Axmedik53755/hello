import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host:process.env.HOST_NAME,
    port: process.env.PORT_NAME,
    database: process.env.DATABASE_NAME,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,

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
