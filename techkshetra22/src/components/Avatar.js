import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Link } from "react-router-dom";
import { Button } from "@cred/neopop-web/lib/components";

const Avatar = () => {
    const [photoURL, setPhotoURL] = useState("");

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            setPhotoURL(firebase.auth().currentUser.photoURL);
        }
    })

    useEffect(() => {
        const resetDP = firebase.auth().onAuthStateChanged(user => {
          setPhotoURL("");
        });
        return () => resetDP();
    }, []);

    if(photoURL !== "")
        return (
            <div>
                <Link to="/dashboard">
                    <img
                        className="h-12 rounded-full mx-8 md:mx-1 md:mr-4 smm:h-8 smm:ml-4 sm:mr-2"
                        src={photoURL}
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
