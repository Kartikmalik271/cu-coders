import React from 'react';

import event1 from '../../assets/upcoming/img/event1.png'
import event2 from '../../assets/upcoming/img/event2.png'
import event3 from '../../assets/upcoming/img/event3.png'
import ellipse from '../../assets/upcoming/img/ellipse.png'
import wave from '../../assets/upcoming/img/wave.png'

const Content = () => {
    return ( 
        <div className="upcoming-content pb-5 col-12">
            <div className="row justify-content-center align-items-center">

                <h1 className="col-12 upcoming-main-heading">Upcoming Events</h1>
                <p className="col-12 col-md-7 upcoming-main-para">In	other	words,	it	addresses	the	question:	What	if	the	given	recurrence	
                    doesn’t	seem	to	match	with any	of	these	(master	theorem)	methods?	
                    If	we	guess	a	solution	and	then	try	to	verify	our	guess inductively,	
                    usually	either	the	proof	will	succeed	(in	which	case	we	are	done),	or	
                    the	proof	will fail	(in	which	case	the	failure	will	help	us	refine	
                    our	guess).
                    As	an	example,	consider	the	recurrence	.	This	doesn’t	fit	into	the	form required	by
                </p>
                <div className="upcoming-content-eventlhs col-10 py-5 my-3">
                    <div className="row justify-content-center align-items-center">
                    <img className="upcoming-wave d-none d-lg-block col-lg-6 col-xl-5"src={wave} alt=""/>
                        <img className="col-8 col-md-3 order-last order-md-first"src={event1} alt=""/>
                        <div className="upcoming-eventlhs-details col-12 col-md-5 offset-md-1 ">
                            <h2>Event Name</h2>
                            <p>doesn’t	seem	to	match	with any	of	these	(master	theorem)	methods?	
                                If	we	guess	a	solution	and	then	try	to	verify	our	guess inductively,	
                                usually	either	the	proof	will	succeed	(in	which	case	we	are	done),	or	
                                the	proof	will fail	(in	which	case	the	failure	will	help	us	refine
                            </p>
                            <button className="btn upcoming-event-details">Learn More</button>
                        </div>

                    </div>
                    <img className="upcoming-ellipserhs col-7 col-md-3"src={ellipse} alt=""/>	
                </div>

                <div className="upcoming-content-eventrhs col-10 py-5 my-3 ">
                    <div className="row justify-content-center align-items-center">
                        <img className="col-8 col-md-3 order-last" src={event2} alt=""/>
                        <div className="upcoming-eventrhs-details col-12 col-md-5">
                            <h2>Event Name</h2>
                            <p>doesn’t	seem	to	match	with any	of	these	(master	theorem)	methods?	
                                If	we	guess	a	solution	and	then	try	to	verify	our	guess inductively,	
                                usually	either	the	proof	will	succeed	(in	which	case	we	are	done),	or	
                                the	proof	will fail	(in	which	case	the	failure	will	help	us	refine
                            </p>
                            <button className="btn upcoming-event-details">Learn More</button>
                        </div>

                    </div>
                    <img className="upcoming-ellipselhs col-7 col-md-3"src={ellipse} alt=""/>	
                </div>

                <div className="upcoming-content-eventlhs col-10 py-5 my-3">
                    <div className="row justify-content-center align-items-center">
                        <img className="col-8 col-md-3 order-last order-md-first"src={event3} alt=""/>
                        <div className="upcoming-eventlhs-details col-12 col-md-5 offset-md-1 ">
                            <h2>Event Name</h2>
                            <p>doesn’t	seem	to	match	with any	of	these	(master	theorem)	methods?	
                                If	we	guess	a	solution	and	then	try	to	verify	our	guess inductively,	
                                usually	either	the	proof	will	succeed	(in	which	case	we	are	done),	or	
                                the	proof	will fail	(in	which	case	the	failure	will	help	us	refine
                            </p>
                            <button className="btn upcoming-event-details">Learn More</button>
                        </div>

                    </div>
                    <img className="upcoming-ellipserhs col-7 col-md-3"src={ellipse} alt=""/>	
                </div>    
                <div className="col-12 mt-xl-5">
                <div className="row justify-content-center"> 
                <button className="btn events-main-btn-half mt-2 mt-xl-5" 
                                    style={{outline:"none",
                                        border:'none',
                                        color:'white',
                                        padding:'12px',
                                        borderRadius:'10px',
                                        marginTop:'20px', 
                                        backgroundColor: '#F24F04',}}>Learn More
                                                                            <span 
                                                                                style={{
                                                                                backgroundColor: '#F66C2D',
                                                                                padding:'7px',
                                                                                marginLeft:'10px',
                                                                                borderRadius:'5px',
                                                                                }}>>
                                                                            </span> 
                
                </button>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Content;