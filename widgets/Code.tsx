function CodeBlock() {
    return (<div className={'p-0 lg:p-10'}>
        <h1 className={'text-xl lg:text-xl font-semibold text-center text-codeLight dark:text-codeDark'}>
                <pre>
                    <span className={"text-codeCommentLight dark:text-codeCommentDark"}><i>{'// '}Hello There!</i></span> <br/> <br/>
                while<span className={"text-bracketsLight dark:text-bracketsDark"}>{'('}</span><span
                    className={'text-variablesLight dark:text-variablesDark'}>coding</span><span
                    className={"text-bracketsLight dark:text-bracketsDark"}>{')'}</span><span
                    className={"text-bracketsLight dark:text-bracketsDark"}>{'{'}</span>
                <br/><span
                    className={'text-variablesLight dark:text-variablesDark'}>coffee++;</span>
                <br/><span
                    className={'text-variablesLight dark:text-variablesDark'}>bugs--;&nbsp;&nbsp;</span>
                <br/><span
                    className={"text-bracketsLight dark:text-bracketsDark"}>{'}'}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                </pre>
        </h1>
    </div>);
}

export default CodeBlock;
