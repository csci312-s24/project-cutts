import { Model } from "objection";
import BaseModel from "./BaseModel";

export default class ProposedTrip extends BaseModel {
  // Table name is the only required property.
  static get tableName() {
    return "ProposedTrip";
  }

  // Objection.js assumes primary key is `id` by default

  static get jsonSchema() {
    return {
      type: "object",
      required: ["dest, date, timeFrame, proposer"],

      properties: {
        id: { type: "integer" },
        proposer: { type: "integer" }, // this should be the user ID of the proposer
        dest: { type: "string" },
        date: { type: "string", format: "date-time" },
        timeFrame: { type: "string", enum: ["morning", "afternoon", "night"] },
        message: { type: "string" },
      },
    };
  }

  static relationMappings = {
    related: {
      relation: Model.BelongsToOneRelation,
      modelClass: ProposedTrip, // eslint-disable-line no-use-before-define
      join: {
        from: "ProposedTrip.proposer", // will this work ?
        to: "User.id",
      },
    },
  };
}
