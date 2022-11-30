import EventCard from "./EventCard"
import Data from "../data/techtalks.json"
import Slider from "./Slider";

const Techtalks = () => {
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
    </div>
  );
};

export default Techtalks;
