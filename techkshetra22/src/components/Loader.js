import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ipadVideo from "../assets/ipad-college.webm";
import overlay from "../assets/overlay.svg";
import techWhite from "../assets/techkshetra-white.svg"
import techGrad from "../assets/techkshetra-grad.svg"
//Loading component
const Loader=()=>{
    const MainLoader = useRef();
    const load1=useRef();
    const load2 = useRef();
    const load1Video = useRef();
    const load1Overlay = useRef();
    const load3 = useRef();
    //Animations start here
    //Fixed overlay
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(load1Video.current,1.2,{
            delay:0.1,
            scale: 2,
            ease: "power2.Out",
        })
            gsap.from(load1Overlay.current, 1.2, {
                delay: 0.1,
                scale: 2,
                
                ease: "power2.Out",
            })
            gsap.to(load1Overlay.current,1,{
            delay:0.4,
            opacity:0.6,
        })
        gsap.to(load2.current, 1, {
                delay: 0.4,
                opacity: 1,
                ease: "power2.Out"
            })
        gsap.to(load1.current, 1, {
                    delay: 1.4,
                    y:'-150%',
                    display:'none',
                    ease: "power2.Out"
                })
        gsap.to(MainLoader.current, 1, {
                        delay: 1.4,
                        backgroundColor:'black',
                        ease: "power2.Out"
                    })
        gsap.to(load2.current,1,{
            delay:1.8,
            opacity:0,
            ease:"power2.Out"
        })
        gsap.to(load3.current, 1, {
                delay: 1.8,
                opacity: 1,
                ease: "power2.Out"
            })
        gsap.to(MainLoader.current, 1, {
                    delay: 2.5,
                    y: '-150%',
                    display:'none',
                    ease: "power2.Out"
                })
        

        });

        return () => ctx.revert();

    }, [])
    return(
        
        <div ref={MainLoader} className="absolute top-0 flex justify-center h-screen w-screen bg-white overflow-hidden">
            <div ref={load1} className="flex justify-center before:content-[''] befor:absolute before:bg-black before:top-0">
                <video ref={load1Video} src={ipadVideo} autoPlay loop muted></video>
                <img ref={load1Overlay} className="absolute top-0 opacity-0 h-screen" src={overlay}></img>
            </div>
            <div ref={load2} className="absolute top-[25vh] sm:top-[40vh] opacity-0">
                <img className="h-[50vh] sm:h-[20vh]" src={techWhite}></img>
            </div>
            <div ref={load3} className="absolute top-[25vh] sm:top-[40vh] opacity-0">
                <img className="h-[50vh]  sm:h-[20vh]" src={techGrad}></img>
            </div>
        </div>
    );
    
};

//animations
 //
export default Loader;