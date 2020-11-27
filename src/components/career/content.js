import React from 'react';

import findjob from '../../assets/career/img/mainimg.png'
import connector from '../../assets/career/img/connector.png'

const Content = () => {
    return ( 
        <div className="col-12">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <img className="col-10 col-md-6 order-md-first" src={findjob} alt=""/>
                        <div className="col-12 col-md-6 mt-3 order-first"style={{textAlign:'center'}}>
                            <h1 style={{color:'rgb(211, 38, 188)',fontFamily:'poppins',fontWeight:'bolder'}}>1. Find your job</h1>
                            <h3 style={{color:'rgb(180, 180, 180)',fontFamily:'poppins',fontWeight:'bolder'}}>Go to the homepage</h3>
                        </div>
               

                <img className="col-4 d-none d-md-block" src={connector} style={{margin:'0 auto',color:'rgb(180, 180, 180)',fontFamily:'poppins',fontWeight:'bolder'}} alt=""/>
                </div>

                <div className="row justify-content-center align-items-center">

                    <div className="col-12 col-md-6 mt-5 "style={{textAlign:'center'}}>
                        <h1 style={{textAlign:'center',color:'rgb(120, 120, 120)',fontFamily:'poppins',fontWeight:'bolder'}} ><span style={{color:'rgba(255, 0, 221, 0.712)'}}> 2. </span> Find your job</h1>
                        <h3 style={{textAlign:'center',color:'rgb(170, 170, 170)',fontFamily:'poppins',fontWeight:'bolder'}}>Go to the homepage</h3>
                    </div>
                    <img className="col-10 col-md-6  " src={findjob} alt=""/>

                    <img className="col-4 order-last d-none d-md-block" src={connector} style={{transform:'scaleX(-1)'}} alt=""/>

                </div>

                <div className="row justify-content-center align-items-center">
                         <img className="col-10 col-md-6 order-md-first" src={findjob} alt=""/>
                    <div className="col-12 col-md-6 mt-5 order-first"style={{textAlign:'center'}}>
                        <h1 style={{textAlign:'center',color:'rgb(120, 120, 120)',fontFamily:'poppins',fontWeight:'bolder'}}> <span style={{color:'rgba(255, 0, 221, 0.712)'}}> 3. </span> Find your job</h1>
                        <h3 style={{textAlign:'center',color:'rgb(170, 170, 170)',fontFamily:'poppins',fontWeight:'bolder'}} >Go to the homepage</h3>
                    </div>
                    <img className="col-4 d-none d-md-block" src={connector} style={{}} alt=""/>

                </div>

                <div className="row justify-content-center align-items-center">
                    <img className="col-10 col-md-6 order-last" src={findjob} alt=""/>
                    <div className="col-12 col-md-6 mt-3"style={{textAlign:'center'}}>
                        <h1 style={{textAlign:'center',color:'rgb(120, 120, 120)',fontFamily:'poppins',fontWeight:'bolder'}}> <span style={{color:'rgba(255, 0, 221, 0.712)'}}> 4.</span> Find your job</h1>
                        <h3 style={{textAlign:'center',color:'rgb(170, 170, 170)',fontFamily:'poppins',fontWeight:'bolder'}}>Go to the homepage</h3>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Content;