import { useLoaderData, useParams } from "react-router-dom";


const ShowDetails = () => {
    const services = useLoaderData();
    const {id} = useParams();
    const specific = services.find(data => id==data.id);

    return (
        <div className="px-10 py-8 ">
            <img src={specific.image} className="w-full min-96" alt="" />
            <p className="text-5xl text-center text-purple-900 pt-14 font-extrabold">{specific.name}</p>
            <p className=" pt-5 text-4xl text-red-700 text-center font-bold">Price: {specific.price}$</p>
            <p className="text-3xl text-sky-900 font-extrabold pt-8 ">Why our This Event is Special: <span className="text-black text-sm">{specific.details_description}</span></p>
        </div>
    );
};

export default ShowDetails;