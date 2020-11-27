import  React   from 'react';
import Gallerycontentimg from '../../assets/Gallery/gallery-content-img.png';

const Gallerycontent =() => {
    return(
        <div className="gallery-content">
            <div className="col-12 ">
                
                <div className="row justify-content-center ">
                   <div className=" col-12 col-md-4">
                       <div className="row ">
                            <div className="col-12  ">
                               <h1 style={{fontWeight: "bolder"}}> Our Gallery</h1>
                                <p> View our gallery in categories</p>
                            </div>
                       </div>

                       <div className="row align-items-center ">
                           <div className="col-12  ">
                               <ul>
                                   <li className="gallery-menu-items" style={{ fontWeight:'bolder', listStyle:'none'}} >
                                       All Events
                                   </li>

                                   <li  className="gallery-menu-items" style={{ color:'grey',fontWeight:'bolder', listStyle:'none'}}>
                                       Coding contest
                                   </li>

                                   <li  className="gallery-menu-items" style={{ color:'grey',fontWeight:'bolder', listStyle:'none'}}>
                                      Bootcamp
                                   </li>

                                   <li className="gallery-menu-items"  style={{ color:'grey',fontWeight:'bolder', listStyle:'none'}}>
                                       Workshop
                                   </li>

                                   <li  className="gallery-menu-items" style={{ color:'grey',fontWeight:'bolder', listStyle:'none'}}>
                                       Hackathon
                                   </li>
                               </ul>
                           </div>

                       </div>
                    </div>

                      

                       

                      


                   

                   <div className=" col-12 col-md-8">
                        <div class="row" id="gallery"  data-toggle="modal" data-target="#exampleModal">
                           <div class="col-12 col-sm-6 col-md-6">
                                <img class="w-100" src={Gallerycontentimg} data-target="#carouselExample" data-slide-to="0" />
                           </div>
                            <div class="col-12 col-sm-6 col-md-6">
                                <img class="w-100" src={Gallerycontentimg} data-target="#carouselExample" data-slide-to="1" />
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div class="row" id="gallery"  data-toggle="modal" data-target="#exampleModal">
                            <div class="col-12 col-sm-6 col-md-6">
                                <img class="w-100" src={Gallerycontentimg} data-target="#carouselExample" data-slide-to="2" />
                            </div>
                            <div class="col-12 col-sm-6 col-md-6">
                                <img class="w-100" src={Gallerycontentimg} data-target="#carouselExample" data-slide-to="3" />
                            </div>
                        </div>
                        <br/>
                        <br/>

                        <div class="row" id="gallery"  data-toggle="modal" data-target="#exampleModal">
                           <div class="col-12 col-sm-6 col-md-6">
                                <img class="w-100" src={Gallerycontentimg} data-target="#carouselExample" data-slide-to="0" />
                           </div>
                            <div class="col-12 col-sm-6 col-md-6">
                                <img class="w-100" src={Gallerycontentimg} data-target="#carouselExample" data-slide-to="1" />
                            </div>
                        </div>

                        <br/>
                        <br/>

                   </div>

                   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                   </button>
                                </div>
                                <div class="modal-body">
                                <div id="carouselExample" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src={Gallerycontentimg}/>
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={Gallerycontentimg}/>
                                        </div>
                                        <div class="carousel-item">
                                           <img class="d-block w-100" src={Gallerycontentimg}/>
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={Gallerycontentimg}/>
                                        </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </div>
    );
}
     

                                
                           
                        

export default Gallerycontent;