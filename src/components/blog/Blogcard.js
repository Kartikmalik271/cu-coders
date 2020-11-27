import React from 'react';
import blogsideline from '../../assets/blog/blogsideline.png'

const Blogcard = (props) => {
    return(
        <div>
            <div className="row ">
            <div class="card my-2" style={{width: '50 rem'  }} >
               <img class="card-img-top" src= {props.image} alt="Card image cap" />
                <div class="card-body">
                   <h5 class="card-title">{props.blogcardinfo.blogtitle}</h5>
                   <p class="card-text">{props.blogcardinfo.Blogdescription}</p>
                   <br/>
                   <div className="row">
                        <div className="col-8">
                           <div className="row">
                               <div className="col-4">
                                 <img src={props.authorimage} />
                               </div>
                               <div className="col-8">
                                   <blackqoute>
                                       <p> {props.blogcardinfo.author}</p>
                                   </blackqoute>
                                   <footer class="blackquote-footer">
                                       <p style={{color: "grey" , fontSize:"small"}}> {props.blogcardinfo.Authordescription}</p>
                                   </footer>
                                   
                           
                               </div>
                           </div>
                           
                            
                            
                          

                        </div>
                        <div className= "col-4">
                           <img src={blogsideline} />
                        </div>


                    </div>  
               </div>  
           
            </div>
            </div>
           
        </div>
        
    );
}

export default Blogcard;