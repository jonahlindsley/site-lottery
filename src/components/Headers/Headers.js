import react, { useState } from 'react'
import './Headers.css'
const Headers = () => {
    const headerList = ["Top, not sticky", "Top, sticky", "2 Headers, one fixed and one sticky engaging after one section", "Sidebar nav not header"]

    const [answer, setAnswer] = useState('')

    const handleHeader = () => {
        const headerRandom = Math.floor(Math.random() * headerList.length)
        setAnswer(headerList[headerRandom])
    }
    return (
        <div className='headerContainer'>
            <div >
                <button className="btn" onClick={handleHeader}>Give me insperaition</button>
                <h2>{answer}</h2>
            </div>
        </div>
    )
}

export default Headers