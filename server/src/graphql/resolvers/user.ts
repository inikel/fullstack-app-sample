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
} from "type-graphql";
import { UserLoginInput, UserRegisterInput } from "./inputs/userInputs";
import { graphQLctxType } from "../ctx";
import { COOKIE_NAME } from "../../constants";

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
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async getCurrentUser(@Ctx() { req }: graphQLctxType) {
    return UserService.getCurrentUser(req);
  }

  @Query(() => [User])
  users() {
    return UserService.getAllUsers();
  }

  @Mutation(() => UserResponse)
  createUser(
    @Arg("options") options: UserRegisterInput,
    @Ctx() { req }: graphQLctxType
  ) {
    const { username, email, password } = options;

    return UserService.createUser({ username, email, password, req });
  }

  @Mutation(() => String)
  async deleteUser(@Arg("id") id: number) {
    await UserService.deleteUser(id);

    return "User with id " + id + " was deleted";
  }

  @Mutation(() => UserResponse)
  async loginUser(
    @Arg("options") options: UserLoginInput,
    @Ctx() { req }: graphQLctxType
  ) {
    const { username, email, password } = options;

    return UserService.loginUser({ username, email, password, req });
  }

  @Mutation(() => Boolean)
  logoutUser(@Ctx() { req, res }: graphQLctxType) {
    return new Promise((resolve) =>
      req.session.destroy((err: any) => {
        res.clearCookie(COOKIE_NAME);

        if (err) {
          console.log(err);
          resolve(false);
          return;
        }

        resolve(true);
      })
    );
  }
}
