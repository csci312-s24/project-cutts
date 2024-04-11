/* eslint-disable camelcase */
import { Model } from "objection";
import BaseModel from "./BaseModel";

export default class Article extends BaseModel {
  // Table name is the only required property.
  static get tableName() {
    return "Article";
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
  };
}