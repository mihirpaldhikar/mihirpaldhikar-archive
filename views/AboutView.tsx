function AboutView() {
    return (
        <div
            className={"ml-0 lg:ml-10 w-full lg:w-1/2 bg-surfaceLight dark:bg-surfaceDark rounded-xl mt-32 p-5"}>
            <h1 className={"text-2xl font-bold text-primaryLight dark:text-primaryDark"}>👦
                About
                Me</h1>
            <br/>
            <p>
                Bonjour! I am <span
                className={"text-purple-900"}>Mihir Paldhikar</span>, <br/> passionate about
                computers, coding and learning about science. <br/> <br/>
                I like to create new projects thus always brain-storming about ideas
                💡. <br/><br/>
                Programming since I was 14, computers got my interest from thinking how to
                these cool stuff actually work! <br/> <br/>
                My first attempt to code was building a Flash Light app for Android, but
                fortunately it crashed on first run thus made me to explore more about
                programming in general.
            </p>
        </div>
    )
}

export default AboutView
