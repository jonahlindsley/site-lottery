import './ColorScheme.css'
import react, { useState } from 'react'

const Animations = () => {

    const colorScheme = ["first", 'second', "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"]

    const [color, setColor] = useState('')

    const handleColor = () => {
        const colorRandom = Math.floor(Math.random() * colorScheme.length)
        setColor(colorScheme[colorRandom])
    }

    return (
        <div>
            <div id="container">
            <button className='btn' onClick={handleColor}>change color</button>
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
            </div>
        </div>
    )
}

export default Animations;