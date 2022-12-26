import argon2 from "argon2"
import orm from "../orm"
import { User } from "../typeorm/entities/User"
import { req } from "src/graphql/ctx";

type $fixMe = any
const USER_REPOSITORY = orm.getRepository(User)

export interface ICreateUserInput {
  username?: string,
  password: string,
  email: string,
  req: req
}

export interface ILoginUserInput {
  username?: string,
  email?: string,
  password: string,
  req: req
}

export const UserService = {
  findMe: async (req: req) => {

    console.log(req.session)
    console.log('req user id: ' + req.session.userId)
    if (!req.session.userId) {
      return null
    }

    const user = await USER_REPOSITORY.findOne({
      where: {
        id: req.session.userId
      }
    })

    return user
  },
  getAllUsers: async () => {
    return await orm.manager.find(User)
  },
  createUser: async ({ username, email, password, req }: ICreateUserInput) => {
    const createdUser = new User()
    const hashedPassword = await argon2.hash(password)

    createdUser.username = username
    createdUser.email = email
    createdUser.password = hashedPassword

    try {
      await USER_REPOSITORY.save(createdUser)
    } catch (e) {
      if (e.code === '23505') {
        return {
          errors: [
            {
              field: "username",
              message: "username has already taken"
            }
          ]
        }
      }
    }

    req.session.userId = createdUser.id

    return {
      user: createdUser
    }
  },
  deleteUser: (id: number) => USER_REPOSITORY.delete({ id }),
  loginUser: async ({
    username, 
    email, 
    password,
    req
  }: ILoginUserInput) => {

    const user = await USER_REPOSITORY.findOne({
      where: {
        username,
        email
      }
    })
    
    if (!user) {
      return {
        errors: [{
          field: 'username',
          message: 'could not find user'
        }]
      }
    }

    const isPasswordValid = await argon2.verify(user.password, password)

    if (!isPasswordValid) {
      return {
        errors: [{
          field: 'password',
          message: 'incorrect password'
        }]
      }
    }

    req.session.userId = user.id

   return {
    user
   }
  }
}