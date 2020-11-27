import React from 'react'

import { Link } from 'react-router-dom'
import TabContent from './All'
import image from '../../assets/career/img/image.png'
import image2 from '../../assets/career/img/image2.png'
import image3 from '../../assets/career/img/image3.png'


const Tabs = () => {
    return ( 
        <div className="career-tab mt-5 mb-5">
        <div className="col-12 mt-5">
          <div className="row justify-content-center">
              <div className="career-navtabs">
              <ul className="nav nav-tabs d-none d-md-inline-flex px-4 pb-2 "style={{border:'none'}}>
  
                    <li className="nav-item ">
                        <a className="nav-link active" href="#All" role="tab" data-toggle="tab"><h3>ALL</h3></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link "  href="#Creative" role="tab" data-toggle="tab"><h3>CREATIVE</h3></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#Technology" role="tab" data-toggle="tab"><h3>TECHNOLOGY</h3></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#Strategy" role="tab" data-toggle="tab"><h3>STRATEGY</h3></a>
                    </li>

                    
                </ul>

                <ul className="nav nav-tabs d-md-none d-inline-flex px-4 pb-2 "style={{border:'none'}}>
  
                    <li className="nav-item ">
                        <a className="nav-link active" href="#All" role="tab" data-toggle="tab">ALL</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#Creative" role="tab" data-toggle="tab">CREATIVE</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#Technology" role="tab" data-toggle="tab">TECHNOLOGY</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " href="#Strategy" role="tab" data-toggle="tab">STRATEGY</a>
                    </li>

                    
                </ul>
              </div>
             
  
            <div className="tab-content d-flex col-12">
  
               <div role="tabpanel" className="tab-pane  fade show active"  id="All">
                    <div className="row justify-content-center">
                        <div className="actively-hiring col-12 mt-5 pt-5" style={{textAlign:'center',fontWeight:'600'}}>
                             <h1>ACTIVELY HIRING</h1>
                        </div>
                        <TabContent 
                                image={image} 
                                name="STRATEGY" 
                                post="Bussiness Development Manager" 
                                para="You understant how to translate our offeringss and skills into a viable solutions and lasting partnerships."/> 
                        <TabContent 
                                image={image2} 
                                name="TECHNOLOGY" 
                                post="Front-End Developer"
                                para="You are a seasoned developer with a love for clean, functional code, relentless work ethic and an exceptional eye for detail."/>
                        <TabContent 
                                image={image3} 
                                name="DESIGINER"
                                post="Product Designer"
                                para="You're an enthusiastic interface designer with an eye for detail and the desire to create engaging digital experiences"/> 
                    </div>

               </div>
  
               <div role="tabpanel" className="tab-pane fade show" id="Creative">
               <div className="row justify-content-center">
                        <TabContent image={image2}/>
                        <TabContent image={image2}/>
                        <TabContent image={image2}/>
                    </div>
               </div>
  
               <div role="tabpanel" className="tab-pane fade show" id="Technology">
              
               </div>
  
               <div role="tabpanel" className="tab-pane fade show" id="Strategy">
                 
               </div>
  
               
            </div>
  
          </div>
        </div>
      </div>
     );
}
export default Tabs;