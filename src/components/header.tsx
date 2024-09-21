import Logo from "../icons/logo"
import { Button } from "@nextui-org/react"
import { Switch } from "@nextui-org/react";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { toggleMode } from "../context/toggle";
import { useContext } from "react";
import Count from "./count";

function Toggle() {
    const { mode, setMode } = useContext(toggleMode);

    const toggleChange = () => {
        mode === "light" ? setMode("dark") : setMode("light");
    }

    return (
        <Switch
            defaultSelected
            size="lg"
            color="secondary"
            onChange={toggleChange}
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <SunIcon className={className} />
                ) : (
                    <MoonIcon className={className} />
                )
            }
        />
    );
}

export default function Header() {
    const { mode } = useContext(toggleMode);

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center p-6 space-y-4 sm:space-y-0">
            {/* Logo - hidden on small devices, shown on large screens */}
            <div className="w-10 h-10 hidden  sm:block">
                <a href="/">
                    <Logo />
                </a>
            </div>

            {/* Visitor count in the center on large screens, second line on small */}
            <div className="order-2 sm:order-1 sm:w-full flex justify-center">
                <Count />
            </div>

            {/* Hire Me Button and Toggle - shown on top in small, at end on large screens */}
            <div className="order-1 sm:order-2 w-full sm:w-auto flex justify-between sm:justify-end items-center gap-4">
                <a href="mailto:warsimuhammadowais@gmail.com">
                    <Button className={`border-purple-600 border hover:bg-purple-600 hover:text-white ${mode === "dark" ? "bg-[rgb(228,228,231)]" : "bg-white"}`}>
                        Hire Me
                    </Button>
                </a>

                <div className="">
                    <Toggle />
                </div>
            </div>
        </div>
    );
}
