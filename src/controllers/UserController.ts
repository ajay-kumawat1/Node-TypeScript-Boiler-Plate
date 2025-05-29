import { NextFunction, Request, Response } from "express";
import { User } from "../models/User";

export default class UserController {
    public static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log("UserController.create() -> Creating a new user");
            
        } catch (error) {
            console.error(`UserController.create() -> Error: ${error}`);
            next(error);
        }
    }

    public static async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log("UserController.getAll() -> Fetching all users");
            
        } catch (error) {
            console.error(`UserController.getAll() -> Error: ${error}`);
            next(error);
        }
    }
}
