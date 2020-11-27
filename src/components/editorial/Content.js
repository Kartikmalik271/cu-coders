import React, { Component } from 'react'
import idea from "../../assets/editorial/images/idea.png";
import blogging from "../../assets/editorial/images/blogging.png";
import webDevelopment from "../../assets/editorial/images/web development.png";
import backGround from "../../assets/editorial/images/Group -2.png";
export default class Content extends Component {
    render() {
        return (
            <>
                <div className="container">
                    
                    <div className="editorial-txt m-5 editorial-centered">
                        Editorial
                    </div>

                    <div className="editorial-content-data container">
                        <div className="row editorial-centered">
                        <div className="card editorial-question">
                                <div className="editorial-card-img mb-5">
                                    {/* <img className="background" src={backGround} width="100%"/> */}
                                    <img className="editorial-question-background"  src={backGround}  width="100%"/>
                                    <img className="editorial-question-img"  src={idea}/>

                                </div>
                                <div className="card-img-overlay editorial-card-img-overlay">
                                    <div>Question Name</div>
                                    <div className="editorial-txt">EVENT NAME</div>
                                    <div style={{fontSize:"20px"}}>
                                        <span class="fa fa-star editorial-checked"></span>
                                        <span class="fa fa-star editorial-checked"></span>
                                        <span class="fa fa-star editorial-checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="card editorial-question">
                                <div className="editorial-card-img mb-5">
                                    {/* <img className="background" src={backGround} width="100%"/> */}
                                    <img className="editorial-question-background"  src={backGround}  width="100%"/>
                                    <img className="editorial-question-img"  src={blogging}/>

                                </div>
                                <div className="card-img-overlay editorial-card-img-overlay">
                                    <div>Question Name</div>
                                    <div className="editorial-txt">EVENT NAME</div>
                                    <div style={{fontSize:"20px"}}>
                                        <span class="fa fa-star editorial-checked"></span>
                                        <span class="fa fa-star editorial-checked"></span>
                                        <span class="fa fa-star editorial-checked"></span>
                                        <span class="fa fa-star editorial-checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="card editorial-question">
                                <div className="editorial-card-img mb-5">
                                    {/* <img className="background" src={backGround} width="100%"/> */}
                                    <img className="editorial-question-background"  src={backGround}  width="100%"/>
                                    <img className="editorial-question-img"  src={webDevelopment}/>

                                </div>
                                <div className="card-img-overlay editorial-card-img-overlay">
                                    <div>Question Name</div>
                                    <div className="editorial-txt">EVENT NAME</div>
                                    <div style={{fontSize:"20px"}}>
                                        <span class="fa fa-star editorial-checked"></span>
                                        <span class="fa fa-star editorial-checked"></span>
                                        <span class="fa fa-star editorial-checked"></span>
                                        <span class="fa fa-star editorial-checked"></span>
                                        <span class="fa fa-star editorial-checked"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="editorial-centered m-5">
                        <div className="">
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
                </div>
            </>
        )
    }
}