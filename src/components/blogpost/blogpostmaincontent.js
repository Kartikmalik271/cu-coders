import React from 'react';

const blogpostmaincontent =  (props) => {
    return(
        <div className="blogpostmaincontent">
            <div className="col-12">
                <p>{props.blogpostdetails.maincontent}</p>

            </div>


        </div>

    );
}


export default blogpostmaincontent;