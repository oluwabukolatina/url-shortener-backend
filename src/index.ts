/**
 * Required External Modules
 */
import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import urlRoutes from './urls/url.route';

dotenv.config();
/**
 * App Variables
 */
// const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
// const PORT: string|number = process.env.PORT || 3000;
const app = express();
/**
 *  App Configuration
 */
app.use(express.json());
app.use(morgan('dev'));
app.get('/', (req, res) => res.send('Hello'));

app.use('/api/v1/urls', urlRoutes);
// eslint-disable-next-line import/prefer-default-export
export { app };
