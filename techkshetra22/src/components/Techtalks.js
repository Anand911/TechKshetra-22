import EventCard from "./EventCard"
import Data from "../data/techtalks.json"
import Slider from "./Slider";

const Techtalks = () => {
  const words = ["TECHTALKS", "*", "TECHTALKS","*", "TECHTALKS", "*", "TECHTALKS", "*", "TECHTALKS", "*", "TECHTALKS", "*",];
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
            />
          );
        })}
      </div>
      <Slider words={words}/>
    </div>
  );
};

export default Techtalks;
