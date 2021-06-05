import {UserModel} from "../../../models/User";
import {NextApiRequest, NextApiResponse} from "next";
import {getSession} from "next-auth/client";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
            const session = await getSession({req});
            if (!session) return res.status(403).send("Unauthed");
            if (session.userId) return res.status(200).json({message: "Account already exists"});

            if (!(req.body.username)) {
                return res.status(400).send("Missing username");
            }

            try {
                await dbConnect();

                await UserModel.create({
                    email: session.user.email,
                    name: session.user.name,
                    image: session.user.image,
                    username: req.body.username,
                });

                return res.status(200).json({message: "Object created"});
            } catch (e) {
                return res.status(500).json({message: e});
            }
        default:
            return res.status(405).send("Invalid method");
    }
}