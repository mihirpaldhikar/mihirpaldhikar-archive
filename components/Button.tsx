function Button({...props}: any) {
    return (<button
        className={`w-full align-middle py-2 px-5 rounded-lg text-center ${props.outlined == true ? "text-primaryLight dark:text-primaryDark border-2 font-bold border-primaryLight dark:border-primaryDark" : "text-onPrimaryContainerLight dark:text-onPrimaryContainerDark bg-primaryContainerLight dark:bg-primaryContainerDark"} `}
        onClick={props.onClick}>
        <h4>{props.text}</h4>
    </button>)
}

export default Button;
