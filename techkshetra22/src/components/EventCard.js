import React3D from "../assets/google.png";
import { Button } from '@cred/neopop-web/lib/components';
import { app } from './Login';
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Link } from "react-router-dom";

const db = getFirestore(app)

// Function to write registration to Firestore
const write = async ( UID, id, price ) => {

	// Write item as collection with payment data

	// try {
	// 	const docRef = await setDoc(doc(db, "Registration", UID + "/" + id + "/Payment"), {
	// 		amount : price,
	// 		status : "paid",
	// 		timestamp : Date.now(),
	// 		transactionID : ""
	// 	});
	// 	console.log("Collection written with ID: ", docRef.id);
	// } catch (e) {
	// 	console.error("Error adding Collection: ", e);
	// }

	// Write item as document
	try {
		const docRef = await setDoc(doc(db, "Registration", UID), {
			[id] : true
		}, {merge : true});
		console.log("Registration list item appended with ID: ", docRef.id);
	} catch (e) {
		console.error("Error appending list item: ", e);
	}

	// Reload on register to update button state
	window.location.reload();
}

const EventCard = ({ id, title, desc, price, link, time, venue, long_desc, contact, status }) => {

	// State variable for current user's UID
	const [UID, setUID] = useState("");
	const [isLoading, setLoading] = useState(false);

	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			// Update state variable
			setUID(firebase.auth().currentUser.uid);
		}
	})

	return (
		<div className="bg-white w-72 h-[23em] flex flex-col items-center rounded-md my-16 mx-10">
			<div className="bg-black w-[95%] h-[10em] flex items-center justify-center rounded-md my-2">
				<img
				className=" object-cover rounded-md relative bottom-[30%]"
				src={React3D}
				alt="card"
				/>
			</div>
			<div className="w-[93%]">
				<h3 className="text-black text-2xl uppercase font-bold mt-1">{title}</h3>
				<p className="text-black text-justify text-md my-2 pb-2">{desc}</p>
				<div className="flex justify-between items-baseline">
					<h3 className="text-black text-2xl font-extrabold">₹{price}</h3>
					{/* <a className="mb-4"> */}
					<Link to="/workshop/eventpage" state={{title:title, desc:desc, price:price, time:time, venue:venue, long_desc:long_desc, contact:contact}}>
						<Button
							variant="primary"
							kind="elevated"
							size="medium"
							colorMode="dark"
							onClick={() => {
								setLoading(true);
								// write(UID, id, price);
							}}
							// Disable button if item already registered
							disabled = {status === "Registered" || isLoading}
						>
							{status}
						</Button>
					</Link>
					{/* </a> */}
				</div>
			</div>
		</div>
	);
};

export default EventCard;
