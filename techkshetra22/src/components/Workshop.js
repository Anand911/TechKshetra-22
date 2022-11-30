import EventCard from "./EventCard"
import Data from "../data/workshops.json"
import Slider from "./Slider";

const Workshop = () => {
  return (
    <div className="pt-24">
      <Slider />
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
      <Slider />
    </div>
  );
};

export default Workshop;
