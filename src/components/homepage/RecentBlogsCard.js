import React from 'react';

const RecentBlogsCard = (props) => {
    return ( 
        <div className="homepage-recentblogscard col-12  ">
            <div className="row justify-content-center">
                <img className="homepage-recentblogscard-image col-12 px-0" src={props.RecentBlog} style={{width:'100', height:'250px'}} alt=""/>
                <div className="homepage-recentblogscard-content pt-2 pb-5">
                    <div className="row justify-content-center">
                        <h5 className="col-5"><i className="fa fa-calender "style={{}}/>9th Sept 2020</h5>
                        <h5 className="col-5"><i className="fa fa-hourglass "style={{}}/>20min </h5>
                            <h1>{props.Name}</h1>
                    
                        <p className="col-10 ">We provide a platform to the <br/><span style={{fontWeigth:'bolder'}}>Students </span> 
                            for their overall <span style={{fontWeigth:'bolder'}}>Growth</span><br/>
                        </p>
                        </div>
                </div>


            </div>
        </div>
     );
}
 
export default RecentBlogsCard;