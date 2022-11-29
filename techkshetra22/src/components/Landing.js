import Astronaut from "../assets/astro.png"
import Techtalk from "../assets/tech-talks-person.png"
import Drums from "../assets/drums.png"
import Bandslam from "../assets/band-label.png"
import BgVideo from "../assets/purple-lights.mp4"
import Ticket from "../assets/Ticket.svg"
import ScrollGif from "../assets/scroll_anim1.gif"
import Card from "./Card";
import React, { useRef } from "react";
import Slider from "./Slider"


const Landing = () => {
    const videoRef = useRef();

    return (
        <div>
            <div className="">
                <div className="absolute w-full">
                    <img className="m-auto pt-20 w-3/4" src={Ticket}/>
                    <img className="m-auto py-20 w-14" src={ScrollGif}/>
                    <Slider/>
                </div>
                <video
                    ref={videoRef}
                    src={BgVideo}
                    autoPlay
                    loop
                    muted
                    className="object-cover h-5/6 -z-40 opacity-20"
                />
            </div>

            <div className="px-20 z-10">
                <h2 className="uppercase font-semibold text-9xl" >Biggest <span className="mx-2 px-2 rounded-sm underline bg-white text-black">Techfest</span>  in Kochi!</h2>
                <div className="flex mx-80 my-20">
                    <img src={Astronaut}/>
                    <div className="flex flex-col justify-center">
                        <h3 className="my-3 text-3xl font-bold">About Us</h3>
                        <p className="pb-10 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.</p>
                    </div>
                </div>
                <div>
                    <h3 className="mx-44 text-4xl font-semibold uppercase">What's in store for you?</h3>
                </div>
                <div className="flex justify-between w-full px-32 py-20">
                    <Card title="Workshops" desc="lorem epsum dolor sit amet" image={Techtalk}/>
                    <Card title="Events" desc="lorem epsum dolor sit amet" image={Techtalk}/>
                    <Card title="Tech Talks" desc="lorem epsum dolor sit amet" image={Techtalk}/>
                </div>

                <div className="flex justify-center items-center">
                    <img className="absolute h-96" src={Drums}/>
                    <img className="px-96 py-20" src={Bandslam}/>
                </div>
            </div>
        </div>
    );
  };
  
  export default Landing;