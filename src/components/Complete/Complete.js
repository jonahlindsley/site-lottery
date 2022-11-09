import './Complete.css'
import '../Standard/Standard.css'
import react, {useState} from 'react'


const additionalIdeas = ["Use an animation or two!", "Re-factor a website you made before using react", "Utilize an HTML element you havent before and a CSS selector you havent used before", "Utilize an NPM package you havent used before", "Incorporate audio into a site", "incorporate video into your site", "Convert a PNG file to HTML", "Make a website from a YouTube video", "Add a dark mode", "Use an API"]

const colorScheme = ["first", 'second', "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"]

const headerList = ["Top header, not sticky, logo on the left with links on the right", "Sticky Top header", "Two Headers, one fixed and one sticky engaging after scrolling down one section", "Use a sidebar nav not header", "Use a mobile optimized header with a hamburger button style dropdown"]

const SubjectMatter = ["Flowers", "Racecars", "Paintings of owls", "Your favorite television show", "Maple suryp and or pancakes", "Dogs (or cats if you be like that)", "Coffee tables", "Coffee mugs", "Coffee", "Only pictures of Will Smith slapping Kevin Hart", "Different types of clouds", "Glass blowing", "Electricity", "Tin foil, for covering food or making cool hats", "Really nice pictures of shrimp", "Waves", "React", "Any coding subject you're passionate about", "The differences between common front-end frameworks", "Explain in painful detail your favorite YouTube/TikTok video", "Why do swordfish have such pointy noses??", "What kind of coding languages are used in software development", "The best breakfast cereal (dealers choice)", "Trees, but like, really cool trees", "Only insane tweets from someone", "Waterbottles, disposable or the nice insulated ones", "Super sexy pictures of melted cheese", "Origami", "Pick a coding language you dont know and explain it", "Why thomas Edison was such a dickbag", "Lightbulbs", "Stickers", "Sunglasses", "Surfboards", "Explain in detail one HTML element", "Explain in detail an advanced CSS selector", "Explain how props, classes, and constructors work in react", "The history of daylight savings time and the movement to change it", "Why are whales so thicc tho?", "What is the ideal moustache?", "Whats the best interior design style?", "History of the jack-o-lantern", "Birchbark craft projects", "Nice patterns of ripples in water", "Your favorite casserol", "Whats the best sport?", "Legalize it bro?", "Seashells", "Your favorite cookbook", "Hydro-electric pros and cons", "should Texas's electric grid intrigrate with the rest of the country?", "Mice, for computers or just the regular ones", "ghosts, are they real?", "What is the best form of potato?", "Pictures of fish", "Should capes make a modern comeback?", "Only spongebob memes", "Send noods, eveything noodle related", "Bread. Pictures, recipes, whatever you'd like", "Lasagna and or garf mode", "Desert islands", "Is react beter than angular?", "A christmas themed site, a christmas list or pictures of christmas trees", "Whats your favorite hobby? go with that", "Elon Musk; tool, or savior of the tech world?", "Rainbows, the gay ones or just the normal ones"]


