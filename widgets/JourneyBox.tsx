function JourneyBox({...props}: any) {
    return (<div className={"flex flex-row mb-5 bg-purple-50 p-5 rounded-xl shadow-sm"}>
            <div
                className={"mr-2 mt-10 flex flex-row items-center justify-center text-center content-center"}>
                <h2 className={"top-bottom text-center text-center mb-10"}>{props.time}</h2>
            </div>
            <div className={"min-h-fit border-l-[4px] border-purple-200 mr-5 rounded-xl"}></div>
            <div className={"flex flex-col"}>
                <h1 className={"text-lg font-semibold text-purple-500"}>{props.title}</h1>
                <p className={"text-md mt-5"}>{props.description}</p>
            </div>
        </div>)
}

export default JourneyBox
