import EventCard from "./EventCard"
import Data from "../data/events.json"
import Slider from "./Slider";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { app } from './Login';
import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const db = getFirestore(app)

const Events = () => {
	const [UID, setUID] = useState("");
	const [CardStatus, setCardStatus] = useState({});

	useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
			if (user) {
				setUID(firebase.auth().currentUser.uid);
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

  const words = ["EVENTS", "*", "EVENTS","*", "EVENTS", "*", "EVENTS", "*", "EVENTS", "*", "EVENTS", "*",];

  return (
    <div className="pt-24">
      <Slider words={words}/>
      <div className="flex flex-wrap justify-center pt-4">
        {Data.map((i) => {
          return (
            <EventCard
              id={i.id}
              title={i.title}
              desc={i.desc}
              price={i.price}
              status={Object.keys(CardStatus).includes(i.id) ? "Registered" : "Register"}
            />
          );
        })}
      </div>
      <Slider words={words}/>
    </div>
  );
};

export default Events;
