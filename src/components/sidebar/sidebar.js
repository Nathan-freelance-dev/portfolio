import React from 'react'
import './Sidebar.scss'
import avatar from '../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-removebg-preview.png'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Sidebar = () => {
    return (
        <>
            <aside className='about_sidebar_info shadow'>
                <div className='about_info_box shadow-sm p-4 text-center'>
                    <img src={avatar} width="200" alt='avatar' />

                    <div className='text-white fw-normal fs-5'>
                        <Link to={"https://twitter.com/bigNath0128"} className='text-decoration-none text-white'>
                            Nathaniel Joseph
                        </Link>
                    </div>
                    <div className='text-muted small'>Front-end Deweloper <br /> Ui/UX Designer,</div>
                </div>

                <div className='mt-0 p-4'>
                    <div className='border-bottom border-secondary pb-3'>
                        <div className='d-flex bd-highlight'>
                            <span className='text-white me-auto'>Residence:</span>
                            <span className='text-muted'>Nigerian</span>
                        </div>

                        <div className='d-flex bd-highlight'>
                            <span className='text-white me-auto'>City:</span>
                            <span className='text-muted'>Abuja</span>
                        </div>

                        <div className='d-flex bd-highlight'>
                            <span className='text-white me-auto'>Age:</span>
                            <span className='text-muted'>17</span>
                        </div>
                    </div>

                    <div className='mt-3 pb-3 border-bottom border-secondary'>
                        <div className='d-flex bd-highlight'>
                            <div className='me-auto'>
                                <div class="pie animate no-round text-white"> 99%</div>
                                <div className='text-center text-white'>HTML</div>
                            </div>

                            <div className='me-auto'>
                                <div class="pie animate no-round text-white css"> 95%</div>
                                <div className='text-center text-white'>CSS</div>
                            </div>

                            <div className='me-auto'>
                                <div class="pie animate no-round text-white js"> 70%</div>
                                <div className='text-center text-white'>JS</div>
                            </div>
                        </div>

                        <div className='d-flex bd-highlight'>
                            <div className='me-auto'>
                                <div class="pie animate no-round text-white react"> 60%</div>
                                <div className='text-center text-white'>React.js</div>
                            </div>

                            <div className='me-auto'>
                                <div class="pie animate no-round text-white css"> 95%</div>
                                <div className='text-center text-white'>SCSS</div>
                            </div>

                            <div className='me-auto'>
                                <div class="pie animate no-round text-white js py"> 30%</div>
                                <div className='text-center text-white'>Python</div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-3 pb-3'>
                        <Button variant='warning' className='w-100 rounded-0'>Download CV</Button>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar