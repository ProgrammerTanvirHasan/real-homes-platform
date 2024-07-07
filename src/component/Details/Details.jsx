import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const information = useLoaderData()
    const {id} =useParams()
    const currentId=parseInt(id)
    const info=information.find(info=> info.id===currentId)


    return (
        <div >
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={info.image}
      className="w-96 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-white">{info.estate_title}</h1>
      <p className="py-6 text-white font-bold">
       {info.description}
      </p>
    <p className="text-center text-white text-2xl">Facilities</p>
    <div className=" text-white ml-8">
        <p>{info.facilities.map((facility,index)=> <p key={index}>{facility}</p>

         )}</p>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;