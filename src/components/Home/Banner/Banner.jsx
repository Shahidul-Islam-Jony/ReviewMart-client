import banner from "../../../assets/images/banner.png"

const Banner = () => {
    return (
        <div className="flex justify-between lg:px-2 bg-blue-100 rounded-md">
            <div>
                Hello
            </div>
            <div>
                <img src={banner} className="w-96 h-96" alt="" />
            </div>
        </div>
    );
};

export default Banner;