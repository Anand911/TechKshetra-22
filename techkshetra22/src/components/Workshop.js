import EventCard from "./EventCard"
import Data from "../data/workshops.json"
import Slider from "./Slider";

const Workshop = () => {
  const words = ["WORKSHOPS", "*", "WORKSHOPS","*", "WORKSHOPS", "*", "WORKSHOPS", "*", "WORKSHOPS", "*", "WORKSHOPS", "*",];
  return (
    <div className="pt-24">
      <Slider words={words}/>
      <div className="flex flex-wrap justify-center pt-4">
        {Data.map((i) => {
          return (
            <EventCard
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

export default Workshop;
