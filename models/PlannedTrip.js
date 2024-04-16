import { Model } from "objection";
import BaseModel from "./BaseModel";

export default class PlannedTrip extends BaseModel {
  // Table name is the only required property.
  static get tableName() {
    return "PlannedTrip";
  }

  // Objection.js assumes primary key is `id` by default

  static get jsonSchema() {
    return {
      type: "object",
      required: ["planner, dest, date, timeFrame, seatNumber"],

      properties: {
        id: { type: "integer" },
        planner: { type: "integer" }, // this should be the user ID of the planner
        dest: { type: "string" },
        date: { type: "string", format: "date-time" },
        timeFrame: { type: "string", enum: ["morning", "afternoon", "night"] },
        seatNumber: {
          type: "integer",
          minimum: 0,
          maximum: 12,
        },
        message: { type: "string" },
      },
    };
  }

  static relationMappings = {
    relatedUser: {
      relation: Model.BelongsToOneRelation,
      modelClass: PlannedTrip, // eslint-disable-line no-use-before-define
      join: {
        from: "PlannedTrip.planner", // will this work ?
        to: "User.id",
      },
    },
    relatedSeatRequest: {
      relation: Model.HasManyRelation,
      modelClass: PlannedTrip, // eslint-disable-line no-use-before-define
      join: {
        from: "PlannedTrip.id",
        to: "SeatRequest.plannedTripId",
      },
    },
  };
}
