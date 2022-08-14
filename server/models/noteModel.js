const Model = require("../objection");

class Note extends Model {
  static tableName = "clinic_notes";

  static get relationMappings() {
    const Clinician = require("./clinicianModel");

    return {
      notes: {
        relation: Model.HasOneRelation,
        modelClass: Clinician,
        join: {
          from: "clinician_id",
          to: "clinician.id",
        },
      },
    };
  }
}

module.exports = Note;
