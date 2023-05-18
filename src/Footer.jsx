import {AiFillHeart} from "react-icons/all";

const Footer = () => {
    return (
        <div className="h-12 mt-4 text-center text-white font-roboto font-medium flex flex-row justify-center">
            <h3>Created in Casablanca with </h3>
            <span className="text-xl ml-2 mt-1 text-red-700"><AiFillHeart /></span>
        </div>
    );
}

export default Footer;