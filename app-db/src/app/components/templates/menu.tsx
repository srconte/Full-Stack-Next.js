import { IconHome } from "@tabler/icons-react-native"
import Link from "next/link"


function MenuIten(){
    return (
        <Link href="/">
            <IconHome/> 
            <span>Inicio</span>
        </Link>
    )
}



export default function Menu(){
    return (
        <aside className="menu">
            <nav>

            </nav>
        </aside>
    )
}