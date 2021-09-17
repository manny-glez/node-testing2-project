exports.seed = function(knex) {
  return knex('cities').truncate()
    .then(function () {
      return knex('jokes').insert([
        {city: "Chicago"},
        {city: "LA"},
        {city: "San Francisco"},
        {city: "New York"},
        {city: "Boston"},
      ])
    })
}