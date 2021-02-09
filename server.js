const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  console.log('Default Req Headers', req.headers);
  res.send('Default');
});

app.get('/third-party', (req, res) => {
  console.log('third-party > Req Headers', req.headers);
  res.send('third-party');
});

app.get('/google-maps', (req, res) => {
  console.log('google-maps > Req Headers', req.headers);
  res.send('google-maps');
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port ' + listener.address().port);
});
