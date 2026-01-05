import { useState } from "react"
import Container from "../common/Container"
import ListItem from "../ui/ListItem"
import type { navListType } from "../type/Type"


const Header = () => {
    const [navList,setNavList]=useState<navListType[]>([
        {
            id:1,
            title:"হোম"
        },
        {
            id:2,
            title:"আমাদের কোর্সসমহ"
        },
        {
            id:3,
            title:"যোগাযোগ"
        },
        {
            id:4,
            title:"ক্যারিয়ার গাইডলাইন"
        },
    ])
    return (
        <header className="bg-green-400">
            <nav>
                <Container>
                    <img src="images/logo.png" alt="logo" />
                    <ul>
                        {navList.map((item)=>(
                        <ListItem key={item.id} item={item}/>
                        ))}
                        
                    </ul>
                </Container>

            </nav>

        </header>
    )
}

export default Header
