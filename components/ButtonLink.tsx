import Link from "next/link";
import { JSX } from "react";

interface ButtonLinkProps {
    href: string,
    text: string,
    newTab: boolean,
    iconFirst: boolean,
    icon: JSX.Element,
}

export function ButtonLink({ href, text, newTab, iconFirst, icon }: ButtonLinkProps) {
    return (
        <Link
            href={href}
            target={newTab ? '_blank' : '_self'}
            className="
                    flex gap-2 w-max p-2 rounded shadow-md border-2 border-b-6 border-b-black font-semibold 
                    transition duration-500 hover:opacity-75 hover:border-transparent hover:translate-y-1
                "
        >
            {
                iconFirst
                    ?
                    (
                        <>
                            {icon}
                            <span>{text}</span>
                        </>
                    ) :
                    (
                        <>
                            <span>{text}</span>
                            {icon}
                        </>
                    )
            }
        </Link>
    );
}