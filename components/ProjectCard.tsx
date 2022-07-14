import Button from "./Button";

function ProjectCard({...props}: any) {

    function openProject() {
        window.open(props.link)
    }

    return (<div
        className={"flex flex-col bg-surfaceLight dark:bg-surfaceDark rounded-xl px-5 py-5 mx-5" + "min-h-fit"}>
        <div className={"w-full justify-start"}>
            {/*<div*/}
            {/*    className={"w-fit bg-primaryContainerLight dark:bg-primaryContainerDark px-0.5 pt-0.5 pb-0 rounded-xl"}>*/}
            {/*    <Image src={logo} height={80} width={80} alt={props.title}/>*/}
            {/*</div>*/}
        </div>
        <h1 className={"text-2xl mt-5 mb-2 text-primaryLight dark:text-primaryDark"}>{props.title}</h1>
        <p className={"mb-3 text-sm text-outlineLight dark:text-outlineDark"}>{props.time}</p>
        <p>{props.description}</p>
        <div className={"my-5 w-full"}>
            <Button text={"View"} onClick={openProject} outlined={true}/>
        </div>
    </div>)
}

export default ProjectCard
