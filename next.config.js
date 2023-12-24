/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DB_HOST_NAME:process.env.DB_HOST_NAME,
        DB_PORT_NAME:process.env.DB_PORT_NAME,
        DB_DATABASE_NAME:process.env.DB_DATABASE_NAME,
        DB_USER_NAME:process.env.DB_USER_NAME,
        DB_PASSWORD:process.env.DB_PASSWORD
    }
}

module.exports = nextConfig
