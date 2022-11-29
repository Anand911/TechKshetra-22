import Astronaut from "../assets/astro.png"
import Techtalk from "../assets/tech-talks-person.png"
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
            <div>
                <Card title="Workshops" desc="lorem epsum dolor sit amet" image={Techtalk}/>
            </div>
        </div>
    );
  };
  
  export default Landing;