import { Request, Response } from "express";
import { User } from "../schema/user.schema";

interface Context {
  req: Request;
  res: Response;
  user: User | null;
}

export default Context;
