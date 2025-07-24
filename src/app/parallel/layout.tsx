import Link from "next/link";
import { ReactNode } from "react";

export default function layout({
    children,
    sidebar,
    feed,
}:{
    children:ReactNode;
    sidebar:ReactNode;
    feed:ReactNode;
}){
    return (
    <div>
        <div>
            <Link href={"/parallel"}>paralel</Link>
            &nbsp;
            <Link href={"/parallel/setting"}>paralel/setting</Link>
        </div>
        <br/>
        {sidebar}
        {feed}
        {children}
    </div>
    );
}