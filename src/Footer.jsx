import {AiFillHeart} from "react-icons/all";

const Footer = () => {
    return (
        <div className="h-12 mt-6 mb-4 text-center text-white font-roboto font-thin flex flex-row justify-center">
            <h3 className="text-lg">Created in Casablanca with </h3>
            <span className="text-xl ml-2 mt-1 text-red-700"><AiFillHeart /></span>
        </div>
    );
}

export default Footer;