import {FaHeart} from "@react-icons/all-files/fa/FaHeart";

function Footer() {
    return(
        <div
            className={"bg-surfaceLight dark:bg-surfaceDark text-onBackgroundLight dark:text-onBackgroundDark p-10"}>
            <div className={"text-center flex flex-row justify-center"}>
                <h1>Made With</h1>
                &nbsp;<FaHeart className={"mt-1 text-errorLight dark:text-errorDark"}/>&nbsp;
                <h1> By <span className={"text-primaryLight dark:text-primaryDark font-bold"}>Mihir Paldhikar</span>
                </h1>
            </div>
            <div className={"text-center mt-5"}>
                <p className={"text-sm text-outlineLight dark:text-outlineDark"}>Copyright &copy; 2022
                    Mihir Paldhikar.</p>
            </div>
        </div>
    )
}

export default Footer;
