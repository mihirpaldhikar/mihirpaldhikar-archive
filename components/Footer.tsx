import {FaHeart} from "@react-icons/all-files/fa/FaHeart";

function Footer() {
    return(
        <div className={"bg-purple-50 p-10"}>
            <div className={"text-center flex flex-row justify-center"}>
            <h1>Made With</h1>
                &nbsp;<FaHeart className={"mt-1 text-red-600"}/>&nbsp;
                <h1> By <span className={"text-purple-900 font-bold"}>Mihir Paldhikar</span></h1>
            </div>
        </div>
    )
}

export default Footer;
