import { Resolver, Query } from "type-graphql";

@Resolver()
export class Hello{
@Query(() => String)
hello() {
return 'hello'
}
}

