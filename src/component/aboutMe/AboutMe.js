import React from 'react'
import shubham from '../../images/shubham.png'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <>
            <div className='aboutMainDiv' id='ABOUT_ME'>
                <div className='imageDiv_About'>
                    <div className='imageDiv_About_square'>
                    </div>
                    <img src={shubham} alt='shubham_image_AboutMe' className='shubhamImage_AboutMe'></img>
                </div>
                <div className='aboutMe_discription_Div'>
                    <div className='aboutMe_Content'>
                        <h3 className='AboutmeHeading'>ABOUT ME</h3>
                        <p className='AboutmeHeading_paragraph'>
                            Highly skilled and motivated Software Engineer with over 2 years of experience in software development,
                            specializing in backend development, microservices architecture, and full-stack development. Proven
                            track record of leading projects from conception through deployment using Agile methodologies. Adept
                            at building high-performance systems, optimizing performance, ensuring code quality, and leveraging AI,
                            natural language processing, UI design, and mobile development. Seeking to drive productivity and
                            innovation.
                        </p>
                        <button className='aboutMe_HireMe_Button'>HIRE ME</button>
                        <button className='aboutMe_Resume_Button' onClick={() => window.location.href = "https://drive.google.com/file/d/1xCv-G_YArJkTyA4LbI18xjbM65sto4zl/view?usp=sharing"}>RESUME</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe
