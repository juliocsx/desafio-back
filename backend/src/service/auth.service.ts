import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
export interface CustomRequest extends Request {
  token: string | JwtPayload;
}
function authenticateToken(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (token == null) {
      return res.sendStatus(401);
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY as string);
    (req as CustomRequest).token = decoded;
    next();
  } catch (error) {
    console.log(error);
  }
}

export default authenticateToken;
