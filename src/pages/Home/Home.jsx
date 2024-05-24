import AboutUs from "../../components/Home/AboutUs/AboutUs";
import Banner from "../../components/Home/Banner/Banner";
import BestSelling from "../../components/Home/BestSelling/BestSelling";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <BestSelling></BestSelling>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;