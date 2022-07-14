import {Fragment} from "react";
import JourneyBox from "../widgets/JourneyBox";

function JourneyView() {
    return (<Fragment>
        <JourneyBox title={"Started Programming"}
                    description={"Started learning" + " JAVA at age of 14."}
                    time={"2017"}/>
        <JourneyBox title={"Created First Android App"}
                    description={"The first app wrote was a Flashlight App. Which got crashed at first run obviously (●'◡'●)"}
                    time={"2017"}/>
        <JourneyBox title={"Got Into Web Development"}
                    description={"Started learning about html, css, js and created basic website. I was so happy back then O(∩_∩)O"}
                    time={"2018"}/>
        <JourneyBox title={"Learnt about Servers, Cloud Computing"}
                    description={"After creating a website, I was not knowing how to share it with the others. Thus came to know about servers and Cloud Computing and it was fun to learn how the actual internet works behind the sense."}
                    time={"2019"}/>
        <JourneyBox title={"Learnt About Advance Android Development"}
                    description={"I learnt concepts such as ViewModels, Fragments, Activities, MVVM Architecture, and much more."}
                    time={"2019"}/>
        <JourneyBox title={"Created A Simple Code Editor Android App"}
                    description={"With the knowledge of span-ables, EditTexts and Custom View in Android, I create a simple Code Editor Android App with syntax highlighting, saving and opening of flies. Although it could not handel large file, it was some what working."}
                    time={"2020"}/>
        <JourneyBox title={"Created Bookology - My First App On Google Play Store"}
                    description={"After just learning the Flutter, I was thinking about a product to share or donate the book not in use my individual to someone in need. Thus Bookology was born. It took me around 7-8 months to develop app, API and other backend infrastructure. Still in active maintainable. This was my first app to get publish on the Google Play Store! Pretty Exciting!! (*^_^*)"}
                    time={"2021 - Present"}/>
        <JourneyBox title={"B.Tech in Computer Science"}
                    description={"After my high school, My path to choose was clear. It was none other than Computer Science. Thus I got enrolled in B.Tech Computer Science. Learning about various concepts & building blocks of CS is very much fun."}
                    time={"2021 - Present"}/>
        <JourneyBox title={"Creating Social Ship"}
                    description={"Currently working on StartUp Idea of Social Ship - A Professional Networking Platform."}
                    time={"2022 - Present"}/>
    </Fragment>)
}

export default JourneyView
