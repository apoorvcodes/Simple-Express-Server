import { Entity, PrimaryKey, SerializedPrimaryKey, Property } from "@mikro-orm/core";
import { ObjectId } from "mongoose";

@Entity()
export class UserEnt {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  name!: string;

  @Property()
  email!: string;

  @Property()
  password!: string;

}