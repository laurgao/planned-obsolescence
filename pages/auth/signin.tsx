import {GetServerSideProps} from "next";
import {getSession, signOut, useSession} from "next-auth/client";
import {useEffect} from "react";
import Link from "next/link";
import SEO from "../../components/SEO";
import SignInButton from "../../components/SignInButton";
import {UserModel} from "../../models/User";
import dbConnect from "../../utils/dbConnect";

export default function SignIn({notAllowed}: { notAllowed: boolean }) {
    const [session, loading] = useSession();

    useEffect(() => {
        if (session && notAllowed) signOut();
    }, [loading]);

    return (
        <>
            <SEO title="Sign in"/>
            <h1>Sign in</h1>
            {notAllowed && (
                <span>No account found for the given email. <Link href="/"><a>Sign up for the waitlist</a></Link> to get early access</span>
            )}
            <p>If you already have a YourApp account, click below to sign in.</p>
            <SignInButton/>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (!session) return {props: {}};

    try {
        await dbConnect();
        const thisUser = await UserModel.findOne({email: session.user.email});
        return thisUser ? {redirect: {permanent: false, destination: "/app"}} : {props: {notAllowed: true}};
    } catch (e) {
        console.log(e);
        return {notFound: true};
    }
};