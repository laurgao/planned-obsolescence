import {GetServerSideProps} from "next";
import {getSession} from "next-auth/react";
import getThisUser from "../../utils/getThisUser";
import {ssrRedirect} from "next-response-helpers";
import {UserModel} from "../../models/user";
import short from "short-uuid";

export default function NewAccount({}: {}) {
    return (
        <></>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const session = await getSession(context);

        if (!session) return ssrRedirect("/auth/signin");

        const thisUser = await getThisUser(context);

        if (thisUser) return ssrRedirect("/app");

        await UserModel.create({
            email: session.user.email,
            name: session.user.name,
            image: session.user.image,
            username: session.user.name.split(" ").join("-") + "-" + short.generate(),
        });

        return ssrRedirect("/app");
    }
    catch (e) {
        console.log(e);
        return ssrRedirect("/");
    }
};