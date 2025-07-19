import { useLocation } from "react-router-dom";
import ShinyText from "./ui/ShinyText";

export default function Navbar(){
    const location = useLocation()
    const getName = ()=>{
        const path=location.pathname.split("/").filter(Boolean).pop();
        // if(!path) return "Home";//for / or root of page
        switch(path){
            case "result":
                return "Result";
            case "home":
                return "Home";
            default:
                return "Home"
        }
        return ""

    }
    return(
         <nav>
             <h1 className='text-xl font-bold h-16 flex items-center px-10 shine text-white bg-gray-900'>
            <ShinyText text={getName()} disabled={false} speed={3} className={''}/>
            {

            }
            </h1>
        </nav>
    )
}