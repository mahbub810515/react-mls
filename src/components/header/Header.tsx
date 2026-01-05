import Container from "../common/Container"
import ListItem from "../ui/ListItem"


const Header = () => {
    return (
        <header className="bg-green-400">
            <nav>
                <Container>
                    <img src="images/logo.png" alt="logo" />
                    <ul>
                        <ListItem />
                        <ListItem />
                    </ul>
                </Container>

            </nav>

        </header>
    )
}

export default Header
