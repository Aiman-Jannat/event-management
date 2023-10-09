import { useEffect, useState } from "react";
import ShowSuccess from "./ShowSuccess";
import Marquee from "react-fast-marquee";

const Success = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('successful.json')
        .then(rs=>rs.json())
        .then(data => setService(data));
    },[]);
    return (
        <div className="px-10 ">
            <h2 className="text-5xl  font-bold text-purple-900 text-center py-14">Our Last Five <span className="text-blue-700">Successful</span> Events</h2>
            <Marquee speed={100}>
            <div className="grid grid-cols-2  bg-amber-50 lg:grid-cols-5 ">
            {
                service.map(show => <ShowSuccess key={show.id} show={show}></ShowSuccess>)
            }
           
            </div>
            </Marquee>
            
        </div>
    );
};

export default Success;