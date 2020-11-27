import React from 'react';
import './blogpost.css';
import Blogpostmain from '../../components/blogpost/blogpostmain';
import Blogpostcontent from '../../components/blogpost/blogpostcontent';


const BlogPost = () => {

  
    return(
        <div>
        
            
          <Blogpostmain />
          <Blogpostcontent/>
          
          
             
        </div>
    );
}

export default BlogPost;