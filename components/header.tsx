"use client";

import { useRouter } from "next/router";
import { Children } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderProps{
    children: React.ReactNode;
    className?: string;

}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router= useRouter();
    const handleLogout = () => {
        //Handle logout in the future
    }
    return(
        <div className = {twMerge('h-fit bg-gradient-to-b from-emerald-800 p-g',
        className
        )}>
            <div className="
            w-full
            mb-4
            flex
            items-center
            justify-between
            ">

            <div className= " hidden md:flex gap-x-2 items-center">

            </div>
        </div>
        
    );
}

export default Header;