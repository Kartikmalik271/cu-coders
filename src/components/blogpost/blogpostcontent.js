import React from 'react';
import Blogpostdetails from './blogpostdetails';
import Blogpostmaincontent from './blogpostmaincontent';
import blogpostauthorimg from '../../assets/blog-single/blogpostauthorimg.png';
import blogpostafterline from '../../assets/blog-single/blogpostafterline.png';
import otherblog1 from '../../assets/blog-single/otherblog1.png';
import otherblog2 from '../../assets/blog-single/otherblog2.png';
import otherblog3 from '../../assets/blog-single/otherblog3.png';



const blogpostcontent = () => {

    var blogpost1 ={
        id:1,
        title:"This is what i did first when i started studying design",
        author:"R.pangestu",
        authordescription: "UI designer at fetux.id",
        Date: "21 mei 2018-14.03 AM",
        comment:"4 comments",
        maincontent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    };
    
    return(
        <div className="blogpost-content">
            <div className="col-12">
                <div classname="row m-2 ">
                    <Blogpostdetails blogpostdetails={blogpost1} authorimg={blogpostauthorimg} />
                    
                </div>

                <div className="row">
                    <div className="col-12">
                        <img className="col-12" src={blogpostafterline}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-8">
                        <Blogpostmaincontent blogpostdetails={blogpost1} />

                    </div>
                
                    <div className="col-12 col-md-4">
                        <div className="row justify-content-center">
                            <div className=" other-blogs col-12 ">
                                <div className="row p-2">
                                    <h3 className="p-2">Other blogs</h3>
                                    <img className="col-12" src=  {blogpostafterline} />

                                </div>
                                


                                <div className="other-blog1 row">
                                    <div className= "col-7 col-md-7">
                                        <h3 style={{   fontWeight:"bold"}}>Recive feedback well</h3>
                                        < p style = {{color:'grey'}}>Jonathan Dee</p>
                                    </div>
                                    <div className="col-5 col-md-5">
                                        <img className="col-12 p-2" src={otherblog1} />
                                    </div>
                                </div>

                                <div className="other-blog2 row">
                                    <div className= "col-7 col-md-7">
                                        <h3 style={{   fontWeight:"bold"}}>Is there a project? make it a</h3>
                                        < p style = {{color:'grey'}}>Jonathan Dee</p>
                                    </div>
                                    <div className="col-5 col-md-5">
                                        <img className="col-12 p-2" src={otherblog2} />
                                    </div>
                                </div>

                                <div className="other-blog3 row">
                                    <div className= "col-7 col-md-7">
                                        <h3 style={{   fontWeight:"bold"}}>A good frontend will do it</h3>
                                        < p style = {{color:'grey'}}>John Wendis</p>
                                    </div>
                                    <div className="col-5 col-md-5">
                                        <img className=" col-12 " src={otherblog3} />
                                    </div>
                                </div>
                            
                            </div>
                            
                            <div className="play-podcast col-12"> 
                               <div className="row p-2">
                                    <h3 className="p-2">Play the Podcast</h3>
                                    <img className="col-12 " src=  {blogpostafterline} />
                                </div>

                               <div className="podcast-1 row">
                                    <div className= "col-7 col-md-7">
                                        <h3 style={{   fontWeight:"bold"}}>Recive feedback well</h3>
                                        < p style = {{color:'grey'}}>Jonathan Dee</p>
                                    </div>
                                    <div className="col-5 col-md-5">
                                        <img className=" col-12 p-2" src={otherblog1} />
                                    </div>
                                </div>

                                <div className="row podcast-2">
                                    <div className= "col-7 col-md-7">
                                        <h3 style={{   fontWeight:"bold"}}>Recive feedback well</h3>
                                        < p style = {{color:'grey'}}>Jonathan Dee</p>
                                    </div>
                                    <div className="col-5 col-md-5">
                                        <img className=" col-12 p-2" src={otherblog1} />
                                    </div>
                                </div>

                                <div className="row podcast-3">
                                    <div className= "col-7 col-md-7">
                                        <h3 style={{   fontWeight:"bold"}}>Recive feedback well</h3>
                                        < p style = {{color:'grey'}}>Jonathan Dee</p>
                                    </div>
                                    <div className="col-5 col-md-5">
                                        <img className=" col-12 p-2" src={otherblog1} />
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

export default blogpostcontent;