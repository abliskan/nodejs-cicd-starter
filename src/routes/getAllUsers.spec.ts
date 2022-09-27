import { Request, Response } from 'express';
import getAllUsers from './getAllUsers';

describe('Get all users request', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let responseObject = {};

    beforeEach(() => {
        mockRequest = {
        };
        mockResponse = {
            statusCode: 0,
            send: jest.fn().mockImplementation((result) => {
                responseObject = result;
            })
        };
    });

    test('200 - users', async () => {
        const expectedStatusCode = 200;
        const expectedReponse = { 
            users: [
                {
                    name: 'Adam',
                    age: 27
                },
                {
                    name: 'Mawari',
                    age: 22
                }
            ]
        };

        getAllUsers(mockRequest as Request, mockResponse as Response);        

        expect(mockResponse.statusCode).toBe(expectedStatusCode);
        expect(responseObject).toEqual(expectedReponse);
    });
});