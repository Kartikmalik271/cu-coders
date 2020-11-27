import React from 'react';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

import RecentBlogsCard from './RecentBlogsCard';
import RecentBlog1 from '../../assets/homepage/img/Blog1.png'
import RecentBlog2 from '../../assets/homepage/img/Blog2.png'
import RecentBlog3 from '../../assets/homepage/img/kartik.jpg'

const options={
  
    responsive:{
        0:{
            items:1,
        },
    992:{
        items:3,
    },
    
},
};


const RecentBlogs = () => {
    return ( 
        <div className="homepage-recentblogs col-12">
            <h1 className=" col-3 px-5 mt-5 mb-3 pb-2" style={{ textAlign:'center' , textShadow:'1px 1px 3px black'}}>Recent Blogs</h1>
            <div className="row justify-content-center">
                <OwlCarousel  {...options} margin={5} autoplay ={true} loop={true}   autoplayHoverPause={true} >  

                    <div className="col-12 item"><RecentBlogsCard RecentBlog={RecentBlog1} Name="Waiting list management"/></div>
                    <div className="col-12 item"><RecentBlogsCard RecentBlog={RecentBlog2} Name="Waiting list management"/></div>
                    <div className="col-12 item"><RecentBlogsCard RecentBlog={RecentBlog3} Name="Waiting list management Waiting list management"/></div>

                </OwlCarousel>
            </div>

        </div>
     );
}
 
export default RecentBlogs;