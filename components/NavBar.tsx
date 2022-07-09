import Image from "next/image";
import logo from "../public/logo.svg";
function NavBar() {
    return(
        <div className={"min-w-full container mx-auto fixed backdrop-blur-2xl"}>
            <div className={"flex flex-row content-start text-center align-middle items-center" +
                " p-3 ml-5 lg:ml-10"}>
                <Image src={logo} height={50} width={50} alt={"Mihir Paldhikar"}/>
                <h1 className={"font-bold text-2xl ml-5 text-purple-900"}>Mihir Paldhikar</h1>
            </div>
        </div>
    )
}

export default NavBar;
