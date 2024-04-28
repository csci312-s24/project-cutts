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
      required: [
        "driverID",
        "destinationInput",
        "departureTimeInput",
        "departureLocationInput",
        "seatInput",
      ],

      properties: {
        id: { type: "integer" },
        driverID: { type: "integer" }, // this should be the user ID of the planner
        destinationInput: { type: "string" },
        departureTimeInput: { type: "string" },
        departureLocationInput: { type: "string" },
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
        from: "PlannedTrip.driverID", // will this work ?
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
