import Nav from "./Nav";
import Dove from "./Images"

export default function Header(){
    return (
        <header className="header">
            <h1>Birdwatching</h1>
            <Dove />
            <Nav />
        </header>
    )
}