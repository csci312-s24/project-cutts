/* eslint-disable camelcase */
import { Model } from "objection";
import BaseModel from "./BaseModel";

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
        time: { type: "timestamp", default: "now" },
        plannedTripId: { type: "integer" },
      },
    };
  }

  static relationMappings = {
    relatedUser: {
      relation: Model.BelongsToOneRelation,
      modelClass: SeatRequest, // eslint-disable-line no-use-before-define
      join: {
        from: "SeatRequest.requester",
        to: "User.id",
      },
    },
    relatedTrip: {
      relation: Model.BelongsToOneRelation,
      modelClass: SeatRequest, // eslint-disable-line no-use-before-define
      join: {
        from: "SeatRequest.plannedTripId",
        to: "PlannedTrip.id",
      },
    },
  };
}
