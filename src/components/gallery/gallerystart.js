import React from 'react';
import Gallerymainbg from "../../assets/Gallery/gallerybgstart.png" ;
import Gallerystartimg from "../../assets/Gallery/gallerystartimg.png";


const Gallerystart =() =>{
    return(
            <div className="gallery-main">
                <div className="blog-start d-flex justify-content-center align-items-center col-12  row justify-content-center ">
                    <img className="col-12" src={Gallerymainbg} />
                </div>
                <div className="col-12">
                    <div className="container">
                        <div className="row justify-content-center">
                            <img className="col-12" src={Gallerystartimg} />
                        </div>

                    </div>
                </div>

            </div>

    );
}

export default Gallerystart;