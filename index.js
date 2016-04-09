const faker = require('faker');
const _ = require('lodash');

const jsonServer = require('json-server');
const app = jsonServer.create();
const port = process.env.PORT || 3000;


app.use(jsonServer.defaults({
  logger: process.env.NODE_ENV !== 'production'
}));

app.get('/api/hotels', function (req, res) {
  if(!req.query.no_error && (req.query.force_error || _.random(5) === 1)){
    res.status(500).send({
      error: 'Something failed!'
    });
    return;
  }
  var results_count = +(req.query.count || _.random(0, 500));
  var min_stars = +req.query.min_stars || 1;
  var max_price = +req.query.max_price || 1000;
  var ref_date = faker.date.recent(14);
  res.jsonp(_.times(results_count, () => {
    return {
      id: faker.random.uuid(),
      name: faker.lorem.words(),
      country: faker.address.country(),
      city: faker.address.city(),
      price: _.random(100, max_price),
      images: _.times(_.random(1, 10), () => faker.image.city(640, 480, true)),
      date_start: ref_date,
      date_end: faker.date.future(0, ref_date),
      stars: _.random(min_stars, 5),
      rating: _.random(0.0, 6.0, true),
      description: faker.lorem.paragraph()
    };
  }));
});

app.get('/api/reviews', function (req, res){
  if(!req.query.hotel_id){
    res.status(500).send({
      error: 'No hotel id specified'
    });
    return;
  }
  res.jsonp(_.times(_.random(0, 10), () => {
    return {
      name: faker.name.findName(),
      comment: faker.lorem.text(),
      positive: faker.random.boolean(),
      hotel_id: req.query.hotel_id
    };
  }));
});


app.listen(port, () => {
  console.log('JSONPlaceholder listening on http://localhost:' + port);
})
