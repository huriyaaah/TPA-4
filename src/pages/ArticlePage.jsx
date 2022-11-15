import '../css/style.css'
import {Link} from 'react-router-dom'
import fotoo from '../assets/1.png'
import fotoo1 from '../assets/2.png'
import fotoo2 from '../assets/4.png'


const ArticlePage = () => {
    return (
        <>
            <section class="project" id="Project">
                <h2 class="title">Articles</h2>
                
                <div class="card">
                    <img src={fotoo} alt=""/>
                    <p>Team Project for Final Semester Exam. We're making a Point-of-Sales (PoS) application prototype for SME call TigaTungku. I created a master menu for admin with desktop view. It is really fun and challenging to made this prototype together with a lot of people in team.</p>
                    <Link to={"https://www.figma.com/proto/nhdQVQ5MWk9ooOELCOKj2J/Untitled?node-id=1%3A19&starting-point-node-id=1%3A19&scaling=scale-down"} target="_blank"> Click here to see the prototype </Link>
                </div>

                <div class="card">
                    <img src={fotoo1}alt=""/>
                    <p>Team Project for competition called "Pekan Kreativitas Mahasiswa". I got the part to make ui design for mobile based users. So, we made a prototype for parenting.id application which later can help parents to accompany their child's Golden Age</p>
                    <Link to={"https://www.figma.com/proto/0VxDSNudKFqABTrbWqy8xP/UI-Design?scaling=scale-down&page-id=0%3A1&starting-point-node-id=34%3A117&node-id=2%3A3"}  target="_blank">Click here to see the prototype</Link>

                </div>
                <div class="card">
                    <img src={fotoo2} alt=""/>
                    <p>This is the result of my assignment and my group when participating in program kampus merdeka at @skilvul during the product development bootcamp stage.</p>
                    <Link to={"https://drive.google.com/file/d/15yRg_sMq5iuz_dNz_aCpNSCDqeehWJUE/view?usp=sharing"} target="_blank">Click here to see the UX Case Study</Link>
                    <br/> <br/>
                    <Link to={"https://www.figma.com/proto/HSvy4o7Z1Mo4khT2ufTxAN/UI-DESIGN-(Copy)?scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=123%3A8363&node-id=170%3A6934"}target="_blank">Click here to see the prototype</Link>
                </div>
                    
                
            </section>
        </>
    )
}

export default ArticlePage