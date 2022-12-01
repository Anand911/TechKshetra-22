import { Link } from "react-router-dom";
import { Button } from "@cred/neopop-web/lib/components";
import { auth } from "../utilities/init-firebase"

const Avatar = () => {
    if(auth.currentUser)
        return (
            <div>
                <Link to="/dashboard">
                    <img
                        className="h-12 rounded-full mx-8 md:mx-1 md:mr-4 smm:h-8 smm:ml-4 sm:mr-2"
                        src={auth.currentUser.photoURL}
                        alt="profile"
                    />
                </Link>
            </div>
        );
    else
        return (
            <div>
                <Link to="/login">
                    <Button
                        variant="primary"
                        kind="elevated"
                        size="big"
                        colorMode="light"
                        >
                        Login
                    </Button>
                </Link>
            </div>
        )
}

export default Avatar;
