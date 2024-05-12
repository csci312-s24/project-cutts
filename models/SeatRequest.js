/* eslint-disable camelcase */
import { Model } from "objection";
import BaseModel from "./BaseModel";
import User from "./User";
// eslint-disable-next-line import/no-cycle
import PlannedTrip from "./PlannedTrip";

export default class SeatRequest extends BaseModel {
  // Table name is the only required property.
  static get tableName() {
    return "SeatRequest";
  }

  // Objection.js assumes primary key is `id` by default

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title"],

      properties: {
        id: { type: "integer" },
        requester: { type: "integer" }, // the id of the user who requested
        status: { type: "string", enum: ["approved", "denied", "pending"] },
        time: { type: "timestamp" },
        plannedTripId: { type: "integer" },
      },
    };
  }

  static relationMappings = () => ({
    relatedUser: {
      relation: Model.BelongsToOneRelation,
      modelClass: User, // eslint-disable-line no-use-before-define
      join: {
        from: "SeatRequest.requester",
        to: "User.id",
      },
    },
    relatedTrip: {
      relation: Model.BelongsToOneRelation,
      modelClass: PlannedTrip, // eslint-disable-line no-use-before-define
      join: {
        from: "SeatRequest.plannedTripId",
        to: "PlannedTrip.id",
      },
    },
  });
}
