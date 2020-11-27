import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <>
                  {/* Apply Form Start */}
                  <div className="container-fluid apply">
                    <span className="apply-heading">APPLY NOW</span>
                    <div className="container">
                        <div className="text-center">
                            <form className="apply-input" action="" method="POST">
                                <p style={{marginBottom:"40px"}}>
                                Hello, my name is <input type="text" name="name" placeholder="FIRST LAST" /> and i live in<br/>
                                <input type="text" name="address" placeholder="CITY,ST" />.You can rach me on my phone at<br/>
                                <input className="apply-wide" type="text" name="phone" placeholder="XXXXX-XXXXX" /> or vial email <input type="email" name="email" placeholder="NAME@DOMAIN.COM" />. My work speaks for<br/>
                                itself:<input className="apply-wide" type="text" name="resume" placeholder="RESUME/PORTFOLIO LINK" />. I heard about this position through<br/>
                                <input type="text" name="referal" placeholder="REFERAL" />. and I am CU-Coders worthy, I swear!<br/>
                                </p>
                                <div className="apply-centered m-5">
                                    <div className="mx-auto ">
                                    <button className="btn events-main-btn-half " 
                                    style={{outline:"none",
                                        border:'none',
                                        color:'white',
                                        padding:'12px',
                                        borderRadius:'10px',
                                        marginTop:'20px', 
                                        backgroundColor: '#F24F04',}}>Learn More
                                                                            <span 
                                                                                style={{
                                                                                backgroundColor: '#F66C2D',
                                                                                padding:'7px',
                                                                                marginLeft:'10px',
                                                                                borderRadius:'5px',
                                                                                }}>>
                                                                            </span> 
                                </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                    {/* Apply Form End */}
            </>
        )
    }
}

export default Form
