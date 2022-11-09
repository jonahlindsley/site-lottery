import './Header.css'
import "../Standard/Standard.css"


const Header = () => {

    return (
        <header>
                <a rel="noreferrer" href='#' className="links" >Completed projects</a>
                 <a rel="noreferrer" href="#header" className="links">Headers</a>
                 <a rel="noreferrer" href="#subject" className="links">Subjects</a>
                 <a rel="noreferrer" href="#" className="links">Complete design</a>
                 <a rel="noreferrer" href="#colors" className="links">Color schemes</a>
                 <a rel="noreferrer" href="#ideas" className="links">Additional ideas</a>
                 <a rel="noreferrer" href="#" className="links">Host site</a>
        </header>
    )
}

export default Header;