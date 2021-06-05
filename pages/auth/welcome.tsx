import {GetServerSideProps} from "next";
import {getSession} from "next-auth/client";
import SEO from "../../components/SEO";
import SignInButton from "../../components/SignInButton";
import {UserModel} from "../../models/User";
import dbConnect from "../../utils/dbConnect";

export default function Welcome({}: {}) {
    return (
        <>
            <SEO title="Sign up"/>
            <h1>Welcome to YourApp</h1>
            <p>Click the button below to sign in to or sign up for Postulate with your Google account.</p>
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
        return {redirect: {permanent: false, destination: thisUser ? "/app" : "/auth/newaccount"}};
    } catch (e) {
        console.log(e);
        return {notFound: true};
    }
};