import EventCard from "./EventCard"
import Data from "../data/techtalks.json"
import Slider from "./Slider";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { app } from './Login';
import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const db = getFirestore(app)

const Techtalks = () => {
    // Current user state variables
	const [UID, setUID] = useState("");
	const [CardStatus, setCardStatus] = useState({});

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
								status={Object.keys(CardStatus).includes(key) ? "Registered" : "Register"}
							/>
						);
					})}
			</div>
			<Slider words={words}/>
		</div>
	);
};

export default Techtalks;