const Complete = () => {
    
    
    const handleEverything = () => {
        const colorRandom = Math.floor(Math.random() * colorScheme.length)
        setColor(colorScheme[colorRandom])

        const randomIdea = Math.floor(Math.random() * additionalIdeas.length)
        setIdeas(additionalIdeas[randomIdea])

        const headerRandom = Math.floor(Math.random() * headerList.length)
        setAnswer(headerList[headerRandom])

        const subjectRandom = Math.floor(Math.random() * SubjectMatter.length)
        setSubject(SubjectMatter[subjectRandom])

        setIsShown(true)
    }
    const [color, setColor] = useState('')
    const [Ideas, setIdeas] = useState('')
    const [answer, setAnswer] = useState('')
    const [subject, setSubject] = useState('')
    const [isShown, setIsShown] = useState(false)

    return (
        <div id='complete'>
            <div className='container'>
                <button className='btn' onClick={handleEverything}>Whole website ideas</button>
                {isShown && <h2 className='underline'>For the header: </h2>}
                <h3>{answer}</h3>
                {isShown && <h2 className='underline'>Make the website about:</h2>}
                <h3>{subject}</h3>
                {isShown && <h2 className='underline'>Using these colors:</h2>}
                {/* first color selection */}
                {color === "first" &&
                    <div className='colorContainer' id={color}>
                        <div id='one' className='colorChild'>Electric Blue: #373e98</div>
                        <div id='two' className='colorChild'>Hot Pink: #f16775</div>
                        <div id='three' className='colorChild'>Shocking Yellow: #fee36e</div>
                        <div id='four' className='colorChild'>Chartreuse-ish: #ceb92c</div>
                        <div id='five' className='colorChild'>Darkest Gray: #2a2a2a</div>
                    </div>}
                {/* second color selection */}
                {color === "second" &&
                    <div className='colorContainer' id={color}>
                        <div id='one' className='colorChild'>Black: #000000</div>
                        <div id='two' className='colorChild'>Medium Gray: #565656</div>
                        <div id='three' className='colorChild'>Light Gray: #9e9e9e</div>
                        <div id='four' className='colorChild'>Hot Orange: #fba92c</div>
                        <div id='five' className='colorChild'>White: #FFFFFF</div>
                    </div>
                }
                {/* third color selection */}
                {color === "third" &&
                    <div className='colorContainer' id={color}>
                        <div id='one' className='colorChild'>Beige: #c8b7a6</div>
                        <div id='two' className='colorChild'>Perriwinkle: #7d94b5</div>
                        <div id='three' className='colorChild'>Dusty Rose: #c29591</div>
                        <div id='four' className='colorChild'>Maroon Brown: #703f37</div>
                        <div id='five' className='colorChild'>Muted Green: #b6c199</div>
                    </div>}
                {/* fourth color selection */}
                {color === "fourth" &&
                    <div className='colorContainer' id={color}>
                        <div id='one' className='colorChild'>Light Lime: #abd699</div>
                        <div id='two' className='colorChild'>Fresh Lemon: #ffe26a</div>
                        <div id='three' className='colorChild'>Teal: #75c9b7</div>
                        <div id='four' className='colorChild'>Mint: #c7ddcc</div>
                        <div id='five' className='colorChild'>Navy: #16123f</div>
                    </div>}
                {/* fifth color selection */}
                {color === "fifth" &&
                    <div className='colorContainer' id={color}>
                        <div id='one' className='colorChild'>Mauve: #A96762</div>
                        <div id='two' className='colorChild'>Deep Blue: #2F5C8F</div>
                        <div id='three' className='colorChild'>Mandarin: #d85c27</div>
                        <div id='four' className='colorChild'>Lavender: #b999be</div>
                        <div id='five' className='colorChild'>Night Moon: #14365d</div>
                    </div>}
                {/* sixth color selection */}
                {color === "sixth" &&
                    <div className='colorContainer' id={color}>
                        <div id='one' className='colorChild'>Creme: #f4d8ae</div>
                        <div id='two' className='colorChild'>Tangerine: #dc7027</div>
                        <div id='three' className='colorChild'>Pistachio: #b6c48e</div>
                        <div id='four' className='colorChild'>Peachy: #ea8a81</div>
                        <div id='five' className='colorChild'>Black Cherry: #301008</div>
                    </div>}
                {/* seventh color selection */}
                {color === "seventh" &&
                    <div className='colorContainer' id={color}>
                        <div id='one' className='colorChild'>Turquoise: #4cbfa6</div>
                        <div id='two' className='colorChild'>Soft Lilac: #f6ebf4</div>
                        <div id='three' className='colorChild'>Purple: #482673</div>
                        <div id='four' className='colorChild'>Orchid: #ed0b70</div>
                        <div id='five' className='colorChild'>Digi Denim: #301008</div>
                    </div>}
                {/* eighth color selection */}
                {color === "eighth" &&
                    <div className='colorContainer' id={color}>
                        <div id='one' className='colorChild'>Leaf green: #397754</div>
                        <div id='two' className='colorChild'>Baby pink: #f0a3bc</div>
                        <div id='three' className='colorChild'>Dark lime green: #70be51</div>
                        <div id='four' className='colorChild'>Orange: #eb6b40</div>
                        <div id='five' className='colorChild'>purple: #9b45b2</div>
                    </div>}
                {/* ninth color selection */}
                {color === "ninth" &&
                    <div className='colorContainer' id={color}>
                        <div id='one' className='colorChild'>Dark teal: #2b6777</div>
                        <div id='two' className='colorChild'>Light blue: #c8d8e4</div>
                        <div id='three' className='colorChild'>Bright white: #ffffff</div>
                        <div id='four' className='colorChild'>Off white: #f2f2f2</div>
                        <div id='five' className='colorChild'>Teal: #52ab98</div>
                    </div>}
                {/* tenth color selection */}
                {color === "tenth" &&
                    <div className='colorContainer' id={color}>
                        <div id='one' className='colorChild'>beige: #fae5df</div>
                        <div id='two' className='colorChild'>Pale pink: #f5cac2</div>
                        <div id='three' className='colorChild'>coral: #ed7966</div>
                        <div id='four' className='colorChild'>medium blue: #303179</div>
                        <div id='five' className='colorChild'>navy: #141850</div>
                    </div>}
                    {isShown && <h2 className='extraIdeas underline'>Some additional things you could consider doing. </h2>}
                    <h3>{Ideas}</h3>
            </div>
        </div>
    )
}

export default Complete;