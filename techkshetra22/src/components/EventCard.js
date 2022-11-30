import React from 'react'
import Purplegoo from '../assets/profile.png'
import { Button } from '@cred/neopop-web/lib/components';

export const EventCard = ({title, desc, price}) => {
    return (
        <div class="flex m-10 flex-col justify-center items-center w-full max-w-sm bg-black rounded-lg shadow-md dark:black border-white border-2 h-[30em]">
            <img className="w-[70%] p-8 rounded-[2.5em]" src={Purplegoo} alt="product image" />
            <div class="px-5 pb-5">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="text-justify text-l py-2">{desc}</p>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">₹ {price}</span>
                    <Button
                        variant="primary"
                        kind="elevated"
                        size="big"
                        colorMode="light"
                        onClick={() => {
                            console.log("I'm clicked");
                        }}
                    >
                        Register
                    </Button>
                </div>
            </div>
        </div>

    )
}
export default EventCard;