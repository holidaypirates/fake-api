# pirate_modelboat
Fake api server

## Endpoints

### Hotels [`api/hotels`]

#### Params

- `no_error` - prevents server from errors if set
- `force_error` - enforces server error if set
- `count` - search results count
- `min_stars` - minimum hotel stars
- `max_price` - maximum offer price

#### Example
```sh
curl https://fake-hotel-api.herokuapp.com/api/hotels
```
```js
[
  {
    "id": "13ef1108-7f18-40c7-ac0f-0e743b015755", //hotel id
    "name": "soluta aperiam rerum", //hotel name
    "country": "Seychelles", //hotel country
    "city": "Norbertberg", //hotel country
    "price": 140, //offer price
    "images": [ //hotel images
      "http://lorempixel.com/640/480/city?87325",
      ...
    ],
    "date_start": "2016-04-02T08:09:12.088Z", //offer start date
    "date_end": "2016-11-30T04:27:59.359Z", //offer end date
    "stars": 2, //hotel stars
    "rating": 1.811553610023111, //hotel rating
    "description": "Recusandae enim debitis quisquam pariatur..." //hotel description
  },
  ...
]
```

#### Errors
```sh
curl https://fake-hotel-api.herokuapp.com/api/hotels?force_error=1
```
```js
{
  "error": "Something failed!" //error message
}
```

### Reviews [`api/reviews`]

#### Params

- `hotel_id` - hotel id

#### Example
```sh
curl https://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=13ef1108-7f18-40c7-ac0f-0e743b015755
```
```js
[
  {
    "name": "Nigel Kub", //commenter name
    "comment": "Rerum est suscipit adipisci odio hic.", //comment
    "positive": true, //false if comment is negative
    "hotel_id": "13ef1108-7f18-40c7-ac0f-0e743b015755" //hotel id
  },
  ...
]
```

#### Errors
```sh
curl https://fake-hotel-api.herokuapp.com/api/reviews
```
```js
{
  "error": "No hotel id specified" //error message
}
```
