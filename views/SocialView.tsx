import Link from "next/link";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";

function SocialView() {
    return (<div
        className={"flex flex-row space-x-6 mt-10 justify-start mb-10"}>
        <Link href={"https://github.com/mihirpaldhikar"}>
            <div
                className={"bg-primaryContainerLight dark:bg-primaryContainerDark p-4 rounded-xl text-4xl pointer hover:text-gitHubColor text-onPrimaryContainerColor"}>
                <FaGithub/>
            </div>
        </Link>
        <Link href={"https://linkedin.com/in/mihirpaldhikar"}>
            <div
                className={"bg-primaryContainerLight dark:bg-primaryContainerDark p-4 rounded-xl text-4xl pointer hover:text-linkedInColor text-onPrimaryContainerColor"}>
                <FaLinkedin/>
            </div>
        </Link>
        <Link href={"https://twitter.com/mihirpaldhikar"}>
            <div
                className={"bg-primaryContainerLight dark:bg-primaryContainerDark p-4 rounded-xl text-4xl pointer hover:text-twitterColor text-onPrimaryContainerColor"}>
                <FaTwitter/>
            </div>
        </Link>
        <Link href={"https://instagram.com/mihirpaldhikar"}>
            <div
                className={"bg-primaryContainerLight dark:bg-primaryContainerDark p-4 rounded-xl text-4xl pointer hover:text-instagramColor text-onPrimaryContainerColor"}>
                <FaInstagram/>
            </div>
        </Link>
    </div>)
}

export default SocialView
