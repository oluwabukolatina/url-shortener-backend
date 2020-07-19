import { connect } from 'mongoose';
import { app } from '../index';
/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const PORT = parseInt(process.env.PORT, 10) || 3000;
const DB = String(process.env.APP_DB);
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }).then(() => { console.log('connected'); })
    .catch(() => { console.log('something went wrong')});
});
