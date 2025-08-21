'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/lib/util";
import Link from "next/link"

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 mt-6", className)}>
            <Menu setActive={setActive}>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <Link href={"/courses"}>
                    <MenuItem setActive={setActive} active={active} item="All Courses">
                        <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href={"/courses"}>Piano for Beginners</HoveredLink>
                        <HoveredLink href="/courses">Advanced Vocal Techniques</HoveredLink>
                        <HoveredLink href="/courses">Drumming Mastery</HoveredLink>
                        <HoveredLink href="/courses">Jazz Improvisation</HoveredLink>
                        <HoveredLink href="/courses">Music Production Fundamentals</HoveredLink>
                        <HoveredLink href="/courses">Songwriting Essentials</HoveredLink>
                        <HoveredLink href="/courses">Electronic Music Production</HoveredLink>
                        </div>
                    </MenuItem>
                </Link>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                    
                    </MenuItem>
                </Link>
            </Menu>
            
        </div>
    )
}

export default Navbar