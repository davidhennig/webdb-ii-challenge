exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .text("VIN", 17)
      .unique()
      .notNullable();
    tbl.text("Make").notNullable();
    tbl.text("Model");
    tbl.integer("Mileage").notNullable();
    tbl.text("Transmission");
    tbl.text("Status");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
