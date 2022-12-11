import { useLocation } from 'react-router-dom';
import QRcode from "../assets/qrcode.png";
import { InputField } from '@cred/neopop-web/lib/components';
import { Button } from '@cred/neopop-web/lib/components';

const DynamicPages = () => {
    const location = useLocation()
    console.log(location.state);
    return (
    <div className="h-screen flex justify-between px-32">
      <div className="text-white pt-32">
         <h3 className="text-4xl font-bold">{location.state.title}</h3>
          <p className="text-xl py-5">{location.state.desc}</p>
          <p className="font-bold text-3xl">₹{location.state.price}</p>
       </div>
       <div className="pt-32">
            <img src={QRcode} className="w-48 mb-5"/>
            <p className="py-2 text-lg font-bold">UPI Transaction ID</p>
            <InputField
                type="text"
                placeholder="Enter UPI Transaction ID"
                id="text_field"
                autoFocus
            />
            {/* <Button
                variant="primary"
                kind="elevated"
                size="medium"
                colorMode="light">
                Primary
            </Button> */}
            <button className="bg-white text-black px-5 py-2 mt-5">Register</button>
       </div>
    </div>
    );
  };
  
  export default DynamicPages;
  