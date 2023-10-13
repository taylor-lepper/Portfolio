import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContainerBlock({children, ...customMeta}){
    const router = useRouter();

    const meta = {
        title: "Taylor Lepper - Developer, Creator, Mechanic and Builder",
        description: "I've been building, modifying and creating since diapers. What can we create together?",
        image: "image",
        type: "website",
        ...customMeta,
    };

    return(
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index"/>
                <meta content={meta.description} name="description"/>
                <meta property="og.url" content={`https://mywebsite.com${router.asPath}`}/>
                <link rel="canonical" href={`https:/mywebsite.com${router.asPath}`}/>
                <meta property="og:type" content={meta.type}/>
                <meta property="og:site_name" content="Taylor Lepper"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:image" content={meta.image}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@taylorlepper"/>
                <meta name="twitter:title" content={meta.title}/>
                <meta name="twitter:description" content={meta.description}/>
                <meta name="twitter:image" content={meta.image}/>
                {meta.date && (
                    <meta property="article:published_time" content={meta.date}/>
                )}
            </Head>
            <main className="dark:bg-gray-800 w-full">
                <Navbar/>
                <div>{children}</div>
                <Footer/>
            </main>
        </div>
    )
}

export default ContainerBlock;