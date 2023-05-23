import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import featureImage from "../assets/features2.jpg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Caradual() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const CustomLeftArrow = ({ onClick }) => {
        return (
            <button onClick={onClick}>
                <FaChevronLeft />
            </button>
        )
    }

    return (

        <Carousel
            arrows={true}
            responsive={responsive}
            className=" px-10"
        >
            <div className=" h-80 mr-5">
                <img src={featureImage} alt="" className="" />
            </div>
            <div className=" h-80 mr-5">
                <img src={featureImage} alt="" className="" />
            </div>
            <div className=" h-80 mr-5">
                <img src={featureImage} alt="" className="" />
            </div>
            <div className=" h-80 mr-5">
                <img src={featureImage} alt="" className="" />
            </div>
            <div className=" h-80 mr-5">
                <img src={featureImage} alt="" className="" />
            </div>
            <div className=" h-80 mr-5">
                <img src={featureImage} alt="" className="" />
            </div>
            <div className=" h-80 mr-5">
                <img src={featureImage} alt="" className="" />
            </div>
            <div className=" h-80 mr-5">
                <img src={featureImage} alt="" className="" />
            </div>
            <div className=" h-80 mr-5">
                <img src={featureImage} alt="" className="" />
            </div>
            <div className=" h-80 mr-5">
                <img src={featureImage} alt="" className="" />
            </div>
            <div className=" h-80 mr-5">
                <img src={featureImage} alt="" className="" />
            </div>
        </Carousel>
    )
}
