import React from 'react'; 

import unilogo from '../../assets/homepage/img/unilogo.jpg'



const Footer = () => {

    
    return ( 
        <div className="footer pt-5 pb-5 p-3" id="Footer">
		    <div className="container footer-container ">
			    <div className="row justify-content-center ">
             
                    <div className="footer-form col-12 col-md-4 mt-4 pb-4">
                        <h1>Contact Us:</h1>
                            <form>
                                <input type="text" className="col-11" name="name" id="name" placeholder="Your Name"/><br/>
                                <input type="email" className="col-11"name="email" id="email" placeholder="Your E-mail"/><br/>
                                <input type="text" className="col-11" name="subject" id="subject" placeholder="Subject"/><br/>
                                <textarea rows="5" className="col-11"name="message" id="message" placeholder="Message"/><br/>
                                <button type="submit" className="col-11 "className="btn footer-form-btn-half">Submit</button>

                            </form>
                    </div>
                    <div className="col-12 col-md-5 align-self-center mt-4 pb-4">
                        <h1>Visit Us:</h1>
                        <p className="container">In	other	words,	it	addresses	the	question:	What	if	the	given	recurrence	doesn’t	seem	to
                                        match	with any	of	these	(master	theorem)	methods?	If	we	guess	a	solution	and	then
                                        try	to	verify	our	guess inductively,	usually	either	the	proof	will	succeed	(in	which	case
                                        we	are	done),	or	the	proof	will fail	(in	which	case	the	failure	will	help	us	
                                        refine	our	guess).In	other	words,	it	addresses	the	question:	What	if	the	given	recurrence	doesn’t	seem	to
                                         match	with any	of	these	(master	theorem)	methods?	If	we	guess	a	solution	and	then
                                         try	to	verify	our	guess inductively,	usually	either	the	proof	will	succeed	(in	which	case
                                        we	are	done),	or	the	proof	will fail	(in	which	case	the	failure	will	help	us	
                                        refine	our	guess).
                                        <br/><i className=" fa fa-home ">Chandigarh, Punjab</i>
                                        <br/><i className=" fa fa-envelope ">xxxxxxx@cumail.in</i>
                                        <br/><i className=" fa fa-phone ">xxxxxxxxxx</i>
                                        </p>
                        <h3><a ><i className="col-2 fa fa-instagram fa-md"></i></a>
                            <a ><i className="col-2 fa fa-facebook fa-md"></i></a>
                            <a ><i className="col-2 fa fa-linkedin fa-md"></i></a>
                            <a ><i className="col-2 fa fa-twitter fa-md"></i></a>
                            <a ><i className="col-2 fa fa-youtube fa-md"></i></a>
                            <a ><i className="col-2 fa fa-envelope-o fa-md"></i></a></h3>
                    </div>
                       
                            
                        
                
			    </div>
		    </div>
	    </div>
     );
}
 
export default Footer;