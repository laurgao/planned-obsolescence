import {getSession} from "next-auth/react";
import {UserModel} from "../models/user";
import {GetServerSidePropsContext} from "next";
import dbConnect from "./dbConnect";

export default async function getThisUser(context: GetServerSidePropsContext) {
    const session = await getSession(context);

    if (session) {
        await dbConnect();

        return UserModel.findOne({email: session.user.email});
    }

    return null;
}