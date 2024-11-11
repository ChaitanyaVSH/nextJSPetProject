import type { NextApiRequest, NextApiResponse } from "next";

interface User {
    name: string,
    age: number
}

const getUser = (req: NextApiRequest, res: NextApiResponse) => {
    res.json([
        {
            name: "user_1",
            age: 25
        },
        {
            name: "user_2",
            age: 20
        }
    ])
};

export default getUser;
