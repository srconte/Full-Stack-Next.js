import { IconHome } from "@tabler/icons-react"
import Link from "next/link"


function MenuIten(){
    return (
        <Link href="/" className="flex gap-2">
            <IconHome /> 
            <span>Inicio</span>
        </Link>
    )
}





export default function Menu(){
    return (
        <aside className="w-72 bg-zinc-900 h-screen">
            <nav className="flex flex-col">
                <MenuIten/>
                <MenuIten/>
                <MenuIten/>
                <MenuIten/>       
            </nav>
        </aside>
    )
}