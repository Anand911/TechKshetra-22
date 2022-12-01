import Slider from "./Slider";
import ProfilImage from "../assets/profile.jpg";
import RegisteredEvents from "./RegisteredEvents";
import { Button } from "@cred/neopop-web/lib/components";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
    <div className="w-full mt-24">
      <Slider words={words} />
      <div className="flex flex-col w-fit mx-auto my-10">

        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <img
                    className="h-12 rounded-full mr-8"
                    src={ProfilImage}
                    alt="profile"
                />
                <div>
                    <h4 className="text-3xl">John Doe</h4>
                    <p>johndoe@example.com</p>
                </div>
            </div>
            <Link to="/"><Button
                variant="primary"
                kind="elevated"
                size="big"
                colorMode="light"
                >
                Logout
            </Button></Link>
        </div>

        <div>
            <h4 className="text-4xl font-bold my-10">Registered Events</h4>
            <div>
                <RegisteredEvents />
            </div>
        </div>
      </div>
      <Slider words={words} />
    </div>
  );
};

export default Dashboard;
