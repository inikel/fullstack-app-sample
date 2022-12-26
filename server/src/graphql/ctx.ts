import { Request, Response } from "express";
import { Redis } from "ioredis";

export type req = Request & { session: Express.Session }

export type graphQLctxType = {
  req: req;
  redis: Redis;
  res: Response;
};
