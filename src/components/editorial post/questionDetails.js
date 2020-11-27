import React, { Component } from 'react'

import starter from '../../assets/editorial post/images/advice-advise-advisor-7096.png';
import starterPcImg from '../../assets/editorial post/images/starterPcImg.png';
import rainImg from '../../assets/editorial post/images/rainEffect.png';
import Main from '../upcomingDet/main';
// import ellipse from '../../assets/editorial post/images/Ellipse 91.png';
// import dashed from '../../assets/editorial post/images/Repeat Grid 10.png';
// import rectangle from '../../assets/editorial post/images/Rectangle 46.png'


export default class questionDetails extends Component {
    render() {
        return (
            <>
               <Main/>

            <div className="col-12 container-fluid ep-starter">
            <div className="row justify-content-center align-items-center ">
                       
                            <img className="col-md-5 d-none d-xl-block" src={starterPcImg} alt=""/>
                        
                   
                    <div className="col-12 col-xl-4 offset-xl-2 px-0" >
                        <div className="align-content-center ep-starter-question-details">
                            <h1>Question Details</h1>
                            <h3>Question Statement</h3>
                        </div>
                        <div className="ep-starter-question-analysis">
                            <div className="ep-x-centered px-2 mt-2" style={{border:'1px solid whitesmoke',borderRadius:'15px'}}>
                                <div className="ep-xy-centered ep-rounded p-3" style={{backgroundColor:"#3D37F1"}}>01</div>
                                <div className="p-3 ep-question-details">
                                    <div style={{fontSize:"26px"}}>Complexity</div>
                                    <div>Complexity Analysis</div>
                                </div>
                            </div>

                            <div className="ep-x-centered px-2 mt-2" style={{border:'1px solid whitesmoke',borderRadius:'15px'}}>
                                <div className="ep-xy-centered ep-rounded p-3" style={{backgroundColor:"#37F1BE"}}>02</div>
                                <div className="p-3 ep-question-details">
                                    <div style={{fontSize:"26px"}}>Problem Setter</div>
                                    <div>Problem Setter Name</div>
                                </div>
                            </div>

                            <div className="ep-x-centered px-2 mt-2" style={{border:'1px solid whitesmoke',borderRadius:'15px'}}>
                                <div className="ep-xy-centered ep-rounded p-3" style={{backgroundColor:"#F13D37"}}>03</div>
                                <div className="p-3 ep-question-details">
                                    <div style={{fontSize:"26px"}}>Problem Tester</div>
                                    <div>Problem Tester Name</div>
                                </div>
                            </div>

                            <div className="ep-x-centered px-2 mt-2" style={{border:'1px solid whitesmoke',borderRadius:'15px'}}>
                                <div className="ep-xy-centered ep-rounded p-3" style={{backgroundColor:"#E66E6E"}}>04</div>
                                <div className="p-3 ep-question-details">
                                    <div style={{fontSize:"26px"}}>Editorialist</div>
                                    <div>Editorialist Name</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }
}

