import React from 'react';
import blueline from '../../assets/career/img/blueline.png'

const TabContent = (props) => {
    return ( 
        <div className="career-all col-10 col-md-3 mt-5  mx-4" style={{boxShadow:'0px 0px 12px #d8d8d8',border:'none'}}>
            <div className="row justify-content-center">
               
                <img className="career-all-image col-12 px-0 py-0" src={props.image} style={{width:'100', height:'250px'}} alt=""/>
                <div className="career-all-content pt-2 pb-5">
                    <div className="row justify-content-center">
                        <h5 className="col-10 py-0"style={{textAlign:'center',marginTop:'-20%', fontWeight:'bolder', fontSize:'40',color:'#2c4766'}}>{props.name}</h5>
                        <img className="col-3" style={{margin:'0 auto',marginTop:'-12%',marginBottom:'12%'}}src={blueline} alt=""/>
                        <h6 className="col-10 "style={{textAlign:'center',marginTop:'-10%'}}>{props.post}</h6>
                            
                    
                        <p className="col-10 "style={{textAlign:'center',marginTop:'0%' ,color:'rbg(180,180,180)'}}>{props.para}
                        </p>
                        <button className="aboutus-main-btn-half mr-3  mt-4" style={{color:'orange',backgroundColor:'white'}}>
                                        FULL-TIME <i className="fa fa-arrow-right"/> 
                        </button>
                    </div>
                </div>


            </div>
        </div>
     );
}
 
export default TabContent;