import { Button } from "@cred/neopop-web/lib/components";
import { Link } from "react-router-dom";

const Card = ({ title, desc, image, routing }) => {
  return (
    <div className="text-black w-76 flex flex-col justify-around h-full m-4 p-2 bg-white">
      <img className="w-72 ml-10" src={image} alt="poster"/>
      <h4 className="my-2 text-3xl font-bold">{title}</h4>
      <p className="pb-3 text-2xls">{desc}</p>
      <div className="bg-black py-2 px-4">
        <Link to={routing}>
          <Button
            className=""
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
            onClick={() => {
              console.log("I'm clicked");
            }}
          >
            View More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
