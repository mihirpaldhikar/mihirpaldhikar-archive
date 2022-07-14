function Skill({...props}: any) {
    return (<div className={"w-full flex flex-col justify-center items-start"}>
        <h3 className={"text-xl mt-5"}>{props.name}</h3>
        <div className={"w-full flex flex-col text-right"}>
            <p className={"mb-1 text-outlineLight dark:text-outlineDark"}>{props.level}</p>
            <div className={"bg-outlineLight dark:bg-outlineDark h-1 w-full ml-0 rounded-xl"}>
                <div className={"bg-primaryLight dark:bg-primaryDark h-1 rounded-xl"}
                     style={{width: props.level}}>

                </div>
            </div>
        </div>
    </div>)
}

export default Skill
