import {GetServerSideProps} from "next";
import getThisUser from "../../utils/getThisUser";
import {ssrRedirect} from "next-response-helpers";
import SignInButton from "../../components/SignInButton";
import {getSession} from "next-auth/react";

export default function SignIn({}: {}) {
    return (
        <>
            <SignInButton/>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const session = await getSession(context);

        if (!session) return {props: {}};

        const thisUser = await getThisUser(context);

        if (!thisUser) return ssrRedirect("/auth/newaccount");

        return ssrRedirect("/app");
    }
    catch (e) {
        console.log(e);
        return ssrRedirect("/");
    }
};