import Link from "next/link";
import React from "react";

export default function Header() {
    return(
        <div>
            <ul className="navBar">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}