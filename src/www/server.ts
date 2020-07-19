import { connect } from 'mongoose';
import { app } from '../index';
import db from '../utils/database';
/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10) || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  db.connectToDb().then(() => console.log('conoijhhhhhnected to db'))
    .catch(() => console.log('sohj went wrong'));
});
