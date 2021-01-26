import express from 'express';
import { config } from '../../config';

const app = express();

if (config.dev) {
  console.log('Development config');
}

app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(config.port, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on por ${config.port}`);
});
