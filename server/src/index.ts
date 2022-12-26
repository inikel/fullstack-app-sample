import cors from "cors";
// import "dotenv-safe/config";
import express from "express";
import "reflect-metadata"
import { __prod__ } from "./constants";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import orm from './orm'
import { UserResolver } from "./graphql/resolvers/user";
import Redis  from "ioredis";
import session from "express-session";
import connectRedis from 'connect-redis'

const main = async () => {
  const app = express();

  const RedisStore = await connectRedis(session)
  const redis = new Redis('127.0.0.1:6379')

  app.use(
    session({
      name: 'qid',
      store: new RedisStore({ 
        client: redis,
        disableTouch:  true,        
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        secure: __prod__,
        sameSite: 'lax' // csrf
      },
      saveUninitialized: false,
      secret: "wqeqwea",
      resave: false
    })
  )

  await orm.initialize()
    .then(() => console.log('db was inited'))

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false
    }),
    context: ({ req, res }) => ({
      orm,
      res, 
      req
    })
  })

  apolloServer.applyMiddleware({
    app,
    cors: false
  })

  app.listen(4000, () => console.log('listen on port 4000'))
};

main()
  .catch(e => {
    console.error(e)
  });