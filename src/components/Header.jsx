import Nav from "./Nav";
//import Dove from "./Dove"

export default function Header(){
    return (
        <header className="header">
            <h1>Birdwatching</h1>
            <div className="img">
                <img 
                src="/src/Images/dove.png"
                alt="a simple dove logo"
                />
            </div>
            <Nav />
        </header>
    )
}