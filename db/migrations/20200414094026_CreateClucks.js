
exports.up = function(knex, Promise) {
    return knex.schema.createTable("clucks", table => {
      table.increments("id");
      table.string("image_url")
      table.text("content");
      table.timestamps();
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable("clucks");
  };
  