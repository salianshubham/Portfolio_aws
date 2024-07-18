import React, { useState } from 'react'
import menuImage from '../../images/menu.png'
import "./Home.css"
const Home = () => {

    const [isMenuOpen, setMenu] = useState(false);

    const toggleButton = () => {
     
        setMenu(!isMenuOpen);
    }

    const scrollSection = (sectionID) => {
        document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
        setMenu(false)
    }

    return (
        <>
            <div className='Home_MainDiv'>
                <div className='NavBar'>
                    <div className='myName'><h1>It's SHUBHAM</h1></div>
                    <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
                        <div>HOME</div>
                        <div onClick={()=>scrollSection('ABOUT_ME')} >ABOUT ME</div>
                        <div onClick={()=>scrollSection('PROJECTS')}>PROJECTS</div>
                        <div onClick={()=>scrollSection('SKILLS')}>SKILLS</div>
                        <button className='ContactButton' onClick={()=>scrollSection('CONTACT')}>CONTACT</button>
                    </div>
                    <img src={menuImage} alt='menuIcon' className='menuIcon' onClick={toggleButton}></img>
                </div>
                <div className='HomeBody'>
                    <div className='Home_FullStsck_developer'>
                        <h3 className='Home_iam'>I'm a </h3>
                        <h1 className='Home_FullStsck_developer_h2'>FULL STACK SOFTWARE DEVELOPER </h1>
                        <button className='Home_projects'>PROJECTS</button>
                    </div>
                    <div className='Home_FullStsck_developer_Side_BlankDiv'>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home