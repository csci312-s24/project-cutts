import { Model } from "objection";
import BaseModel from "./BaseModel";
import User from "./User";
// eslint-disable-next-line import/no-cycle
import SeatRequest from "./SeatRequest";

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
        "date",
        "destinationInput",
        "departureTimeInput",
        "departureLocationInput",
        "seatInput",
      ],

      properties: {
        id: { type: "integer" },
        date: { type: "string" },
        driverID: { type: "integer" }, // this should be the user ID of the planner
        destinationInput: { type: "string" },
        departureTimeInput: { type: "string" },
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

  static relationMappings = () => ({
    relatedUser: {
      relation: Model.BelongsToOneRelation,
      modelClass: User, // eslint-disable-line no-use-before-define
      join: {
        from: "PlannedTrip.driverID",
        to: "User.id",
      },
    },
    relatedSeatRequest: {
      relation: Model.HasManyRelation,
      modelClass: SeatRequest, // eslint-disable-line no-use-before-define
      join: {
        from: "PlannedTrip.id",
        to: "SeatRequest.plannedTripId",
      },
    },
  });
}
