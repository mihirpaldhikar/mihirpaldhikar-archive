function CodeBlock() {
    return (<div className={'p-0 lg:p-10'}>
        <h1 className={'text-xl lg:text-xl font-semibold text-center text-amber-800'}>
                <pre>
                    <span className={"text-green-800"}><i>{'// '}Hello There!</i></span> <br/> <br/>
                while<span className={"text-green-600"}>{'('}</span><span
                    className={'text-purple-900'}>coding</span><span
                    className={"text-green-600"}>{')'}</span><span
                    className={"text-red-600"}>{'{'}</span>
                <br/><span className={'text-purple-900'}>coffee++;</span>
                <br/><span className={'text-purple-900'}>bugs--;&nbsp;&nbsp;</span>
                <br/><span
                    className={"text-red-600"}>{'}'}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                </pre>
        </h1>
    </div>);
}

export default CodeBlock;
