import EventCard from "./EventCard";
import Data from "../data/competitions.json";
import Slider from "./Slider";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { app } from "./Login";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Button } from "@cred/neopop-web/lib/components";
import { useNavigate } from "react-router-dom";

const db = getFirestore(app);

const Competitions = () => {
  // Current user state variables
  const [UID, setUID] = useState("");
  const [CardStatus, setCardStatus] = useState({});

  const navigate = useNavigate();

	useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
			if (user) {

                // Set UID state variable
				setUID(firebase.auth().currentUser.uid);

				// Get all registered event IDs from Firestore and store into CardStatus(Object)
				try {
					getDoc(doc(db, "Registration", UID)).then((value) => {
						setCardStatus(value.data());
					});
				} catch (e) {
					console.error("Error retrieving document: ", e);
				}
			}
        });
    }, [UID]);

	const words = ["TECHTALKS", "*", "TECHTALKS","*", "TECHTALKS", "*", "TECHTALKS", "*", "TECHTALKS", "*", "TECHTALKS", "*",];

	return (
		<div className="pt-24">
			<Slider words={words}/>
			<div className="flex flex-wrap justify-center pt-4">
			{// Map each tech talk into an EventCard component
			Object.keys(Data).map((key) => {
				return (
					<EventCard
						id={key}
						title={Data[key].title}
						desc={Data[key].desc}
						price={Data[key].price}
						link={Data[key].link}
						time={Data[key].time}
						venue={Data[key].venue}
						long_desc={Data[key].long_desc}
						contact={Data[key].contact}
						logo_url={Data[key].logo_url}
						// Pass status of card, ie; registered or not
						status={CardStatus && Object.keys(CardStatus).includes(key) ? "Registered" : "Register"}
					/>
					);
				})}
			</div>
			<div className="flex justify-center my-6 mb-12">
				<Button
					variant="primary"
					kind="elevated"
					size="big"
					colorMode="light"
					onClick={() => navigate('/dashboard')}
				>
					Go to Dashboard
				</Button>
			</div>
			<Slider words={words}/>
		</div>
	);
};

export default Competitions;
