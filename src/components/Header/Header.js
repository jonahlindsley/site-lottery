import './Header.css'
import "../Standard/Standard.css"


const Header = () => {

    return (
        <header id='top'>
                {/* <a rel="noreferrer" href='#' className="links" >Completed projects</a> */}
                 <a rel="noreferrer" href="#header" className="links">Headers</a>
                 <a rel="noreferrer" href="#subject" className="links">Subjects</a>
                 <a rel="noreferrer" href="#complete" className="links">Complete design</a>
                 <a rel="noreferrer" href="#colors" className="links">Color schemes</a>
                 <a rel="noreferrer" href="#ideas" className="links">Additional ideas</a>
        </header>
    )
}

export default Header;