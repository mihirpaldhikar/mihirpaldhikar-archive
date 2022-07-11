import Image from "next/image";
import logo from "../public/logo.svg";
import {FaSun} from "@react-icons/all-files/fa/FaSun";
import {useEffect, useState} from "react";
import {FaMoon} from "@react-icons/all-files/fa/FaMoon";
import Logo from "../widgets/Logo";

function NavBar() {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

    useEffect((): any => {
        setIsDarkMode(localStorage.theme !== 'light')
    }, [isDarkMode])

    function toggleMode(mode: boolean) {
        setIsDarkMode(mode)
        localStorage.theme = mode ? 'dark' : 'light'
        window.location.reload()
    }

    return (<div
        className={"min-w-full container mx-auto fixed backdrop-blur-2xl bg-defaultColors-transparent"}>
        <div
            className={"flex flex-row content-start text-center align-middle items-center p-2" +
                " mx-2 lg:ml-10"}>
            <div className={"flex flex-row flex-auto text-center align-middle items-center"}>
                <div className={"rounded-xl bg-surfaceLight dark:bg-surfaceDark p-1"}>
                    <Logo height={50} width={50} className={isDarkMode ? "darkLogo" : "logo"}/>
                </div>
                <h1 className={"font-bold text-2xl ml-5 text-primaryLight dark:text-primaryDark"}>Mihir
                    Paldhikar</h1>
            </div>
            <div
                className={"text-2xl bg-surfaceLight dark:bg-surfaceDark " + "text-defaultColors-amber-500" + " dark:text-onSurfaceDark rounded-xl p-3"}
                onClick={() => {
                    toggleMode(!isDarkMode)
                }}>
                {isDarkMode ? <FaMoon/> : <FaSun/>}
            </div>
        </div>
    </div>)
}

export default NavBar;
