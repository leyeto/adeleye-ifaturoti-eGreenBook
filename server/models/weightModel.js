const Model = require("../objection");

class Weight extends Model {
  static tableName = "weights";

  static get relationMappings() {
    const Clinician = require("./clinicianModel");

    return {
      weights: {
        relation: Model.HasOneRelation,
        modelClass: Clinician,
        join: {
          from: "badge_number",
          to: "clinican.badge_number",
        },
      },
    };
  }
}

module.exports = Weight;
