import { connect } from 'mongoose';
import morgan from 'morgan';
/**
 * Required External Modules
 */

import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
// const PORT: string|number = process.env.PORT || 3000;
const DB = String(process.env.APP_DB);
const app = express();
console.log(PORT)

/**
 *  App Configuration
 */
app.use(express.json());
app.use(morgan('dev'));

/**
 * Server Activation
 */

app.get('/', (req, res) => res.send('Hello Node/Typescript starter!'));
app.listen(PORT, () => {
  try {
    connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }).then(() => { console.log('connected'); })
      .catch(() => { });
  } catch (error) {
    return error;
  }
});
