import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = () => {
const [estates,setEstate]=useState([])

    useEffect(()=>{
        fetch('/src/blog.json')
        .then(res => res.json())
        .then(data => setEstate(data))
    },[]);
   
    return (
        <div>
            <h2 className="text-center font-bold text-3xl pb-4 text-white">Estates</h2>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
     {
        estates.map(estate => <Card key={estate.id} estate={estate}></Card>)
     }
   </div>
        </div>
    );
};

export default Cards;