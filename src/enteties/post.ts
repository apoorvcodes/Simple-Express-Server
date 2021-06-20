import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
  @Field(()=>Int)
  @PrimaryKey({type:Number})
  _id!: number;

@Field(()=> Int)
@SerializedPrimaryKey({type:Number})
 id: Number;
 
 @Field(()=> String)
  @Property({type: Number})
  createdAt: Date = new Date();

  @Field(()=> String)
  @Property({type: String})
  Name: String;

  @Field()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

}