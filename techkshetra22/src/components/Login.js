import { useEffect } from "react";
import Slider from "./Slider";
import React3D from "../assets/google.png";
import { Button } from "@cred/neopop-web/lib/components";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../utilities/init-firebase";
import { useAuthState } from "react-firebase-hooks/auth";

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

  const [user, loading ] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  return (
    <div className="w-full mt-24">
      <Slider words={words} />
      <div className="flex flex-col justify-center items-center mx-auto w-72 h-96 my-[6%] bg-white text-black rounded-md">
        <img src={React3D} className="h-16" alt="google"/>
        <h3>Login/Signup with Google</h3>
        <Button
          variant="primary"
          kind="elevated"
          size="big"
          colorMode="dark"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </Button>
      </div>
      <Slider words={words} />
    </div>
  );
};

export default Login;
