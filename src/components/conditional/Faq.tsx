import Question from "./Question";
import { useState } from "react";

export default function Faq(){
    const [active, setActive] = useState<number>(0)

    function toggle(index:number){
        if(index === active){
            setActive(-1)
        }else{
            setActive(index)
        }
    }

    return (
        <div className="flex flex-col gap-2 w[90%] md:w-3/4">
            <Question 
            index={0}
            open={active === 0}
            question="Who discovered Brazil" response="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" 
            toggle={toggle}
            />
            <Question 
            index={1}
            open={active === 1}
            question="What is typescript" response="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" 
            toggle={toggle}
            />
            <Question 
            index={2}
            open={active === 2}
            question="Is React a framework?" response="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" 
            toggle={toggle}
            />
            <Question 
            index={3}
            open={active === 3}
            question="What are the main features of NextJS" response="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" 
            toggle={toggle}
            />
        </div>
    )
}