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
        "driverNameInput",
        "destinationInput",
        "departureDateInput",
        "departureTimeInput",
        "seatInput",
      ],

      properties: {
        id: { type: "integer" },
        driverNameInput: { type: "string" }, // this should be the user ID of the planner
        destinationInput: { type: "string" },
        departureDateInput: { type: "string", format: "date-time" },
        departureTimeInput: { type: "string", format: "date-time" },
        departureLocationInput: { type: "string" },
        seatInput: {
          type: "integer",
          minimum: 0,
          maximum: 12,
        },
        messageInput: { type: "string" },
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
