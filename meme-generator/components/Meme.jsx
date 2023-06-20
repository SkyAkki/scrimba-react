import React from "react"
export default function Meme(){

    const [memesArray, setMemesArray] = React.useState([])
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        imgUrl: "http://i.imgflip.com/1bij.jpg"
    })
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setMemesArray(data.data.memes))
    },[])
    function getRandomMeme(event){
        event.preventDefault();
        const randomIndex = Math.floor(Math.random()*memesArray.length)
        setMeme(prevValue => {
            return ({
                ...prevValue,
                imgUrl: memesArray[randomIndex].url
            })
        })
    }
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevValue =>{
            return ({
                ...prevValue,
                [name]: value
            })
        })
    }

    return(
        <div className="memeContainer">
            <form className="meme--form">
                <input type="text" placeholder="Top Text" className="meme--text" name="topText" value={meme.topText} onChange={handleChange}></input>
                <input type="text" placeholder="Bottom Text" className="meme--text" name="bottomText" value={meme.bottomText} onChange={handleChange}></input>
                <input type="submit" value="Get a new meme image  🖼" className="meme--submitButton" onClick={getRandomMeme}></input>
            </form>
            <div className="meme--image">
                <p className="topTextLabel">{meme.topText}</p>
                <img src={meme.imgUrl}/>
                <p className="bottomTextLabel">{meme.bottomText}</p>
            </div>
        </div>
    )
}