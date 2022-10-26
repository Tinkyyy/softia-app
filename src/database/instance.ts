import { Sequelize } from 'sequelize';
import 'dotenv/config';

const database: any = {
  host: process.env.DATABASE_HOST,
  name: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  dialect: process.env.DATABASE_DIALECT,
};

const sequelize = new Sequelize(database.name, database.username, database.password, {
  host: database.host,
  dialect: database.dialect,
  logging: false, // Avoid default execution sequelize
  timezone: '+02:00',
});

export default sequelize;
