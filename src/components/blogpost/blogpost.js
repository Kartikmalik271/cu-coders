import React from 'react';
import './blogpost.css';
import Blogpostmain from '../../components/blogpost/blogpostmain';
import Blogpostcontent from '../../components/blogpost/blogpostcontent';


const Blogpage = () => {

  
    return(
        <div>
        
            
          <Blogpostmain />
          <Blogpostcontent/>
          
          
             
        </div>
    );
}

export default Blogpage;