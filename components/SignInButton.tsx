import Button from "./headless/Button";
import {FaGoogle} from "react-icons/fa";
import {signIn} from "next-auth/client";

export default function SignInButton() {
    return (
        <Button onClick={() => signIn("google")}>
            <div className="flex items-center">
                <FaGoogle/><span className="ml-2">Sign in</span>
            </div>
        </Button>
    );
}