/* eslint-disable camelcase */
import BaseModel from "./BaseModel";

export default class User extends BaseModel {
  // Table name is the only required property.
  static get tableName() {
    return "User";
  }

  // Objection.js assumes primary key is `id` by default

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email"],

      properties: {
        id: { type: "integer" },
        name: { type: "string" },
        email: { type: "string" },
        num: { type: "integer" },
        year: { type: "integer" },
      },
    };
  }
}
