import {ssrRedirect} from "next-response-helpers";
import {GetServerSideProps} from "next";
import {getSession, signOut} from "next-auth/react";
import {useEffect} from "react";

export default function SignOut({}: {}) {
    useEffect(() => {
        signOut();
    })

    return (
        <></>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (!session) return ssrRedirect("/");

    return {props: {}};
};