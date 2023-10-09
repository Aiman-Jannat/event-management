import { useEffect, useState } from "react";
import ShowServices from "./ShowServices";


const Services = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(rs=>rs.json())
        .then(data => setService(data));
    },[]);
    //console.log(service);
    return (
        <div className="px-10">
            <h2 className="text-5xl  font-bold text-purple-900 text-center py-14">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                service.map(show => <ShowServices key={show.id} show={show}></ShowServices>)
            }
            </div>
            
        </div>
    );
};

export default Services;