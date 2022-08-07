const Model = require("../objection");
const Weight = require("./weightModel");

class Clinician extends Model {
  static tableName = "clinicians";

  static relationMappings = {
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: Weight,
      join: { from: "weights.clinician_id", to: "clinician_id" },
    },
  };
}

module.exports = Clinician;
