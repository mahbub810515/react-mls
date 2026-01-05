import { useState } from "react"
import Container from "../common/Container"
import ListItem from "../ui/ListItem"
import type { navListType } from "../type/Type"
import Button from "../ui/Button"
import Flex from "../common/Flex"


const Header = () => {
    const [navList, setNavList] = useState<navListType[]>([
        {
            id: 1,
            title: "হোম"
        },
        {
            id: 2,
            title: "আমাদের কোর্সসমহ"
        },
        {
            id: 3,
            title: "যোগাযোগ"
        },
        {
            id: 4,
            title: "ক্যারিয়ার গাইডলাইন"
        },
    ])
    return (
        <header className="bg-primary py-4">
            <nav>
                <Container>
                    <Flex className="justify-between items-center">
                        <img src="images/logo.png" alt="logo" />
                        <ul className="flex gap-5 text-white text-xl font-semibold">
                            {navList.map((item) => (
                                <ListItem key={item.id} item={item} />
                            ))}
                        </ul>
                        <Button className="bg-button hover:bg-green-400 rounded px-14 py-1 font-semibold text-2xl text-white" title="কোর্স দেখুন" />
                    </Flex>
                </Container>

            </nav>

        </header>
    )
}

export default Header
