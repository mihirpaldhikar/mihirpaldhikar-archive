function Button({...props}: any) {
    return (<button
        className={"bg-primaryLight dark:bg-primaryDark w-fit align-middle py-2 px-5 rounded-lg " + "shadow-md text-center text-onPrimaryLight dark:text-onPrimaryDark"}
        onClick={props.onClick}>
        <h4>{props.text}</h4>
    </button>)
}

export default Button;
