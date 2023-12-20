import type {NextPage} from 'next';
import {Fragment, useState} from 'react';
import CodeBlock from '../widgets/Code';
import Button from "../components/Button";
import MetaTags from "../services/MetaTags";
import Typewriter from 'typewriter-effect';
import {FaArrowUp} from "@react-icons/all-files/fa/FaArrowUp";
import {FaArrowDown} from "@react-icons/all-files/fa/FaArrowDown";
import ProjectView from "../views/ProjectView";
import JourneyView from "../views/JourneyView";
import SkillView from "../views/SkillView";
import AboutView from "../views/AboutView";
import SocialView from "../views/SocialView";

const Home: NextPage = () => {

    const [showJourney, setShowJourney] = useState<boolean>(false)
    const [showProjects, setShowProjects] = useState<boolean>(true)

    function toggleJourneyView() {
        setShowJourney(!showJourney)
    }

    function toggleProjectView() {
        setShowProjects(!showProjects)
    }

    function downloadResume() {
        window.open('https://firebasestorage.googleapis.com/v0/b/mihirpaldhikar.appspot.com/o/Documents%2FMihir%20Paldhikar%20Resume.pdf?alt=media&token=fba851fb-3df0-48b1-b26e-c60e25f4fc73', '_newtab');
    }

    return (<Fragment>

        <MetaTags title={"Mihir Paldhikar"}
                  description={"Hello there!, I am Mihir Paldhikar, Designer, Full Stack, Android, Flutter & Web Developer."}
                  image={"./favicon.ico"}/>

        <div className={'flex flex-col p-5 w-full justify-center items-center hero'}>
            <div
                className={"flex flex-col lg:flex-row justify-start lg:space-x-80" + " min-h-full" + " lg:mt-16"}>
                <div
                    className={"flex-auto content-center mt-16 lg:mt-32 ml-2 lg:ml-16 ml-10" + " mr-5 lg:ml- lg:ml-0"}>
                    <h4 className={"text-xl"}>Hello, I am</h4>
                    <h1 className={"text-6xl font-bold mb-3 text-primaryLight" + " dark:text-primaryDark textStroke"}>Mihir
                        Paldhikar<span
                            className={"text-secondaryLight dark:text-secondaryDark"}>.</span></h1>
                    <div className={"h-10 lg:h-5"}>
                        <Typewriter
                            options={{
                                strings: ['Designer, Android, Flutter, Web & Full-Stack Developer'],
                                autoStart: true,
                                delay: 75,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className={"mt-10 text-center lg:text-left w-fit"}>
                        <Button text={"Download Resume"}
                                onClick={downloadResume}/>
                    </div>
                    <SocialView/>
                </div>
                <div
                    className={'flex-auto content-center justify-center mt-10 text-center items-center'}>
                    <div
                        className={"p-5 rounded-xl  border border-outlineLight" + " dark:border-outlineDark mx-5"}>
                        <CodeBlock/>
                    </div>
                </div>
            </div>
            <AboutView/>
            <div
                className={"ml-0 lg:ml-10 mt-16 w-full lg:w-1/2 jo"}>
                <div className={"w-full flex flex-row"}>
                    <div className={"flex-auto"}>
                        <h1 className={"text-2xl font-bold text-primaryLight" + " dark:text-primaryDark"}>🗺️
                            My
                            Journey<span
                                className={"text-purple-400"}></span></h1>
                    </div>
                    <div
                        className={"rounded-xl bg-primaryContainerLight dark:bg-primaryContainerDark p-3 pointer"}
                        onClick={toggleJourneyView}>{showJourney ? <FaArrowUp/> :
                        <FaArrowDown/>}</div>
                </div>
                <br/>
                <Fragment>
                    {showJourney ? <JourneyView/> : null}
                </Fragment>

            </div>
            <div
                className={"ml-0 lg:ml-10 mt-16 w-full lg:w-1/2 "}>
                <div className={"w-full flex flex-row"}>
                    <div className={"flex-auto"}>
                        <h1 className={"text-2xl font-bold text-primaryLight" + " dark:text-primaryDark"}>🧪
                            Projects<span
                                className={"text-purple-400"}></span></h1>
                    </div>
                    <div
                        className={"rounded-xl bg-primaryContainerLight dark:bg-primaryContainerDark p-3 pointer"}
                        onClick={toggleProjectView}>{showProjects ? <FaArrowUp/> :
                        <FaArrowDown/>}</div>
                </div>
                <br/>
                <Fragment>
                    {showProjects ? <ProjectView/> : null}
                </Fragment>
            </div>
            <SkillView/>
        </div>
    </Fragment>);
};

export default Home;
