import React from 'react';
import blogheadafter from '../../assets/blog/Group 497.png';

import blogreadafterline from '../../assets/blog/blogreadafterline.png';


import blogcardfirstimage from '../../assets/blog/blogcard1.png';
import blogcardsecondimage from '../../assets/blog/blogcard2.png'
import blogcardthirdimage from '../../assets/blog/blogcard3.png';
import blogcardfourthimage from '../../assets/blog/blogcard4.png';

import blogauthorimg1 from '../../assets/blog/blogauthorimg1.png';
import blogauthorimg2 from '../../assets/blog/blogauthorimg2.png';
import blogauthorimg3 from '../../assets/blog/blogauthorimg3.png';
import blogauthorimg4 from '../../assets/blog/blogauthorimg4.png';


import line from '../../assets/blog/Line 26.png';


import Mpblog1 from '../../assets/blog/Rectangle 30.png';
import Mpblog2 from '../../assets/blog/Rectangle -1.png';
import Mpblog3 from '../../assets/blog/Rectangle -2.png';
import Mpblog4 from '../../assets/blog/Rectangle -3.png';
import Mpblog5 from '../../assets/blog/Rectangle -4.png';

import Blogcard from './Blogcard';


const Blogpagecontent  = () => {

    var blogcardinfo1 = 
        { id: 0,
            blogtitle: "This is the result of my first coding",
            
            author: "John Oka",
            
            Authordescription: "Frond-end developer",
            Blogdescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    var blogcardinfo2 =
        {id: 1,
        blogtitle: "work desk can affect your productivity",
        
        author: "Regad Owen",
        Authordescription: "Project manager fetux.id",
        Blogdescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    
    var blogcardinfo3 =
        {
            id: 2,
            blogtitle: "sketch can help your design process",
            
            author: "John Lemon",
            Authordescription: "Ui designer at jacklo",
            Blogdescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }

        
    var blogcardinfo4 =
        {
            id: 2,
            blogtitle: "Here's how to manage your team",
            
            author: "John Lemon",
            Authordescription: "Project manager at flow",
            Blogdescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        };
    

    return(

        <div className="blog-content">
        
            <div className="col-12">

                <div className="row ">
                    
                    <img className="col-12 px-0" src= {blogheadafter} />
                    
                </div>   
                   

            
                <div className="row justify-content-center   ">
                    <div className="col-12 col-md-4  ">
                        <div className="row justify-content-center">
                           <h1 className="blog-heading-1" style={{ fontWeight:"bolder"}}>Read our <span className="blog-heading-2" style={{color:"#57CBDC", fontWeight:"bolder"}}>  Blog</span></h1>
                        </div>
                        <div className="row justify-content-center">
                           <img src= {blogreadafterline} />
                        </div>
                    </div>
                   
                </div>

                

                
           
                <div className="row mt-3 justify-content-center align-items-center ">
                    <div className="blog-cards col-12 col-md-8  " >
                        <div className="row justify-content-center">
                           <div className="col-11 col-md-5 mx-2 my-2 ">
                            <Blogcard blogcardinfo={blogcardinfo1} image = {blogcardfirstimage} authorimage= {blogauthorimg1}/>
                            <Blogcard blogcardinfo={blogcardinfo2} image= {blogcardsecondimage} authorimage= {blogauthorimg2}/>
                            </div>
                        
                           <div className="col-11 col-md-5 mx-2 my-2">
                            <Blogcard blogcardinfo={blogcardinfo3} image= {blogcardthirdimage} authorimage= {blogauthorimg3}/>
                            <Blogcard blogcardinfo={blogcardinfo4} image= {blogcardfourthimage} authorimage= {blogauthorimg4}/>
                           </div>
                        </div>


                    </div>


                    
                    <div className="blog-mp-cards col-12  col-md-4  " >
                        <div className="row justify-content-center">
                            <div className="col-12 ">
                                <h1>Most popular blogs</h1>
                                <img className="col-12" src=  {line} />
                            
                            </div>
                            
                        </div>
                            
                        
                        

                        <div className="row ">
                            <div className= "col-7 col-md-7">
                               <h3 style={{   fontWeight:"bold"}}>Recive feedback well</h3>
                               < p style = {{color:'grey'}}>Jonathan Dee</p>
                            </div>
                            <div className="col-5 col-md-5">
                              <img  className="col-12 p-2" src={Mpblog1} />
                            </div>
                        </div>

                        <div className="row">
                            <div className= "col-7 col-md-7">
                               <h3 style={{   fontWeight:"bold"}}>Is there a project? make it a</h3>
                               < p style = {{color:'grey'}}>Jonathan Dee</p>
                            </div>
                            <div className="col-5 col-md-5">
                              <img  className="col-12 p-2" src={Mpblog2} />
                            </div>
                        </div>

                        <div className="row">
                            <div className= "col-7 col-md-7">
                               <h3 style={{   fontWeight:"bold"}}>A good frontend will do it</h3>
                               < p style = {{color:'grey'}}>Johan Wendis</p>
                            </div>
                            <div className="col-5 col-md-5">
                              <img className="col-12 p-2" src={Mpblog3} />
                            </div>
                        </div>

                        <div className="row">
                            <div className= "col-7 col-md-7">
                               <h3 style={{   fontWeight:"bold"}}>Recive feedback well</h3>
                               < p style = {{color:'grey'}}>Jonathan Dee</p>
                            </div>
                            <div className="col-5 col-md-5">
                              <img  className="col-12 p-2" src={Mpblog4} />
                            </div>
                        </div>

                        <div className="row">
                            <div className= "col-7 col-md-7">
                               <h3 style={{   fontWeight:"bold"}}>A good frontend will do it</h3>
                               < p style = {{color:'grey'}}>Johan Wendis</p>
                            </div>
                            <div className="col-5 col-md-5">
                              <img className="col-12 p-2"  src={Mpblog5} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

    export default Blogpagecontent;