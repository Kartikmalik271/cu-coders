import React from 'react';

import Countup , {startAnimation} from 'react-countup';

import Counter from './counter';


const OurNumbs = () => {
 
    return ( 
        <div className="aboutus-ournumbs">
              <div className="col-12  mt-5 pl-t">
               
                    <div className="row justify-content-center align-items-center ">
                        <div className="aboutus-ournumbs-heading col-12 offset-md-1 col-md-5 mt-5 pt-5 pb-5 mb-3">
                            <h1 style={{ fontWeight:'bold', fontSize:'40', textShadow:'1px 1px 2px black'}}>Our Numbers</h1>
                                <p> Computer instructions are normally stored in consecutive memory locations and are executed
                                   sequentially one at a time. The control reads an instruction from a specific address in 
                                   memory and executes it. It then continues by reading the next instruction in sequence and 
                                   executes it, and so on. This type of instruction sequencing needs a counter to calculate 
                                   the address of the next instruction after execution of the curernt instruction is completed.
                                   It is also necessary to provide a register in
                                </p>
                                <button className="aboutus-main-btn-half mr-3 px-5 mt-4" style={{backgroundColor:'blue'}}>Let's Talk</button>

                        </div>
                        <div className="aboutus-ournumbs-counters col-12 col-md-5 ">
                            <div className="row justify-content-center align-items-center">
                                <div className="aboutus-ournumbs-counter1 col-6 px-0">
                                    <h2 style={{fontWeight:'200',fontFamily:'cursive'}}>
                                        <Counter timer={300}/>
                                            
                                        <br/>Project
                                    </h2>
                                </div>
                                <div className="aboutus-ournumbs-counter2 col-6 px-0">
                                    <h2 style={{fontWeight:'200',fontFamily:'cursive'}}>
                                    <Counter timer={200}/>
                                        <br/>Users
                                    </h2>
                                </div>
                                <div className="aboutus-ournumbs-counter3 col-6 px-0">
                                    <h2 style={{fontWeight:'200',fontFamily:'cursive'}}>
                                    <Counter timer={20}/>
                                        <br/>Employe
                                    </h2>
                                </div>

                            </div>
                        </div>
                    </div>
             
             </div>
        </div>
     );
}
 
export default OurNumbs;