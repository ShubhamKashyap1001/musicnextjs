'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
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
                        <HoveredLink href="">Guitar Fundamentals</HoveredLink>
                        <HoveredLink>Piano for Beginners</HoveredLink>
                        <HoveredLink>Advanced Vocal Techniques</HoveredLink>
                        <HoveredLink>Drumming Mastery</HoveredLink>
                        <HoveredLink>Jazz Improvisation</HoveredLink>
                        <HoveredLink>Music Production Fundamentals</HoveredLink>
                        <HoveredLink>Songwriting Essentials</HoveredLink>
                        <HoveredLink>Electronic Music Production</HoveredLink>
                        </div>
                    </MenuItem>
                </Link>
                <Link href={"/courses"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                    <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink>Email</HoveredLink>
                    <HoveredLink>Phone No</HoveredLink>
                    </div>
                    </MenuItem>
                </Link>
            </Menu>
            
        </div>
    )
}

export default Navbar