import Slider from "./Slider";
import RegisteredEvents from "./RegisteredEvents";
import { Button } from "@cred/neopop-web/lib/components";
import { Link } from "react-router-dom";
import { auth } from "../utilities/init-firebase"

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
                    src={auth.currentUser.photoURL}
                    alt="profile"
                />
                <div>
                    <h4 className="text-3xl">{auth.currentUser.displayName}</h4>
                    <p>{auth.currentUser.email}</p>
                </div>
            </div>
            <Link to="/"><Button
                variant="primary"
                kind="elevated"
                size="big"
                colorMode="light"
                onClick={() => auth.signOut()}
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
