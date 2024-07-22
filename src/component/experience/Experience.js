import React from 'react'
import Ordrio from '../../images/ordrio.jpg'
import Blackfrog from '../../images/blackfrogtech.jpeg'
import manipal from '../../images/manipal_academy_of_higher_education.jpeg'
import './Experience.css'
const Experience = () => {
    return (
        <>
            <div className='ExperienceMainDiv' id='EXPERIENCE'>
                <h1 className='ExperienceHeading'>EXPERIENCE</h1>

                <div className='Experience1MainDiv'>
                    <div className='experience_Content_Div' >

                        <div className='experience_Content_Inner_Div'>

                            <h2 className='experience1Name'>Company 1</h2>
                            <h1 className='experience1NameH1'>Ordrio Technologies</h1>
                            <p className='experience1NameDiscription'>
                                Led backend development using Microservices software architecture, Node.js, AWS, and SQL,
                                increasing system performance by 40%.
                                Designed and maintained high-performance systems, focusing on robustness and scalability.
                                Analyzed, designed, developed, and tested the CREE8 project software web application, improving
                                team efficiency by 30%.
                                Utilized a diverse skill set including Agile methodologies, AWS, database management, and
                                performance optimization.
                                Improved system security protocols by 25%.
                                Developed and improved developer tools that enhance productivity by 15%.
                            </p>
                            <h2 className='company_duration'>22 AUG 2023 - PRESENT</h2>

                        </div>

                    </div>
                    <div className='experienceImageDiv'>
                        <div className='experienceImageOuterSqure'></div>
                        <img src={Ordrio} alt='shubham' className='experience1Image' onClick={() => window.open("https://ordrio.com/")}></img>
                    </div>
                </div>


                {/* ********************************* */}

                <div className='Experience2MainDiv'>
                    <div className='experience_Content_Div' >

                        <div className='experience_Content_Inner_Div'>

                            <h2 className='experience1Name'>Company 2</h2>
                            <h1 className='experience1NameH1'>Blackfrog Technologies</h1>
                            <p className='experience1NameDiscription'>
                                Played a pivotal role in the development of the Real-Time Monitoring System (RTM) project using React.js
                                and Node.js, reducing monitoring lag by 50%.
                                Contributed to the design and implementation of real-time monitoring functionalities.
                                Demonstrated expertise in full-stack development, efficient database management with MongoDB, and
                                email functionality integration using Nodemailer.
                                Improved system security protocols by 25%.

                            </p>
                            <h2 className='company_duration'>15 DEC 2022 - 30 JUN 2023</h2>

                        </div>

                    </div>
                    <div className='experienceImageDiv'>
                        <div className='experienceImageOuterSqure'></div>
                        <img src={Blackfrog} alt='shubham' className='experience2Image' onClick={() => window.open("https://www.blackfrog.in/")}></img>
                    </div>
                </div>

                {/* ********************************************** */}

                <div className='Experience2MainDiv'>
                    <div className='experience_Content_Div' >

                        <div className='experience_Content_Inner_Div'>

                            <h2 className='experience1Name'>Company 3</h2>
                            <h1 className='experience1NameH1'>manipal Academy Of Higher Education</h1>
                            <p className='experience1NameDiscription'>

                                I maintained and regularly updated the institution's website, enhancing user experience by 20%. By adding and modifying content using HTML, CSS, and JavaScript, I improved the user interface. Managing the backend database with MySQL, I reduced data retrieval time by 35%. I designed and implemented RESTful APIs, improving system interoperability and reducing response times by 25%. By optimizing server-side code and database queries, I increased application speed by 40% and reduced server load by 30%. I integrated robust security protocols, enhancing data security and reducing breaches by 50%. Collaborating with cross-functional teams, I improved project delivery times by 15%. Setting up automated testing frameworks and CI/CD pipelines, I reduced deployment time by 40% and ensured higher code quality. Leading project planning and execution using Agile methodologies, I delivered projects on time and within budget.

                            </p>
                            <h2 className='company_duration'>01 AUG 2019 - 01 AUG 2021</h2>

                        </div>

                    </div>
                    <div className='experienceImageDiv'>
                        <div className='experienceImageOuterSqure'></div>
                        <img src={manipal} alt='shubham' className='experience3Image' onClick={() => window.open("https://www.manipal.edu/mu.html")}></img>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Experience