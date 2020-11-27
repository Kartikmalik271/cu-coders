import React from 'react';

import blogmain_img from '../../assets/blog/Delivery.png';

import blogstartcircle from '../../assets/blog/blogstartcircle.png' ;

const Blogstart = () => {
    return ( 
       
        <div className="blog-main" >
          <div className="col-12 px-0 mt-5 pt-5">
            <div className="row m-2 align-items-center ">
              <div className="blog-main-heading col-12  col-md-7 mt-5 pt-5 pb-5 mb-3">
                <h1 style={{ fontWeight:'bold', fontSize:'40', textShadow:'1px 1px 2px black'}}>Our Blog</h1>
                <h3 className="mt-3" style={{fontWeight:'300'}}>
                    Subscribe to our blog
                </h3>

                <div className="row m-2 justify-content-center " >
                  <div className="col-8">
                    <form className="blog-input-form " >
                      <label >
                       
                        <input className=" blog-input col-7 col-sm-7 col-xl-8 ml-3 pl-sm-3 ml-lg-5"
                          type="email" 
                          name="subscribe to our blogk" 
                          placeholder=" Email" 
                          required="required"
                        />
                      </label>
                    </form>

                  </div>

                  <div className="col-4">
                    <label class="checkbox-button">
                      <input type="checkbox" class="blog-checkbox-button__input" id="email" name="email" />
                        <span class="checkbox-button__control"></span>
    
                    </label>

                  </div>
                  
                  
                                  
                </div>

                <div className="row">
                  <img src={blogstartcircle} />
                </div>
              </div>
              <img className="blog-main-img col-12  col-md-5 " style={{margin:'0 auto'}} src={blogmain_img} alt=""/>
            </div>
          </div>
        </div>
    );
  }
export default Blogstart;


            
            

             
               
                    
                        
                            
                                
                                
                                
                                
                        
                        
                    
               
             

 
