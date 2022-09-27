import { Request, Response } from "express";

export default function getAllUsers(request: Request, response: Response) {
    const users = [
        {
            name: 'Adam',
            age: 27
        },
        {
            name: 'Mawari',
            age: 22
        }
    ];

    response.statusCode = 200;
    response.send({ users });
}