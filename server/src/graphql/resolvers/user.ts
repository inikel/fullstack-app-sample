import { UserService } from "../../services/user";
import { User } from "../../typeorm/entities/User";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql"
import { UsernamePasswordInput } from "./inputs/usernamePassword";
import { graphQLctxType } from "../ctx";

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]

  @Field(() => User, {nullable: true})
  user?: User
}

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async findMe(
    @Ctx() { req }: graphQLctxType
  ) {
    return UserService.findMe(req)
  }

  @Query(() => [User])
  users() {
    return UserService.getAllUsers()
  }

  @Mutation(() => UserResponse) 
  createUser(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: graphQLctxType
  ) {
    const { username, email, password } = options
    
    return UserService.createUser({ username, email, password, req })
  }

  @Mutation(() => String)
  async deleteUser(
    @Arg("id") id: number
  ) {
    await UserService.deleteUser(id)

    return 'User with id ' + id + ' was deleted'
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: graphQLctxType
  ) {
    const { username, email, password } = options

    return UserService.loginUser({ username, email, password, req })
  }
} 