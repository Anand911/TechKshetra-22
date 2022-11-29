import Astronaut from "../assets/astro.png"
import Techtalk from "../assets/tech-talks-person.png"
import Drums from "../assets/drums.png"
import Bandslam from "../assets/band-label.png"
import Card from "./Card";


const Landing = () => {
    return (
        <div>
            <h2 className="py-16 text-center uppercase font-semibold text-8xl" >Biggest <span className="mx-2 px-2 rounded-sm underline bg-white text-black">Techfest</span>  in Kochi!</h2>
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
            <div className="flex justify-between w-full px-40 py-20">
                <Card title="Workshops" desc="lorem epsum dolor sit amet" image={Techtalk}/>
                <Card title="Events" desc="lorem epsum dolor sit amet" image={Techtalk}/>
                <Card title="Tech Talks" desc="lorem epsum dolor sit amet" image={Techtalk}/>
            </div>

            <div className="flex justify-center items-center">
                <img className="absolute h-96" src={Drums}/>
                <img className="px-96 py-20" src={Bandslam}/>
            </div>
        </div>
    );
  };
  
  export default Landing;