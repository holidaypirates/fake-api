# pirate_modelboat
Fake api server

## Endpoints

### Hotels [`api/hotels`]

#### Params

- `no_error`
- `force_error`
- `count`
- `min_stars`
- `max_price`

#### Example
```sh
curl https://pirate-modelboat.herokuapp.com/api/hotels
```
```json
[
  {
    "id": "13ef1108-7f18-40c7-ac0f-0e743b015755",
    "name": "soluta aperiam rerum",
    "country": "Seychelles",
    "city": "Norbertberg",
    "price": 140,
    "images": [
      "http://lorempixel.com/640/480/city?87325",
      ...
    ],
    "date_start": "2016-04-02T08:09:12.088Z",
    "date_end": "2016-11-30T04:27:59.359Z",
    "stars": 2,
    "rating": 1.811553610023111,
    "description": "Recusandae enim debitis quisquam pariatur. Velit sint provident commodi quia eaque. Sapiente quas explicabo voluptatibus quam et similique ab quo. Earum ut odio impedit voluptas at qui eos nulla. Ipsa dolorem in reiciendis officiis et atque sit similique."
  },
  ...
]
```

#### Errors
```sh
curl https://pirate-modelboat.herokuapp.com/api/hotels?force_error=1
```
```json
{
  "error": "Something failed!"
}
```

### Reviews [`api/reviews`]

#### Params

- `hotel_id`

#### Example
```sh
curl https://pirate-modelboat.herokuapp.com/api/reviews?hotel_id=13ef1108-7f18-40c7-ac0f-0e743b015755
```
```json
[
  {
    "name": "Nigel Kub",
    "comment": "Rerum est suscipit adipisci odio hic.",
    "positive": false,
    "hotel_id": "13ef1108-7f18-40c7-ac0f-0e743b015755"
  },
  ...
]
```

#### Errors
```sh
curl https://pirate-modelboat.herokuapp.com/api/reviews
```
```json
{
  "error": "No hotel id specified"
}
```
