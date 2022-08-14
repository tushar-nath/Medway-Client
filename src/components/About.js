
import React from 'react'
import './about.css'

const About = () => {
    return (
        <div>
            <div className="bg-dark">
                <div className="container text-white py-5">
                    <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6">
                            <h1 className="display-4">About us</h1>
                            <p className="lead mb-0">Our goal with Medway is to make the lives of millions of people easier by offering a consolidated and easily accessible solution for all of their needs.</p>
                        </div>
                        <div className="col-lg-6 px-5 d-none d-lg-block"><img src="images/heart.svg" alt="" className="img-fluid" /></div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-5">
                <div className="container py-5">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 order-2 order-lg-1"><i className="fas fa-heartbeat fa-2x mb-3 text-primary" ></i> 
                            <h2 className="font-weight-light">What is Medway?</h2>
                            <p className="font-italic text-muted mb-4">Through a unified and secure place, Medway assists consumers in tracking their medical history. We simplify tracking medical reports since acquiring such information should be just a click away!</p>
                        </div>
                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="images/about-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 px-5 mx-auto"><img src="images/about-doctors.svg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                        <div className="col-lg-6"><i className="fas fa-mortar-pestle fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">More than just a website</h2>
                            <p className="font-italic text-muted mb-4">A platform for doctors to consult with you, Medway also offers improved advice for maintaining your health and fitness after reviewing your medical history.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark py-5">
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-lg-5">
                            <h2 className="display-4 font-weight-light text-white">Our team</h2>
                            <p className="font-italic text-light">Meet our veterans from various domains.</p>
                            <p className="lead text-muted">Designed with love in India.</p>
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/profile-1.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">Veena Subramanian</h5>
                                {/* <span className="small  text-muted">CEO - Founder</span> */}
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/profile-2.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">Divya Dash</h5>
                                {/* <span className="small text-muted">Designer</span> */}
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/profile-3.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">Tushar Nath</h5>
                                {/* <span className="small text-muted">Consultant</span> */}
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="images/profile-4.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">Shweta Sharma</h5>
                                {/* <span className="small text-muted">Consultant</span> */}
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
