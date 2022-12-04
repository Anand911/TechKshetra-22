import { useState, useEffect } from "react";
import Slider from "./Slider";
import RegisteredEvents from "./RegisteredEvents";
import { Button } from "@cred/neopop-web/lib/components";
import { Link } from "react-router-dom";
import Workshops from "../data/workshops.json"
import Events from "../data/events.json"
import Techtalks from "../data/techtalks.json"
import { app } from './Login';
import { getFirestore, getDoc, doc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const db = getFirestore(app)

const Dashboard = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
	const [UID, setUID] = useState("");
	const [CardStatus, setCardStatus] = useState({});

	useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
			if (user) {
                setUID(firebase.auth().currentUser.uid);
                setName(firebase.auth().currentUser.displayName);
                setEmail(firebase.auth().currentUser.email);
                setPhotoURL(firebase.auth().currentUser.photoURL);
				try {
					getDoc(doc(db, "Registration", UID)).then((value) => {
                        // console.log(Workshops)
						setCardStatus(value.data());
					});
				} catch (e) {
					console.error("Error retrieving document: ", e);
				}
                // console.log(email, photoURL, UID, CardStatus);
			}
        });
    }, [UID]);

    const words = [
        "TECHKSHETRA",
        "*",
        "2022",
        "*",
        "WORKSHOPS",
        "*",
        "TECHTALKS",
        "*",
        "FOOD",
        "*",
        "BANDSLAM",
        "*",
    ];

    return (
        <div className="w-full mt-24">
            <Slider words={words} />
            <div className="flex flex-col w-1/2 mx-auto my-10 lg:w-2/3">
                <div className="flex justify-between items-center lg:flex-col">
                    <div className="flex items-center my-10">
                        <img
                            className="h-12 rounded-full mr-8"
                            src={photoURL}
                            alt="profile"
                        />
                        <div>
                            <h4 className="text-3xl">{name}</h4>
                            <p>{email}</p>
                        </div>
                    </div>
                    <Link to="/">
                        <Button
                            variant="primary"
                            kind="elevated"
                            size="big"
                            colorMode="light"
                            onClick={() => firebase.auth().signOut()}
                        >
                        Logout
                        </Button>
                    </Link>
                </div>
                <div>
                    <h4 className="text-4xl font-bold my-10">Registered Events</h4>
                    <div>
                        {Object.keys(CardStatus).length === 0 ? <div className="text-center p-24">Looks like you haven't registered for anything</div> : Object.keys(CardStatus).map((key) => {
                            if(key.charAt(0) === "w") {
                                try {
                                    return <RegisteredEvents category="Workshop" name={Workshops[key]["title"]}/>
                                } catch (e) {
                                    console.log(e);
                                    return "nothing"
                                }
                            } else if(key.charAt(0) === "e") {
                                try {
                                    return <RegisteredEvents category="Event" name={Events[key]["title"]}/>
                                } catch (e) {
                                    console.log(e);
                                    return "nothing"
                                }
                            } else {
                                try {
                                    return <RegisteredEvents category="Techtalk" name={Techtalks[key]["title"]}/>
                                } catch (e) {
                                    console.log(e);
                                    return "nothing"
                                }
                            }
                        })}
                    </div>
                </div>
            </div>
            <Slider words={words} />
        </div>
    );
};

export default Dashboard;
