import {GetServerSideProps} from "next";
import {getSession, signIn, useSession} from "next-auth/client";
import axios from "axios";
import {useRouter} from "next/router";
import {useState} from "react";
import SEO from "../../components/SEO";
import Skeleton from "react-loading-skeleton";
import SpinnerButton from "../../components/SpinnerButton";
import {UserModel} from "../../models/User";
import dbConnect from "../../utils/dbConnect";

export default function NewAccount({}: {}) {
    const router = useRouter();
    const [session, loading] = useSession();
    const [username, setUsername] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>(null);

    function onSubmit() {
        setIsLoading(true);

        axios.post("/api/auth/account", {
            username: username,
        }).then(res => {
            if (res.data.error) {
                setError(res.data.error);
                setIsLoading(false);
            } else {
                console.log("redirecting...");
                signIn("google").then(() => router.push("/app")).catch(e => console.log(e));
            }
        }).catch(e => {
            setIsLoading(false);
            setError("An unknown error occurred.");
            console.log(e);
        });
    }

    return (
        <>
            <SEO title="New account"/>
            <h1>Create new account</h1>
            {loading ? (
                <Skeleton count={2}/>
            ) : (
                <div className="flex items-center">
                    <img
                        src={session.user.image}
                        alt={`Profile picture of ${session.user.name}`}
                        className="rounded-full h-12 h-12 mr-4"
                    />
                    <div>
                        <p>{session.user.name}</p>
                        <p>{session.user.email}</p>
                    </div>
                </div>
            )}
            <h2>Choose a username</h2>
            <div className="flex items-center">
                <p className="opacity-50">your-domain.com/@</p>
                <input
                    type="text"
                    value={username}
                    onChange={e => {
                        setUsername(e.target.value);
                        if (e.target.value !== encodeURIComponent(e.target.value)) {
                            setError("URLs cannot contain spaces or special characters.");
                        }
                        setError(null);
                    }}
                />
            </div>
            {error && (
                <p className="text-red-500">{error}</p>
            )}
            <SpinnerButton
                isLoading={isLoading}
                onClick={onSubmit}
                disabled={loading || username !== encodeURIComponent(username) || username.length === 0}
            >
                Let's get started!
            </SpinnerButton>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (!session) return {redirect: {permanent: false, destination: "/auth/signin"}};

    try {
        await dbConnect();
        const thisUser = await UserModel.findOne({email: session.user.email});
        return thisUser ? {redirect: {permanent: false, destination: "/app"}} : {props: {}};
    } catch (e) {
        console.log(e);
        return {notFound: true};
    }
};