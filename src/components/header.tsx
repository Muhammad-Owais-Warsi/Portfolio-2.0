import Logo from "../icons/logo"
import { Button } from "@nextui-org/react"



export default function Header() {
    return (
        <div className="flex justify-between align-middle p-6">
            <div className="w-10 h-10">
                <a href="/">
                    <Logo />
                </a>
            </div>
            <div>
                <a href="mailto:warsimuhammadowais@gmail.com">
                <Button className="border-[rgb(189,130,255)] border hover:bg-[rgb(189,130,255)] hover:text-white bg-white">Hire Me</Button>
                </a>
            </div>
           
        </div>
    )
}