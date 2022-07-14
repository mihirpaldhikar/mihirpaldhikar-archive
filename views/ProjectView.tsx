import ProjectCard from "../components/ProjectCard";

function ProjectView() {
    return (<div
        className={"grid grid-cols-1 lg:grid-cols-2 lg:space-x-5 space-y-5" + " lg:space-y-0"}>
        <ProjectCard title={"Social Ship"}
                     description={"A Networking platform for colleagues, students and professionals."}
                     link={""} time={"2022 - Present"}/>
        <ProjectCard title={"Bookology"}
                     description={"A platform for sharing used books for the peoples who are in need."}
                     link={"https://play.google.com/store/apps/details?id=com.imihirpaldhikar.bookology"}
                     time={"2021 - Present"}/>
    </div>)
}

export default ProjectView
