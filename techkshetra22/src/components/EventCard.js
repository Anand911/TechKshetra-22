import React3D from "../assets/google.png";
import { Button } from '@cred/neopop-web/lib/components';
import { app } from './Login';
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const db = getFirestore(app)

const write = async ( UID, id, price ) => {
	try {
		const docRef = await setDoc(doc(db, "Registration", UID + "/" + id + "/Payment"), {
			amount : price,
			status : "paid",
			timestamp : Date.now(),
			transactionID : ""
		});
		console.log("Collection written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding Collection: ", e);
	}

	try {
		const docRef = await setDoc(doc(db, "Registration", UID), {
			[id] : true
		}, {merge : true});
		console.log("Registration list item appended with ID: ", docRef.id);
	} catch (e) {
		console.error("Error appending list item: ", e);
	}

	window.location.reload();
}

const EventCard = ({ id, title, desc, price, status }) => {
  const [UID, setUID] = useState("");

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
        setUID(firebase.auth().currentUser.uid);
    }
  })

  return (
    <div className="bg-white w-72 h-[23em] flex flex-col items-center rounded-[0.2em] my-16 mx-10">
      <div className="bg-black w-[95%] h-[10em] flex items-center justify-center rounded-[0.2em] my-2">
        <img
          className=" object-cover rounded-md relative bottom-[30%]"
          src={React3D}
          alt="card"
        />
      </div>
      <h3 className="text-black text-2xl font-bold">{title}</h3>
      <p className="text-black text-justify w-[95%] text-sm my-2 pb-2">{desc}</p>
      <div className="flex justify-between items-baseline w-full px-2">
        <h3 className="text-black text-2xl font-extrabold">₹{price}</h3>
        <div className="mb-4">
                <Button
                    variant="primary"
                    kind="elevated"
                    size="medium"
                    colorMode="dark"
                    onClick={() => write(UID, id, price)}
                    disabled = {status === "Registered"}
                >
                {status}
            </Button>
        </div>
      </div>
    </div>
  );
};
export default EventCard;