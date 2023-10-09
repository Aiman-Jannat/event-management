
import Marquee from "react-fast-marquee";

const ShowSuccess = ({show}) => {
    const {name, image, date} = show;
    return (
        
          <div>
            
            <div className="card ms-10  bg-blue-50 flex flex-col shadow-xl">
              <div className="flex-grow">
  <figure className="h-48  w-full">
    <img src={image} alt="Shoes" className="rounded-md h-full w-full" />
  </figure>
  <div className="card-body items-center text-left">
    <h2 className="text-2xl text-right font-bold text-blue-900 ">{name}</h2>
    
    <p className="text-purple-800 text-1xl font-bold">Date: {date}</p>
    </div>
    </div>
    
  </div>
  
</div>

            
       
    );
};


export default ShowSuccess;