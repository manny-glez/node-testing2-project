
exports.up = function(knex) {
  return knex.schema
    .createTable('cities', table => {
      table.increments('city_id')
      table.text('city').notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('cities')
};
