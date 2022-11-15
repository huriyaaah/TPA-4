import '../css/style.css'
import canva from '../assets/canva.png'
import figma from '../assets/figma.png'
import html from '../assets/html.png'
import css from '../assets/css.png'

import communication from '../assets/communication.png'
import crithink from '../assets/critical thinking.png'
import prosol from '../assets/problem solving.png'
import teamwork from '../assets/teamwork.png'

const SkillsPage = () => {
    return ( 
        <>
        <section className="skill" id="Skill">
            <h2 className="title">Skill</h2>
            <div className="hard-skill">
                <h4>Technical Skill</h4>
                <img src={canva} alt=""/>
                <img src={figma} alt=""/>
                <img src={html} alt=""/>
                <img src={css} alt=""/>
            </div>
            <div className="soft-skill">
                <h4>Professional Skill</h4>
                <img src={communication} alt=""/>
                <img src={crithink} alt=""/>
                <img src={prosol} alt=""/>
                <img src={teamwork} alt=""/>
            </div>
        </section>
        </>
    )
}

export default SkillsPage