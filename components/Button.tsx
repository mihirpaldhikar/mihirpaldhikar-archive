function Button({...props} : any) {
    return(
        <button className={
            "bg-purple-600 w-fit align-middle py-2 px-5 rounded-lg shadow-md text-center" +
            " hover:bg-transparent text-white hover:text-purple-600 hover:border-3" +
            " border-black"}
                onClick={props.onClick}>
            <h4 >{props.text}</h4>
        </button>
    )
}

export default Button;
