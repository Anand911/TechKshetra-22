
const RegisteredEvents = ( {category, name} ) => {
	return (
		<div className="flex justify-between items-center bg-white text-black font-bold border-gray-600 my-3 p-2 rounded-md">
			<h4>{name}</h4>
			<div>
				<h5 className="w-32 bg-black text-white text-center uppercase font-normal p-3 rounded-md">{category}</h5>
			</div>
		</div>
	);
};

export default RegisteredEvents;
