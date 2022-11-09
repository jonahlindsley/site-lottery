import "./Additional.css"
import "../Standard/Standard.css"
import react, {useState} from 'react'
import Complete from "../Complete/Complete"

const Additional = () => {

    const additionalIdeas = ["Use an animation or two!", "Re-factor a website you made before using react", "Utilize an HTML element you havent before and a CSS selector you havent used before", "Utilize an NPM package you havent used before", "Incorporate audio into a site", "incorporate video into your site", "Convert a PNG file to HTML", "Make a website from a YouTube video", "Add a dark mode", "Use an API"]

    const [Ideas, setIdeas] = useState('')

    const HandleIdea = () => {
        const randomIdea = Math.floor(Math.random() * additionalIdeas.length)
        setIdeas(additionalIdeas[randomIdea])
    }

    return (
        <div id="ideas" className="container">
            <button onClick={HandleIdea} className="btn">Give me an idea</button>
            <h2>{Ideas}</h2>
        </div>
    )
}


export default Additional;