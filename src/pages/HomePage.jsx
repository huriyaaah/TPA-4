import '../css/style.css'
import { Link } from 'react-router-dom'
import foto from '../assets/foto.png'

const HomePage = () => {
    return (
        <>
        <section className="home" id="Home">
        <div className="image">
            <img src={foto}/>
        </div>
        <div className="nama">
            <h1>Hi, I am <br/><span>Huriyah Afiyah</span></h1>
            <h2>Undergraduate Information System Student</h2>
        </div>
        <div className="icon">
            <Link to={"https://www.linkedin.com/in/huriyah-afiyah-138a63182/"} target="_blank" className="iconsosmed"> <i className='bx bxl-linkedin'></i> </Link>
            <Link to={"https://drive.google.com/file/d/19wDols0e1cM4JakwRUDOc4gr_FYS1rpP/view?usp=sharing"} target="_blank"><input type="button" value="View CV"/></Link>

            {/* <a href="https://www.linkedin.com/in/huriyah-afiyah-138a63182/" target="_blank" className="iconsosmed"><i className='bx bxl-linkedin'></i></a>
            <a href="https://drive.google.com/file/d/19wDols0e1cM4JakwRUDOc4gr_FYS1rpP/view?usp=sharing" target="_blank"><input type="button" value="View CV"/></a>  */}
        </div>
        </section>
        </>
    )
}

export default HomePage