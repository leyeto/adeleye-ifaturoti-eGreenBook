const Knex = require("knex");
const knex = Knex(require("./knexfile").development);
const { Model } = require("objection");
Model.knex(knex);

module.exports = Model;
