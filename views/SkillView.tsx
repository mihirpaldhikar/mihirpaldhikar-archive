import Skill from "../widgets/Skill";

function SkillView() {
    return (
        <div
            className={"ml-0 lg:ml-10 w-full lg:w-1/2 bg-surfaceLight dark:bg-surfaceDark rounded-xl mt-16 p-5"}>
            <h1 className={"text-2xl font-bold text-primaryLight dark:text-primaryDark"}>⚡
                Skills
                Sets</h1>
            <br/>
            <div className={"px-5 space-y-5"}>
                <Skill name={"Android"} level={"85%"}/>
                <Skill name={"Flutter"} level={"95%"}/>
                <Skill name={"Web"} level={"77%"}/>
                <Skill name={"Kotlin"} level={"75%"}/>
                <Skill name={"JavaScript"} level={"89%"}/>
                <Skill name={"Node.JS"} level={"91%"}/>
                <Skill name={"Ktor"} level={"95%"}/>
                <Skill name={"Dart"} level={"75%"}/>
            </div>
        </div>
    )
}

export default SkillView
