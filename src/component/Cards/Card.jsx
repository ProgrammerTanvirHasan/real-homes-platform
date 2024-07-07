import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Card = ({estate}) => {

const {id,segment_name,status,location,area_sq_ft,price,image}=estate;

    return (
        <div className="card card-compact bg-slate-950 w-96 h-96 shadow-xl text-white">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex">
          <FaHome className="h-8 w-8 "></FaHome>
          <h2 className="card-title text-2xl ml-2">{segment_name}</h2>
          </div>
          <div className="flex ">
            <p > <span className="font-bold">For:</span> {status}</p>
            <p> <span className="font-bold">price:</span> {price}</p>
          </div>
           <div className="flex justify-between">
            
              <div className="flex">
               <FaLocationDot className="w-4 h-4"></FaLocationDot> 
              <p>{location}</p> 
              </div>
           
            <div>
            <p className="font-bold text-violet-500"> {area_sq_ft} <span>square ft</span> </p>
            </div>
           </div>
         <Link to={`/details/${id}`}>
        <button  className="w-full bg-lime-700 rounded-full p-2">View property</button>
         </Link>
        </div>
      </div>
    );
};

export default Card;