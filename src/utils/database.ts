import { connect, disconnect } from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
const TEST = String(process.env.TEST_DB);
const DB = String(process.env.APP_DB);
async function connectToDb() {
  try {
    return await connect(process.env.ENV === 'Test' ? DB : TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    return error;
  }
}
async function disconnectFromDB() {
  return disconnect();
}
export default { connectToDb, disconnectFromDB };
