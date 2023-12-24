import mysql from "serverless-mysql";
const db = mysql({
  config: {
    host: "sql12.freesqldatabase.com",
    port: "3306",
    database: "sql12672294",
    user: "sql12672294",
    password: "XTihXHDT17",
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
