import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <div className="mt-24">
            <Banner></Banner>
            </div>
            <div>
            <About></About>
            </div>
<div className="">
    <Services></Services>
</div>
        </div>
    );
};

export default Home;