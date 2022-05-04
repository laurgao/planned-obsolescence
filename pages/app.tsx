import {GetServerSideProps} from "next";
import getThisUser from "../utils/getThisUser";
import {ssrRedirect} from "next-response-helpers";
import cleanForJSON from "../utils/cleanForJSON";

export default function App({}: {}) {
    return (
        <>
            <p>signed in</p>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const thisUser = await getThisUser(context);

        if (!thisUser) return ssrRedirect("/auth/signin");

        return {props: cleanForJSON({thisUser})};
    }
    catch (e) {
        console.log(e);
        return ssrRedirect("/");
    }
};