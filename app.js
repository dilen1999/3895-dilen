const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.json([
    {
      id: '1',
      title: 'EG_2020_3895',
    }
  ]);
});
module.exports = app;
