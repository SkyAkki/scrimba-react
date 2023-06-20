import trollFace from "../images/troll-face.png"
export default function Header(){
    return(
        <header>
            <div className="header--left">
                <img className="header--logo" src={trollFace}></img>
                <h1>Meme Generator</h1>
            </div>
            <div className="header--right">
                <p>React Course - Project 3</p>
            </div>
        </header>
    )
}