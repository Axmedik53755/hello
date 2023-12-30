import mysql from "serverless-mysql";

const db = mysql({
  // config: {
  //   host:"45.80.153.6",
  //   port:3306,
  //   database:"kupo_mynewdb",
  //   user:"kupo_mynewdb",
  //   password:"b6JPnuc!+0-wK^of"
  //
  // },
  config: {
    host:process.env.NEXT_HOST_NAME,
    port:process.env.NEXT_PORT_NAME,
    database:process.env.NEXT_DATABASE_NAME,
    user:process.env.NEXT_USER_NAME,
    password:process.env.NEXT_PASSWORD

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
