import EventCard from "./EventCard"
import Data from "../data/workshops.json"

const Workshop = () => {
  return (
    <div className="flex flex-wrap justify-center pt-28">
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
  );
};

export default Workshop;
