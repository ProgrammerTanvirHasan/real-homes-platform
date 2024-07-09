
import { Helmet } from "react-helmet-async";
import Cards from "../Cards/Cards";
import Comments from "../comments/Comments";
import Slider from "../slider/Slider";






const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Residential state || Home</title>
            </Helmet>
          <Slider></Slider>
           <Cards></Cards>
           <Comments></Comments>
            
        </div>
    );
};

export default Home;