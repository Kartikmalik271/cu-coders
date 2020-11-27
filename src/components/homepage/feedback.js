import React from 'react';
import mailbox from "../../assets/homepage/img/mailbox.png"

const FeedbackBox = () => {
    return ( 
        <div className="col-12 mt-5 pt-5 mb-5">
            <div className="row justify-content-center ">
                <div className="homepage-feedbackbox col-10 col-sm-8 mt-5 mb-0 mb-sm-5 pt-3">
                    <div className="row justify-content-center align-items-center">

                       <div className="col-12 col-sm-7 order-last order-sm-first mb-5 mb-sm-5">
                           <h3 style={{fontWeight:'lighter',color:'white', textShadow:'1px 1px 2px black',textAlign:'center'}}>Get the best project estimation</h3>
                            <form >
                                <div className="homepage-feedback-form mt-3">
                                    <div className="row justify-content-center">
                                        <input className="homepage-feedbackform-element"
                                                type="email" 
                                                name="feedback" 
                                                placeholder="Enter your email" 
                                                required="required"
                                        />
                                        <button type="submit" className="homepage-feedback-btn px-3">Send</button>
                                    </div>
                                </div>         
                            </form>
                       </div>
                        
                        <img className="homepage-feedback-img col-3 mb-5 " src={mailbox} alt=""/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FeedbackBox;