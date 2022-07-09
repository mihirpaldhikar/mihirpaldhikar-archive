import Head from "next/head";
import * as React from "react";

const MetaTags = ({title, description, image}: any) => {
    return (<Head>
        <title>
            {title}
        </title>
        <meta name="description"
              content={description}/>
        <meta name='twitter:card' content='summary'/>
        <meta name='twitter:site' content='@mihirpaldhikar'/>
        <meta name='twitter:title' content={title}/>
        <meta name='twitter:description' content={description}/>
        <meta name='twitter:image' content={image}/>
        <meta name='og:title' content={title}/>
        <meta name='og:description' content={description}/>
        <meta name='og:site_name' content='Mihir Paldhikar'/>
        <meta name='og:image' content={image}/>
        <meta property="og:type" content="website"/>
    </Head>)
}

export default MetaTags
