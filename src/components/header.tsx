import Logo from "../icons/logo"
import { Button } from "@nextui-org/react"
import { Switch } from "@nextui-org/react";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { toggleMode } from "../context/toggle";
import { useContext } from "react";
import Count from "./count";

function Toggle() {

    const {mode,setMode} = useContext(toggleMode);

    const toggleChange = () => {
        mode == "light" ? setMode("dark") : setMode("light");
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
        >
     
        </Switch>
    )
}




export default function Header() {

    const {mode} = useContext(toggleMode);

    return (
        <div className="flex justify-between align-middle p-6">
            <div className="w-10 h-10">
                <a href="/">
                    <Logo />
                </a>
            </div>

            <div className="mt-5">
                <Count/>
            </div>

            <div className="flex justify-center items-center flex-row-reverse gap-6">
                <a href="mailto:warsimuhammadowais@gmail.com">
                    <Button className={`border-purple-600 border hover:bg-purple-600 hover:text-white bg-white ${mode == "dark" ? "bg-[rgb(228,228,231)]" : "bg-white"}`}>Hire Me</Button>
                </a>
                <div>
                    <Toggle/>
                </div>

            </div>

           
        </div>
    )
}