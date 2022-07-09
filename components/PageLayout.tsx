import {Fragment} from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function PageLayout({children}: any) {
    return (<Fragment>
            <NavBar/>
            <main className={"min-h-screen pt-16"}>
                {children}
            </main>
            <Footer/>
        </Fragment>)
}

export default PageLayout;
