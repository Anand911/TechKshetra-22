import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import QRcode from "../assets/qrcode.png";
import { Button } from '@cred/neopop-web/lib/components';
import { app } from './Login';
import { doc, setDoc, getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { getDownloadURL } from "firebase/storage";

const storage = firebase.storage();
const db = getFirestore(app)

// Function to write registration to Firestore
const write = async ( UID, EventID, TransID ) => {

	// Write item as collection with payment data

	// try {
	// 	const docRef = await setDoc(doc(db, "Registration", UID + "/" + EventID + "/payment"), {
	// 		timestamp : Date.now(),
	// 		transactionID : TransID
	// 	});
	// 	console.log("Collection written with ID: ", docRef.id);
	// } catch (e) {
	// 	console.error("Error adding Collection: ", e);
	// }

	// Write item as document
	try {
		const docRef = await setDoc(doc(db, "Registration", UID), {
			[EventID] : TransID
		}, {merge : true});
		console.log("Registration list item appended with ID: ", docRef.id);
	} catch (e) {
		console.error("Error appending list item: ", e);
	}

	// Reload on register to update button state
	//window.location.reload();
}

const EventPage = () => {
    const location = useLocation()

	const [UID, setUID] = useState('');
	const [TransID, setTransID] = useState('');
    const [file, setFile] = useState('')
    const [url, setURL] = useState('https://firebasestorage.googleapis.com/v0/b/techkshetra-7fdd.appspot.com/o/screenshot.png?alt=media&token=740ca4a9-82a6-4f49-b64e-9e31487f625a')

	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			// Update state variable
			setUID(firebase.auth().currentUser.uid);
		}
	})

	const handleTransIDChange = (e) => {
		if (e.target.value)
			setTransID(e.target.value);
	}

	const handleFileChange = (e) => {
		if (e.target.files[0])
			setFile(e.target.files[0]);
	}

	const handleUpload = async (e) => {
		e.preventDefault();
		const path = `/Screenshots/${UID}_${location.state.id}`;
		const ref = storage.ref(path);
		await ref.put(file);
		getDownloadURL(ref).then(( url ) => {
			setURL(url);
			setFile(null);
			write(UID, location.state.id, TransID);
		});
	}

    return (
        <div className="w-4/5 mt-24 mx-auto flex justify-between flex-wrap">

			{/*Description*/}
			<div className="text-white w-4/6 px-10 mt-10">
				<h3 className="text-4xl font-bold">{location.state.title}</h3>
				<p className="text-lg py-4 border-b border-gray-600 mb-4">{location.state.desc}</p>
				<p className='text-xl uppercase mt-4'>Time:</p>
				<p className="text-lg p-2 rounded-sm my-2 border border-gray-600">{location.state.time}</p>
				<p className='text-xl uppercase mt-4'>Venue:</p>
				<p className="text-lg p-2 rounded-sm my-2 border border-gray-600">{location.state.venue}</p>
				<p className="text-xl py-5">{location.state.long_desc}</p>
				<p className='text-xl uppercase mt-4'>Contact:</p>
				<p className="text-lg p-2 rounded-sm my-2 border border-gray-600">{location.state.contact}</p>
			</div>

			{/*Payment*/}
			<div className="w-2/6 p-4 bg-white text-black">
				<h3 className='pb-4 text-3xl font-bold border-b border-gray-600'>Register</h3>
				<h4 className='text-2xl bg-black rounded-sm text-white font-bold p-2 my-4'>₹{location.state.price}</h4>
				<p className='my-4 pb-4 text-justify border-b border-gray-600'>Pay the above mentioned amount using UPI and upload the receipt screenshot here. Our team will verify the payment. The 'Register' button will turn to 'Registered' if it is approved</p>
				<img src={QRcode} className="w-3/4 mb-5 mx-auto" alt='QRCode'/>
				<form onSubmit={handleUpload}>
					<div className='mt-4 pt-4 border-t border-gray-600'>
						<label for='trans-id'>UPI Transaction ID</label>
						<input id='trans-id' type='text' onChange={handleTransIDChange} className='w-full py-2 px-4 my-4 border border-gray-600'/>
					</div>
					<div className='mb-4 pb-4 border-b border-gray-600'>
						<label for='files' className='w-full'>Upload Receipt Screenshot</label>
						<input id='files' type='file' onChange={handleFileChange} className='block cursor-pointer w-full file:w-1/2 my-4 file:py-2 file:px-4 file:border file:border-solid file:border-gray-600 file:bg-white'/>
						<img src={url} className="w-full" alt="screenshot" />
					</div>
					<div>
						<Button
							variant="primary"
							kind="elevated"
							size="big"
							colorMode="dark">
							Register
						</Button>
					</div>
				</form>
			</div>
        </div>
    );
  };
  
  export default EventPage;
  