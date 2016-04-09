const jsonServer = require('json-server');
const app = jsonServer.create();
const port = process.env.PORT || 3000;

app.use(jsonServer.defaults({
  logger: process.env.NODE_ENV !== 'production'
}));

app.get('/api', function (req, res) {
  res.jsonp({ msg: 'hello' });
});


app.listen(port, () => {
  console.log('JSONPlaceholder listening on http://localhost:' + port);
})
