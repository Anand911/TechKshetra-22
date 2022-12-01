import Slider from "./Slider";
import React3D from "../assets/google.png";
import { Button } from "@cred/neopop-web/lib/components";
import { Link } from "react-router-dom";

const Login = () => {
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
      <div className="flex flex-col justify-center items-center mx-auto w-72 h-96 my-[6%] bg-white text-black rounded-md">
        <img src={React3D} className="h-16" alt="google image"/>
        <h3>Signin with Google</h3>
        <Link to="/dashboard"><Button
          variant="primary"
          kind="elevated"
          size="big"
          colorMode="dark"
        >
          Dashboard
        </Button></Link>
      </div>
      <Slider words={words} />
    </div>
  );
};

export default Login;
