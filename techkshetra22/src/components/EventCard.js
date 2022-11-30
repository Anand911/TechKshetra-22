import React from "react";
import React3D from "../assets/google.png";
import { Button } from '@cred/neopop-web/lib/components';

export const Workshops = ({ title, desc, price }) => {
  return (
    <div className="bg-white w-72 h-[23em] flex flex-col items-center rounded-[0.2em] my-16 mx-10">
      <div className="bg-black w-[95%] h-[10em] flex items-center justify-center rounded-[0.2em] my-2">
        <img
          className=" object-cover rounded-md relative bottom-[30%]"
          src={React3D}
          alt="card"
        />
      </div>
      <h3 className="text-black text-2xl font-bold">{title}</h3>
      <p className="text-black text-justify w-[95%] text-sm my-2 pb-2">{desc}</p>
      <div className="flex justify-between items-baseline w-full px-2">
        <h3 className="text-black text-2xl font-extrabold">₹{price}</h3>
        <div className="mb-4">
                <Button
                    variant="primary"
                    kind="elevated"
                    size="medium"
                    colorMode="dark"
                    onClick={() => {
                        console.log("I'm clicked");
                    }}
                >
                Register
            </Button>
        </div>
      </div>
    </div>
  );
};
export default Workshops;