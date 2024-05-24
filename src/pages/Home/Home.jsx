import AboutUs from "../../components/Home/AboutUs/AboutUs";
import Banner from "../../components/Home/Banner/Banner";
import BestSelling from "../../components/Home/BestSelling/BestSelling";
import Categories from "../../components/Home/Categories/Categories";
import Reviews from "../../components/Home/Reviews/Reviews";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <BestSelling></BestSelling>
            <AboutUs></AboutUs>
            <Categories></Categories>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;