import 'dotenv/config'

export const config = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESS_TOKEN_SECRET: process.env.REFRESS_TOKEN_SECRET
}
