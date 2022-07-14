import '../styles/globals.css'
import type {AppProps} from 'next/app'
import PageLayout from "../components/PageLayout";
import {useEffect} from "react";

function MyApp({Component, pageProps}: AppProps) {

    useEffect((): any => {
        const systemTheme = localStorage.systemTheme;
        if (systemTheme === undefined) {
            localStorage.theme = 'dark'
            localStorage.systemTheme = 'production-default'
        }
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.add('darkLogo')
            document.documentElement.classList.remove('logo')
        } else {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.remove('darkLogo')
            document.documentElement.classList.add('logo')
        }

    })

    return <PageLayout><Component {...pageProps} /></PageLayout>
}

export default MyApp
