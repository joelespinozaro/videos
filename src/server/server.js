import express from 'express';
import webpack from 'webpack';
import { config } from '../../config';

const app = express();

if (config.dev) {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: config.port, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/app.css" type="text/css">
    <title>Videos</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="assets/app.js" type="text/javascript"></script>
  </body>
  </html>
`);
});

app.listen(config.port, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on por ${config.port}`);
});
