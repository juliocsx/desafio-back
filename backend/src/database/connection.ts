import { Sequelize } from 'sequelize';
import * as dotenv from "dotenv";

dotenv.config()
const dbURL = process.env.DB_URL || ''
const database = new Sequelize(dbURL)

export default database