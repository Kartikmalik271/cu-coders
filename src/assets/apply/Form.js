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
                            <form action="" method="POST">
                                <p style={{marginBottom:"40px"}}>
                                Hello, my name is <input type="text" name="name" placeholder="FIRST LAST" /> and i live in<br/>
                                <input type="text" name="address" placeholder="CITY,ST" />.You can rach me on my phone at<br/>
                                <input className="wide" type="text" name="phone" placeholder="XXXXX-XXXXX" /> or vial email <input type="email" name="email" placeholder="NAME@DOMAIN.COM" />. My work speaks for<br/>
                                itself:<input className="wide" type="text" name="resume" placeholder="RESUME/PORTFOLIO LINK" />. I heard about this position through<br/>
                                <input type="text" name="referal" placeholder="REFERAL" />. and I am CU-Coders worthy, I swear!<br/>
                                </p>
                                <div className="addon">
                                    <button>Submit</button>
                                    <span>></span>
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
