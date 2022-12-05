import Astronaut from "../assets/astro.png";
import workshop from "../assets/workshops.svg";
import events from "../assets/events.svg";
import Techtalk from "../assets/tech-talks-person-rounded.png";
import Drums from "../assets/drums.svg";
import Bandslam from "../assets/band-label.png";
import Speaker from "../assets/speaker.svg";
import BgVideo from "../assets/purple-lights.mp4";
import Ticket from "../assets/Ticket.svg";
import TicketMob from "../assets/TicketMobile.svg";
import ScrollGif from "../assets/scroll_anim1.gif";
import Card from "./Card";
import React, { useRef } from "react";
import Slider from "./Slider";
import Tilt from "react-parallax-tilt";
import Zoom from "react-reveal/Zoom";
import BackToTop from "react-back-to-top-button";
import { AiOutlineArrowUp } from "react-icons/ai";

const Landing = () => {
	const videoRef = useRef();
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
		<div>
			<div>
				<video
				ref={videoRef}
				src={BgVideo}
				autoPlay
				loop
				muted
				className="object-cover h-5/6 -z-40 opacity-20"
				/>
				<div className="absolute w-full pt-24 top-0">
				<div className="h-content m-auto pt-28 w-3/4 smm:pt-10 sm:py-6 md:pt-8">
					<Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} gyroscope={true}>
					<img src={Ticket} alt="Teckshetra Ticket" className="md:hidden" />
					<img
						src={TicketMob}
						alt="Teckshetra Ticket"
						className="hidden mx-auto md:block"
					/>
					</Tilt>
				</div>
				<img
					className="m-auto py-20 w-14 sm:hidden"
					src={ScrollGif}
					alt="scroll wheel"
				/>
				<Slider words={words} />
				</div>
			</div>

			<div className="mt-40 px-20 z-10 smm:mt-96 smm:pt-52 md:px-1 md:pt-96 md:mt-96 lg:mt-80 xl:mt-72">
				<Zoom delay={400}>
				<h2 className="uppercase px-[6%] font-bold text-9xl sm:text-2xl md:flex md:text-center sm:mt-14 sm:mb-8 sm:h-fit md:text-4xl md:h-96 md:items-end md:justify-center lg:text-7xl xl:text-8xl">
					Biggest{" "}
					<span className="inline-block mx-2 px-2 rounded-sm bg-white text-black">
					Techfest
					</span>{" "}
					in Kochi!
				</h2>
				</Zoom>

				<div className="flex mx-80 my-20 smm:w-full md:m-1 sm:my-20 lg:mx-4 xl:mx-20 xll:mx-32">
				<img
					className="animate-[blob_5s_infinite] smm:w-32"
					src={Astronaut}
					alt="Astronaut"
				/>
				<div className="flex flex-col justify-center sm:pr-4">
					<h3 className="my-3 text-3xl font-bold smm:text-lg">About Us</h3>
					<p className="pb-10 text-2xl smm:text-sm text-justify">
							Techkshetra 2022, the biennial technical festival of Rajagiri School of Engineering and Technology,
							 Kakkanad, Kerala is a treasure trove of a wide range of events that bring together students of all fields for a day like no other. A group of tech driven students started a fiesta in the beginning of a new century and called it Techkshetra which translates to "Temple for Technology".
					</p>
				</div>
				</div>

				<div>
				<h3 className="mx-44 text-5xl font-semibold uppercase smm:text-xl md:mx-1 md:text-center sm:text-2xl">
					What's in store for you?
				</h3>
				</div>
				<Zoom>
				<div className="flex justify-between w-full px-32 py-20 smm:px-4 smm:py-1 lg:px-4 lg:flex-wrap lg:justify-center lg:py-6 xll:px-10">
					<Card
					title="Workshops"
						desc="Get first hand experience and learn from quality workshops which fare across a wide area of interests."
					image={workshop}
					routing="/workshop"
					/>
					<Card
					title="Events"
						desc="Unleash your competitive spirit by participating in 30+ competitions and get a chance to win exciting prices."
					image={events}
					routing="/events"
					/>
					<Card
					title="Tech Talks"
					desc="Proficient speakers will guide us to expand our knowledge, so get ready to take notes which will leave an impact for life. "
					image={Techtalk}
					routing="/techtalks"
					/>
				</div>
				</Zoom>

				<div className="flex justify-center items-center">
				<Zoom>
					<img
					className="w-1/3 py-20 smm:w-1/2 md:w-2/3 lg:w-2/5"
					src={Speaker}
					alt="BandSlam"
					/>
				</Zoom>
				<Zoom delay={200}>
					<img
					className="absolute px-96 sm:px-1 md:px-4 xl:px-40 xll:px-64"
					src={Bandslam}
					alt="BandSlam"
					/>
				</Zoom>
				<Zoom delay={400}>
					<img
					className="absolute h-3/4 smm:h-3/5"
					src={Drums}
					alt="BandSlam"
					/>
				</Zoom>
				</div>
			</div>
			<Slider words={words} />
			<BackToTop
				showOnScrollUp
				showAt={100}
				speed={1500}
				easing="easeInOutQuint"
			>
				<AiOutlineArrowUp />
			</BackToTop>
		</div>
	);
};

export default Landing;
