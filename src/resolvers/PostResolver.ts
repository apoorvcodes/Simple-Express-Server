import { Post } from "src/enteties/post";
import { MyContext } from "src/types";
import { Ctx, Query, Resolver } from "type-graphql";



@Resolver()

export class PostResolver{
@Query(()=> [Post])
Post(
@Ctx() ctx: MyContext
) {
 return 'hello'
}
}