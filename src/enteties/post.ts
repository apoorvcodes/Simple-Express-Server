import { Entity, PrimaryKey, Property } from "@mikro-orm/core";


@Entity()
export class Post {

  @PrimaryKey()
  id!: number;

  @Property()
  createdAt: Date = new Date();


  @Property()
  Name: String;

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

}