import React from 'react'; 

import teams from '../../assets/homepage/img/footer-teams.png'



const Footer = () => {

    const scrollTop = () =>{
        window.scrollTo({top:0, behavior:'smooth'});
    };
    return ( 
        <div className="footer col-12 ">
            <div className="container  " id="footer-main-container">
                <div className="row justify-content-center align-items-center">
                    <div className="footer-lhs-team col-12 col-md-6 ">
                        <img className="footer-lhs-team-photo col-12 col-md-9 mb-5" src={teams} alt=""/>
                    </div>
                    <div className="footer-rhs col-12 col-md-6 ">
                        <div className="row ">
                            <h1 className="col-12 mr-auto">Cu-Coders</h1>
                            <p className="col-12">
                            We provide a platform to the Students  
                            for their overall Growth We provide a 
                            platform to the Studentsfor their 
                            overall Growth
                            </p>
                            <div className="col-12 mt-2">
                                <div className="row ">
                                    <button className="footer-btn-half ml-3 mr-3 px-5">Register</button>
                                    <button className="footer-btn-full" onClick={scrollTop}>Back to Top</button>
                                </div>
                            </div>
                            <div className="col-12  col-xs-10 col-sm-10 col-lg-9 mt-4 mb-5 ">
                                <form >
                                    <div className="footer-subscribe-form px-0">
                                        <div className="row">
                                            <input className="footer-form-element  col-7 col-sm-7 col-xl-8 ml-3 pl-sm-3 ml-lg-5"
                                                    type="email" 
                                                    name="feedback" 
                                                    placeholder="Drop Your Email" 
                                                    required="required"
                                            />
                                            <button type="submit" className="footer-subscribe-btn  ml-auto">Subscribe</button>
                                        </div>
                                    </div>         
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;