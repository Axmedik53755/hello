/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
       HOST_NAME:process.env.NEXT_HOST_NAME,
      PORT_NAME:process.env.NEXT_PORT_NAME,
     DATABASE_NAME:process.env.NEXT_DATABASE_NAME,
    USER_NAME:process.env.NEXT_USER_NAME,
      PASSWORD:process.env.NEXT_PASSWORD

    }
}

module.exports = nextConfig
