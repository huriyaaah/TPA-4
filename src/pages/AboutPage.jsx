import '../css/style.css'
import foto1 from '../assets/foto1.gif'

const AboutPage = () => {
    return (
        <>
            <section className="about" id="About">
            <h2 className="title">About</h2>
            <div className="image">
                <img src={foto1} alt=""/>
            </div>
            <p className="teks">
                Hello! My name is Huriyah Afiyah, my friends usually call me huri or iyyah. Currently, i studying Information System at UPN "Veteran" Jawa Timur. I am an Enthusiastic, Fast Learner, Hard Working, and Responsible person. I have a lot of interest in Technology, Especially for UI Design and Front-End Developing recently. Although I still have a little knowledge, it doesn't stop me from trying to learn more.
            </p>
            </section>
        </>
    )
}

export default AboutPage