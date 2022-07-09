import type {NextPage} from 'next';
import Head from 'next/head';
import {Fragment} from 'react';
import CodeBlock from '../widgets/Code';
import Button from "../components/Button";
import JourneyBox from "../widgets/JourneyBox";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import Link from "next/link";

const Home: NextPage = () => {

    function pr() {
        console.log("Clicked ME!")
    }

    return (<Fragment>
        <Head>
            <title>Mihir Paldhikar</title>
            <meta name="description" content="Developer Portfolio Of Mihir Paldhikar."/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className={'flex flex-col p-5 w-full justify-center items-center'}>
            <div
                className={"flex flex-col lg:flex-row justify-start lg:space-x-80 min-h-full" + " lg:mt-16"}>
                <div
                    className={"flex-auto content-center mt-16 lg:mt-32 ml-2 lg:ml-16 ml-10" + " mr-5 lg:ml- lg:ml-0"}>
                    <h4 className={"text-lg"}>Hello, I am</h4>
                    <h1 className={"text-6xl font-bold mb-3 text-purple-900"}>Mihir Paldhikar<span
                        className={"text-purple-600"}>.</span></h1>
                    <p>Designer, Full Stack, Android, Flutter & Web Developer</p>
                    <div className={"mt-10 text-center lg:text-left"}>
                        <Button text={"Download Resume"}/>
                    </div>
                    <div
                        className={"flex flex-row space-x-6 mt-10 justify-center lg:justify-start"}>
                        <Link href={"https://github.com/mihirpaldhikar"}>
                            <div className={"bg-purple-50 p-4 rounded-xl text-4xl shadow-sm"}>
                                <FaGithub/>
                            </div>
                        </Link>
                        <Link href={"https://linkedin.com/in/mihirpaldhikar"}>
                            <div className={"bg-purple-50 p-4 rounded-xl text-4xl shadow-sm"}>
                                <FaLinkedin className={"text-blue-800"}/>
                            </div>
                        </Link>
                        <Link href={"https://twitter.com/mihirpaldhikar"}>
                            <div className={"bg-purple-50 p-4 rounded-xl text-4xl shadow-sm"}>
                                <FaTwitter className={"text-blue-500"}/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div
                    className={'flex-auto content-center justify-center mt-10 text-center items-center'}>
                    <div className={"p-5 rounded-xl bg-purple-50 shadow-sm mx-3"}>
                        <CodeBlock/>
                    </div>
                </div>
            </div>
            <div
                className={"ml-0 lg:ml-10 w-full lg:w-1/2 bg-purple-50 shadow-sm rounded-xl mt-32 p-5"}>
                <h1 className={"text-2xl font-bold text-purple-900"}>About Me</h1>
                <br/>
                <p>
                    Bonjour! I am <span
                    className={"text-purple-900"}>Mihir Paldhikar</span>, <br/> passionate about
                    computers, coding and learning about science. <br/>
                    I like to create new projects thus always brain-storming about ideas
                    💡. <br/>
                    Programming since I was 14, computers got my interest from thinking how to
                    these cool stuff actually work! <br/>
                    My first attempt to code was building a Flash Light app for Android, but
                    fortunately it crashed on first run thus made me to explore more about
                    programming in general.
                </p>
            </div>
            <div
                className={"ml-0 lg:ml-10 mt-16 w-full lg:w-1/2"}>
                <h1 className={"text-2xl font-bold text-purple-900"}>My Journey</h1>
                <br/>
                <JourneyBox title={"Started Programming"}
                            description={"Started learning" + " JAVA at age of 14."}
                            time={"2017"}/>
                <JourneyBox title={"Created First Android App"}
                            description={"The first app wrote was a Flashlight App. Which got crashed at first run obviously (●'◡'●)"}
                            time={"2017"}/>
                <JourneyBox title={"Got Into Web Development"}
                            description={"Started" + " learning about html, css, js and created basic website. I was so happy" + " back then O(∩_∩)O"}
                            time={"2018"}/>
                <JourneyBox title={"Learnt about Servers, Cloud Computing"}
                            description={"After creating a website, I was not knowing how to" + " share it with the others. Thus came to know about" + " servers and Cloud Computing and it was fun to learn how" + " the actual internet works behind the sense."}
                            time={"2019"}/>
                <JourneyBox title={"Learnt About Advance Android Development"}
                            description={"I learnt concepts such as ViewModels, Fragments," + " Activities, MVVM Architecture, and much more."}
                            time={"2019"}/>
                <JourneyBox title={"Created A Simple Code Editor Android App"}
                            description={"With the knowledge of span-ables, EditTexts and Custom" + " View in Android, I create a simple Code Editor Android App" + " with syntax highlighting, saving and opening of flies. Although" + " it could not handel large file, it was some what working."}
                            time={"2020"}/>
                <JourneyBox title={"Created Bookology - My First App On Google Play Store"}
                            description={"After just" + " learning the" + " Flutter, I was thinking about a product to share or donate the book not in" + " use my individual to someone in need. Thus Bookology was born. It took me" + " around 7-8 months to develop app, API and other backend infrastructure." + " Still in active maintainable. This was my first app to get" + " publish on the Google Play Store! Pretty Exciting!! (*^_^*)"}
                            time={"2021 - Present"}/>
                <JourneyBox title={"B.Tech in Computer Science"}
                            description={"After my high" + " school, My path to choose was clear. It was none other than Computer" + " Science. Thus I got enrolled in B.Tech Computer Science. Learning about" + " various concepts & building blocks of CS is very much fun."}
                            time={"2021 - Present"}/>
                <JourneyBox title={"Creating Social Ship"}
                            description={"Currently working on" + " StartUp Idea of Social Ship - A Professional Networking Platform."}
                            time={"2022 -" + " Present"}/>
            </div>
        </div>
    </Fragment>);
};

export default Home;
