import './Subjects.css';
import "../Standard/Standard.css"
import react, {useState} from 'react'

const Subjects = () => {

    const SubjectMatter = ["Flowers", "Racecars", "Paintings of owls", "Your favorite television show", "Maple suryp and or pancakes", "Dogs (or cats if you be like that)", "Coffee tables", "Coffee mugs", "Coffee", "Only pictures of Will Smith slapping Kevin Hart", "Different types of clouds", "Glass blowing", "Electricity", "Tin foil, for covering food or making cool hats", "Really nice pictures of shrimp", "Waves", "React", "Any coding subject you're passionate about", "The differences between common front-end frameworks", "Explain in painful detail your favorite YouTube/TikTok video", "Why do swordfish have such pointy noses??", "What kind of coding languages are used in software development", "The best breakfast cereal (dealers choice)", "Trees, but like, really cool trees", "Only insane tweets from someone", "Waterbottles, disposable or the nice insulated ones", "Super sexy pictures of melted cheese", "Origami", "Pick a coding language you dont know and explain it", "Why thomas Edison was such a dickbag", "Lightbulbs", "Stickers", "Sunglasses", "Surfboards", "Explain in detail one HTML element", "Explain in detail an advanced CSS selector", "Explain how props, classes, and constructors work in react", "The history of daylight savings time and the movement to change it", "Why are whales so thicc tho?", "What is the ideal moustache?", "Whats the best interior design style?", "History of the jack-o-lantern", "Birchbark craft projects", "Nice patterns of ripples in water", "Your favorite casserol", "Whats the best sport?", "Legalize it bro?", "Seashells", "Your favorite cookbook", "Hydro-electric pros and cons", "should Texas's electric grid intrigrate with the rest of the country?", "Mice, for computers or just the regular ones", "ghosts, are they real?", "What is the best form of potato?", "Pictures of fish", "Should capes make a modern comeback?", "Only spongebob memes", "Send noods, eveything noodle related", "Bread. Pictures, recipes, whatever you'd like", "Lasagna and or garf mode", "Desert islands", "Is react beter than angular?", "A christmas themed site, a christmas list or pictures of christmas trees", "Whats your favorite hobby? go with that", "Elon Musk; tool, or savior of the tech world?", "Rainbows, the gay ones or just the normal ones"]


    const [subject, setSubject] = useState('')
    const HandleSubject = () => {
        const subjectRandom = Math.floor(Math.random() * SubjectMatter.length)
        setSubject(SubjectMatter[subjectRandom])
    }
    return (

        <div className='container' id='subject'>
            <button onClick={HandleSubject} className="btn">what should my site be about?</button>
            <h2>{subject}</h2>
        </div>

    )
}

export default Subjects;