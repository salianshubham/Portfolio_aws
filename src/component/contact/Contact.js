import React from 'react'
import call from '../../images/call.png'
import mail from '../../images/mail.png'
import location from '../../images/location.png'

import linkedin from '../../images/linkedin.png'
import githubicon from '../../images/github.png'
import instagram from '../../images/instagram.png'
import './Contact.css'
const Contact = () => {
    return (
        <>
            <div className='contact_main_Div' id='CONTACT'>
                <div className='contactCurveDesign'>
                    <h1 className='contact_heading'>CONTACT</h1>
                    <div className='contact_middle_part_div'>
                        <div className='contact_content'>
                            <div className='contact_content_innerDIv'>
                                <h2 className='drop_me_a_message'>Drop Me A Message</h2>
                                <div className='cotact_mobile'>
                                    <div className='cotact_mobile_icon_div'>
                                        <img src={call} className='contact_call_icon' alt='call'></img>
                                    </div>
                                    <h3 className='contact_moble_h3' >8747933283</h3>
                                </div>
                                <div className='cotact_email'>
                                    <div className='cotact_email_icon_div'>
                                        <img src={mail} className='contact_call_icon' alt='mail'></img>
                                    </div>
                                    <h3 className='contact_moble_h3'>shubhamsalian46@gmail.com</h3>
                                </div>
                                <div className='cotact_location'>
                                    <div className='cotact_location_icon_div'>
                                        <img src={location} className='contact_call_icon' alt='location'></img>
                                    </div>
                                    <h3 className='contact_moble_h3'>Udupi Karnataka India</h3>
                                </div>
                            </div>

                        </div>



                        <div className='contact_fill_details'>
                            <div className='contact_fill_feails_inner_Div'>
                                {/* <input type='text' value="name"></input>
                                <br></br>
                                <input type='email' value="email@gmail.com"></input>
                                <br></br>
                                <input type='text' value="Udupi"></input>
                                <br></br>
                                <button>SEND</button> */}
                            </div>
                        </div>
                    </div>
                    <div className='contact_footer'>
                        <div className='cotact_linkedIn_icon_div'>
                            <img src={linkedin} alt='linkedIn' className='linkedIcon' onClick={()=>window.open("https://www.linkedin.com/in/shubham-salian-247750244/")}></img>
                        </div>
                        <div className='cotact_linkedIn_icon_div'>
                            <img src={githubicon} alt='githubicon' className='githubicon' onClick={() => window.open("https://github.com/salianshubham")}></img>
                        </div>
                        <div className='cotact_linkedIn_icon_div'>
                            <img src={instagram} alt='instagram' className='instagramIcon' onClick={() => window.open("https://www.instagram.com/salian.shubham/")}></img>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact