import React from 'react'
import aws from '../../images/aws_logo.png'
import java from '../../images/java.svg'
import javascript from '../../images/javascript.png'
import html from '../../images/html.png'
import sql from '../../images/sql.png'
import react from '../../images/react.png'
import docker from '../../images/docker.png'
import node from '../../images/node.svg'
import github from '../../images/github.png'
import dsa from '../../images/dsa.png'
import microservices from '../../images/microservices.png'
import css from '../../images/css.png'
import './Skills.css'
const Skills = () => {
    return (
        <>
            <div className='skills_Main_div' id='SKILLS'>
                <h1 className='skills_headding'>SKILLS</h1>
                <div className='main_skills_logo'>
                    <div className='skills_aws_div'>
                        <img src={aws} alt='aws' className='skills_aws_image'></img>
                        <h3 className='skills_aws_h3'>AWS</h3>
                    </div>
                    <div className='skills_aws_div'>
                        <img src={java} alt='JAVA' className='skills_aws_image'></img>
                        <h3 className='skills_aws_h3'>JAVA</h3>
                    </div>
                    <div className='skills_aws_div'>
                        <img src={javascript} alt='JAVASCRIPT' className='skills_aws_image'></img>
                        <h3 className='skills_aws_h3'>JAVASCRIPT</h3>
                    </div>
                    <div className='skills_aws_div'>
                        <img src={css} alt='aws' className='skills_aws_image'></img>
                        <h3 className='skills_aws_h3'>CSS</h3>
                    </div>

                    <div className='skills_aws_div'>
                        <img src={html} alt='aws' className='skills_aws_image'></img>
                        <h3 className='skills_aws_h3'>HTML</h3>
                    </div>
                    <div className='skills_aws_div'>
                        <img src={sql} alt='SQL' className='skills_aws_image'></img>
                        <h3 className='skills_aws_h3'>SQL</h3>
                    </div>
                    <div className='skills_aws_div'>
                        <img src={react} alt='REACT.JS' className='skills_aws_image'></img>
                        <h3 className='skills_aws_h3'>REACT.JS</h3>
                    </div>
                    <div className='skills_aws_div'>
                        <img src={docker} alt='DOCKER' className='skills_aws_image'></img>
                        <h3 className='skills_aws_h3'>DOCKER</h3>
                    </div>
                    <div className='skills_aws_div'>
                        <img src={node} alt='aws' className='skills_aws_image'></img>
                        <h3 className='skills_aws_h3'>NODE.JS</h3>
                    </div>
                    <div className='skills_aws_div'>
                        <img src={github} alt='GITHUB' className='skills_aws_image'></img>
                        <h3 className='skills_aws_h3'>GITHUB</h3>
                    </div>
                    <div className='skills_aws_div'>
                        <img src={dsa} alt='DSA' className='skills_aws_image'></img>
                        <h3 className='skills_aws_h3'>DSA</h3>
                    </div>
                    <div className='skills_aws_div'>
                        <img src={microservices} alt='MICROSERVICES' className='skills_aws_image'></img>
                        <h4 className='skills_aws_h3'>MICROSERVICES</h4>
                    </div>
                    
                </div>
            </div>
        </>

    )
}

export default Skills