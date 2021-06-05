import {useSession} from "next-auth/client";
import Button from "./Button";
import Container from "./headless/Container";
import {useRouter} from "next/router";

export default function Navbar() {
    const [session, loading] = useSession();
    const router = useRouter();

    return (
        <div className="w-full sticky top-0">
            <Container className="flex items-center my-4" width="full">
                <p>YourApp</p>
                <div className="ml-auto">
                    {(session && router.route !== "/") ? (
                        <img
                            src={session.user.image}
                            alt={`Profile picture of ${session.user.name}`}
                            className="w-8 h-8 rounded-full"
                        />
                    ) : (
                        <Button href="/auth/signin">Sign in</Button>
                    )}
                </div>
            </Container>
        </div>
    );
}