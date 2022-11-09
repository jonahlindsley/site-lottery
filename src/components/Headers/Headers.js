import react, { useState } from 'react'
import './Headers.css'
import "../Standard/Standard.css"
const Headers = () => {
    const headerList = ["Top header, not sticky, logo on the left with links on the right", "Sticky Top header", "Two Headers, one fixed and one sticky engaging after scrolling down one section", "Use a sidebar nav not header", "Use a mobile optimized header with a hamburger button style dropdown"]

    const [answer, setAnswer] = useState('')

    const handleHeader = () => {
        const headerRandom = Math.floor(Math.random() * headerList.length)
        setAnswer(headerList[headerRandom])
    }
    return (
        <div className='headerContainer' id='header'>
            <div >
                <button className="btn" onClick={handleHeader}>Give me a header</button>
                <h2>{answer}</h2>
            </div>
        </div>
    )
}

export default Headers