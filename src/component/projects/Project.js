import React from 'react'
import './Project.css'
import tastychoice from '../../images/tasty-choice.png'
const Project = () => {
    return (
        <>
            <div className='projectMainDiv' id='PROJECTS'>
                <h1 className='projectsHeading'>PROJECTS</h1>

                <div className='project1MainDiv'>
                    <div className='project_Content_Div'>
                        <div className='project_Content_Inner_Div'>

                            <h2 className='project1Name'>PROJECT 1</h2>
                            <h1 className='project1NameH1'>Tasty-Choice</h1>
                            <p className='project1NameDiscription'> Developed a Tasty-Choice using React.js, CSS, HTML, Node.js, and MongoDB for an efficient and dynamic fully responsive web application.
                                Hosted the portfolio's source code on GitHub at <a href='https://github.com/salianshubham/tasty-choice'>GitHub</a> for version control and collaboration.
                                Deployed the live version of the Tasty-Choice, accessible at https://tastychoice.netlify.app/ , showcasing practical application of the
                                mentioned technologies.
                            </p>

                        </div>

                    </div>
                    <div className='projectImageDiv'>
                        <div className='projectImageOuterSqure'></div>
                        <img src={tastychoice} alt='shubham' className='project1Image' onClick={()=>window.open("https://tastychoice.netlify.app/")}></img>
                    </div>
                </div>
{/* ****************************************************************************************************** */}
                <div className='project2MainDiv'>
                    <div className='project2ImageDiv'>
                        <div className='project2ImageOuterSqure'></div>
                        <img src={tastychoice} alt='shubham' className='project2Image'></img>
                    </div>

                    <div className='project2_Content_Div'>
                        <div className='project2_Content_Inner_Div'>

                            <h2 className='project1Name'>PROJECT 2</h2>
                            <h1 className='project1NameH1'>PORTFOILIO</h1>
                            <p className='project1NameDiscription'> Developed a Tasty-Choice using React.js, CSS, HTML, Node.js, and MongoDB for an efficient and dynamic fully responsive web application.
                                Hosted the portfolio's source code on GitHub at https://github.com/salianshubham/tasty-choice for version control and collaboration.
                                Deployed the live version of the Tasty-Choice, accessible at https://tastychoice.netlify.app/ , showcasing practical application of the
                                mentioned technologies.
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default Project