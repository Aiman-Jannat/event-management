import { Navigate, useNavigate } from "react-router-dom";


const ShowServices = ({show}) => {
    const {name, image, price, short_description,id} = show;
    const navigate = useNavigate();
    const handleDetails = () =>{

      navigate(`/home/${id}`);
  }
    return (
        
          <div>
            <div className="card  bg-blue-50 flex flex-col shadow-xl">
              <div className="flex-grow">
  <figure className="h-48  w-full">
    <img src={image} alt="Shoes" className="rounded-md h-full w-full" />
  </figure>
  <div className="card-body items-center text-left">
    <h2 className="text-2xl text-right font-bold text-blue-900 ">{name}</h2>
    <p className="mx-auto h-full">{short_description}</p>
    <p className="text-purple-800 text-1xl font-bold">Price: {price}$</p>
    </div>
    </div>
    <div className="card-actions flex justify-center pb-5">
      <button onClick={handleDetails} className="btn btn-success bg-red-500 border-none px-7 py-1 font-bold text-white">Explore Now</button>
    </div>
  </div>
</div>

            
       
    );
};

export default ShowServices;