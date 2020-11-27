import React from 'react';
import calendar from '../../assets/blog-single/calendar.png';
import chat from '../../assets/blog-single/chat.png';


const blogpostdetails = (props) => {
    return(
        <div className="blog-details">
            <div className="col-12">
                <div className="row mt-3">
                    <div className="col-7 col-md-6 ml-md-5">
                        <div className="row justify-content-center">
                            
                                <img  src={props.authorimg} />

                           

                            <div className="col-8 col-md-8" >
                                < blackqoute >
                                    <p> {props.blogpostdetails.author}</p>
                                </blackqoute>
                                <footer class="blackquote-footer">
                                    <p style={{color: "grey" , fontSize:"small"}}> {props.blogpostdetails.authordescription}</p>
                                </footer>


                            </div>
                        </div>

                    </div>

                    <div className="col-5 col-md-5">
                        <div className="row">
                            <div className="col-7 ">
                                <div className="row align-items-end ">
                                    <img src={calendar}/>
                                    <p >{props.blogpostdetails.Date}</p>
                                </div>
                            </div>

                            <div className="col-5">
                               <div className="row align-items-end">
                                   <img src={chat}/>
                                   <p >{props.blogpostdetails.comment}</p>
                               </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        
    );
}     
export default blogpostdetails;
                
                    
        
        
                
                    

                
                
           






                                
                               
                                    
                                
                            
                        

                    
                                
                                

                                  
                                

                            
                           


                       
                        

                   
                

                
                        
                   
                    
                       
                                   
                           
                    

                
            