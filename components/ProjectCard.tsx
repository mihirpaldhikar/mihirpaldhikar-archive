import Button from "./Button";

function ProjectCard({...props}: any) {

    function openProject() {
        window.open(props.link)
    }

    return (<div
        className={"flex flex-col bg-surfaceLight dark:bg-surfaceDark rounded-xl px-5 py-5 mx-5" +
            "min-h-fit"}>
        <h1 className={"text-2xl mt-5 mb-2 text-primaryLight dark:text-primaryDark"}>{props.title}</h1>
        <p className={"mb-3 text-sm text-outlineLight dark:text-outlineDark"}>{props.time}</p>
        <p>{props.description}</p>
        <div className={"my-5 w-full"}>
            <Button text={"View"} onClick={openProject}/>
        </div>
    </div>)
}

export default ProjectCard
